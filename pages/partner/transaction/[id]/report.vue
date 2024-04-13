<script setup lang="ts">
import { useTransactionStore } from "~/stores/Transaction.store"
import { type Transaction } from "~/types/transaction.type"

definePageMeta({
  layout: "blank",
})

const transactionStore = useTransactionStore()
const { isLoading } = storeToRefs(transactionStore)
const route = useRoute()
const router = useRouter()
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

const realTotal = computed(() => {
  if (transaction.value && transaction.value.detailSampah) {
    return transaction.value.detailSampah.reduce((total, item) => {
      if (item.finalPrice !== undefined) {
        return total + item.finalPrice * item.weight
      } else {
        return total
      }
    }, 0)
  } else {
    return 0
  }
})

const servicePrice = computed(() => {
  return (realTotal.value * 10) / 100
})

const finalTotalPrice = computed(() => {
  return realTotal.value - servicePrice.value
})

onMounted(async () => {
  const id = Array.isArray(route.params.id)
    ? route.params.id[0]
    : route.params.id
  const res = await transactionStore.getSingleTransaction(parseInt(id))
  transaction.value = res.data
  console.log(res)
})

const isModalOpen = ref(false)

const handleFinishTransaction = () => {
  router.push("/partner/transaction/success")
}
</script>

<template>
  <Header title="Pelaporan" />
  <div v-if="isLoading" class="px-6 mt-6">Lagi loading sabar</div>
  <div class="px-6" v-else-if="transaction">
    <div class="mt-[30px]">
      <h2 class="text-brg-primary-dark font-semibold mb-4">Data Sampah</h2>
      <div
        class="grid grid-cols-11 gap-x-1 items-end"
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
          >
            <template #suffix>
              <span class="text-brg-primary text-[9px] font-medium pt-1"
                >Kg</span
              >
            </template>
          </Input>
        </div>
      </div>
      <div
        class="flex gap-x-2 justify-end text-xs text-brg-primary-dark font-medium mt-3"
      >
        <p>Total Sampah</p>
        <p class="text-brg-primary text-sm">{{ totalTrashWeight ?? 0 }}</p>
        <p>Kg</p>
      </div>
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
