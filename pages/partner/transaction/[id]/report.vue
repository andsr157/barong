<script setup lang="ts">
import axios from "axios"
import { type Transaction } from "~/types/transaction.type"

definePageMeta({
  layout: "blank",
  middleware: ["auth", "role"],
})

const transactionStore = useTransactionStore()
const toastStore = useToastStore()
const { isLoading } = storeToRefs(transactionStore)
const route = useRoute()
const router = useRouter()
const transactionId = ref()
const transaction = ref<Transaction>()

const totalTrashWeight = computed(() => {
  if (transaction.value && transaction.value.detailSampah) {
    const data = transaction.value.detailSampah.reduce(
      (total: number, data: any) => total + parseFloat(data.weight),
      0
    )
    if (data) {
      return data
    } else {
      return 0
    }
  }
  return 0
})

const realTotal = ref<any>()

watch(
  transaction,
  () => {
    if (transaction.value && transaction.value.detailSampah) {
      realTotal.value = transaction.value.detailSampah.reduce((total, item) => {
        if (item.finalPrice !== undefined) {
          return total + item.finalPrice * item.weight
        } else {
          return total
        }
      }, 0)
    } else {
      realTotal.value = 0
    }
  },
  { deep: true }
)

const servicePrice = computed(() => {
  return (realTotal.value * 10) / 100
})

const finalTotalPrice = computed(() => {
  return realTotal.value - servicePrice.value
})

const validationCheck = () => {
  const detailSampah =
    transaction.value?.detailSampah.filter((data: any) => {
      return (
        data.finalPrice === 0 ||
        data.finalPrice === "" ||
        data.finalPrice === undefined ||
        data.weight === 0 ||
        data.weight === "" ||
        data.weight === undefined
      )
    }) ?? []

  if (
    realTotal.value === 0 ||
    realTotal.value === undefined ||
    detailSampah?.length > 0 ||
    detailSampah === undefined
  ) {
    isModalOpen.value = false
    toastStore.error({
      text: "Data harus di isi tidak boleh kosong atau nol",
      timeout: 2000,
    })

    return false
  }

  return true
}

const isModalOpen = ref(false)

const handleFinishTransaction = async () => {
  if (!validationCheck()) {
    return
  }
  const trash = computed(() => {
    return (
      transaction.value?.detailSampah.map((data: any) => {
        return {
          id: data.id,
          price: data.finalPrice,
          weight: data.weight,
        }
      }) ?? []
    )
  })
  const payload = {
    total: realTotal.value,
    trash: trash.value,
  }

  try {
    const res = await axios.put(
      `/api/v1/transaction/report/${transactionId.value}`,
      payload
    )

    if (transaction.value) {
      const imageUrl = transaction.value?.trashImage as string
      const parts = imageUrl.split("/")

      const fileName = parts[parts.length - 1]
      const { data, error } = await useNuxtApp()
        .$supabase.storage.from("images")
        .remove([fileName])
      if (error) {
        console.log("failed delete image", error)
      }
    }

    isModalOpen.value = false
    if (res.data.status === 200) {
      router.push("/partner/transaction/success")
    }
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  const id = Array.isArray(route.params.id)
    ? route.params.id[0]
    : route.params.id

  transactionId.value = id
  const res = await transactionStore.getSingleTransaction(id)
  transaction.value = res.data
})
</script>

<template>
  <Toast />
  <Header title="Pelaporan" />
  <div v-if="isLoading" class="px-6 mt-6">
    <SplashScreen :is-loading="true" />
  </div>
  <div class="px-6" v-else-if="transaction">
    <div class="mt-[30px]">
      <h2 class="text-brg-primary-dark font-semibold mb-4">Data Sampah</h2>
      <div
        class="grid grid-cols-11 gap-x-1 items-end mb-3"
        v-for="(data, index) in transaction.detailSampah"
        :key="index"
      >
        <div
          class="flex items-center w-full h-[38px] col-span-6 px-3 text-brg-primary-dark font-medium rounded-[10px] border-[1px] border-brg-light-gray"
        >
          <span class="text-[11px] shrink-0">{{ data.category }} |&nbsp;</span>
          <span class="text-[10px] truncate"> {{ data.subcategory }}</span>
        </div>
        <div class="col-span-3">
          <Input
            v-model="data.finalPrice"
            wrapper-class="!px-2"
            input-class="!font-medium"
            type="number"
            :min="0"
          >
            <template #prefix>
              <span class="text-[11px] pe-1 pt-[2px]">Rp </span>
            </template>
          </Input>
        </div>
        <div class="col-span-2">
          <Input
            v-model="data.weight"
            wrapper-class="!px-1"
            input-class="!max-w-max pe-[6px] text-brg-primary !font-semibold text-end pe-[2px]"
            type="number"
            :min="0"
          >
            <template #suffix>
              <span class="text-brg-primary text-[9px] font-medium pt-1">{{
                data.unit
              }}</span>
            </template>
          </Input>
        </div>
      </div>
      <!-- <div
        class="flex gap-x-2 justify-end text-xs text-brg-primary-dark font-medium mt-3"
      >
        <p>Total Sampah</p>
        <p class="text-brg-primary text-sm">{{ totalTrashWeight ?? 0 }}</p>
        <p>Kg</p>
      </div> -->
    </div>

    <div class="mt-[30px]">
      <h2 class="text-brg-primary-dark font-semibold mb-4">Total Pendapatan</h2>
      <div class="mt-3 flex flex-col gap-y-3">
        <div>
          <Input
            v-model="realTotal"
            type="number"
            input-class="ps-2"
            label="Total"
            label-class="!text-xs font-semibold"
            prefix-icon="mdi:dollar"
            prefix-icon-color="text-brg-light-gray"
            placeholder="0"
            :min="0"
          />
        </div>
        <div>
          <Input
            v-model="servicePrice"
            type="number"
            input-class="ps-2"
            label="Biaya Layanan"
            label-class="!text-xs font-semibold"
            prefix-icon="eos-icons:service"
            prefix-icon-color="text-brg-light-gray"
            placeholder="0"
            readonly
          />
        </div>
        <div>
          <Input
            v-model="finalTotalPrice"
            type="number"
            input-class="ps-2"
            label="Pendapatan"
            label-class="!text-xs font-semibold"
            prefix-icon="mdi:money"
            prefix-icon-color="text-brg-light-gray"
            placeholder="0"
            readonly
          />
        </div>
      </div>
    </div>

    <div class="max-w-max mx-auto py-12">
      <ButtonLarge label="Selesai" @click="isModalOpen = true" />
    </div>
  </div>

  <ModalDefault
    title="Selesaikan Transaksi"
    desc="apakah anda yakin ingin menyelesaikan transaksi"
    label-confirmation="Selesaikan"
    label-color="text-brg-primary"
    :is-show="isModalOpen"
    emit-function="finishTransaction"
    @closeModal="isModalOpen = false"
    @finishTransaction="handleFinishTransaction"
  />
</template>
