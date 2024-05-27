<script setup lang="ts">
import { estimateTotal } from "~/composables/helpers"

const transactionStore = useTransactionStore()
const toastStore = useToastStore()

const route = useRoute()
const router = useRouter()
const transaction = ref<any>()
const isModalOpen = ref(false)
const { data: user } = <any>useAuth()
const userId = user.value?.user?.id
const isLoading = ref(false)

const estimate = computed(() => {
  return estimateTotal(transaction.value.detailSampah)
})

const handleFinishTransaction = () => {
  router.push(`/user/transaction/success`)
}

const handleCancelTransaction = async () => {
  try {
    isLoading.value = true
    const res = (await $fetch("/api/v1/transaction/user/cancel", {
      method: "PUT",
      body: {
        id: transaction.value.id,
      },
    })) as any

    if (res && res.status === 200) {
      transaction.value.status = res.data
      toastStore.success({
        text: "berhasil membatalkan transaksi",
      })
    } else {
      toastStore.error({
        text: "gagal  membatalkan transaksi",
      })
    }
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
    console.log(error)
  }
}

const handleSetCurrentTransaction = () => {
  console.log(user.value)
  const transactionData = {
    id: transaction.value.id,
    user_id: userId,
    address: {
      id: null,
      label: "",
      owner_name: "",
      address_name: "",
      owner_telp: "",
      detail: "",
      latitude: "",
      longitude: "",
    },
    status_id: null,
    note: transaction.value.note,
  }

  const transaction_detail = transaction.value.detailSampah
  const currentTransaction = {
    transaction: transactionData,
    transaction_detail: transaction_detail,
  }
  let transaction_id
  if (Array.isArray(route.params.id)) {
    transaction_id = route.params.id[0]
  } else {
    transaction_id = route.params.id
  }
  transactionStore.transactionData = currentTransaction
  if (transactionStore.transactionData.transaction.id === transaction_id) {
    router.push("/user/transaction/add")
  }
}

definePageMeta({
  layout: "blank",
})

const newTransactionData = useNuxtApp()
  .$supabase.channel("user-transaction")
  .on(
    "postgres_changes",
    {
      event: "UPDATE",
      schema: "public",
      table: "transaction",
      filter: `user_id=eq.${user?.value?.user?.id}`,
    },
    async (payload: any) => {
      console.log(payload)
      const res = await transactionStore.getSingleTransaction(payload.new.id)
      transaction.value = res.data
    }
  )
  .subscribe()

onMounted(async () => {
  let id: string
  if (Array.isArray(route.params.id)) {
    id = route.params.id[0]
  } else {
    id = route.params.id
  }
  const res = await transactionStore.getSingleTransaction(id)
  transaction.value = res.data
  console.log(res.data)
})
</script>

<template>
  <Toast />
  <Header title="Detail">
    <div
      class="flex w-full justify-end cursor-pointer"
      v-if="
        transaction &&
        (transaction.status.name === 'taking' ||
          transaction.status.name === 'finish')
      "
    >
      <NuxtLink :to="`/chat/${transaction.chats_id}`">
        <Icon
          name="mingcute:chat-1-fill"
          size="32px"
          class="text-brg-primary-dark text-right"
        />
      </NuxtLink>
    </div>
  </Header>
  <div v-if="transaction" class="px-6">
    <section class="mt-[30px]">
      <Stepper
        :status="transaction.status"
        v-if="transaction.status.name !== 'canceled'"
      />

      <CardPartnerProfile
        class="mt-14"
        v-if="
          transaction.status.name === 'taking' &&
          transaction.review.rate === null
        "
        :name="transaction.pengepul.name"
        :telp="transaction.pengepul.telp"
        :rating="transaction.pengepul.rating ?? 0"
        :photo="transaction.pengepul.avatar"
      />

      <div
        v-if="
          transaction.status.name === 'finish' &&
          transaction.review.rate !== null
        "
        class="mt-[30px] flex flex-col"
      >
        <div class="flex gap-2 mb-6">
          <NuxtImg :src="transaction.pengepul.avatar" width="34" height="34" />
          <div class="flex flex-col">
            <h1 class="font-medium text-[14px]">
              {{ transaction.pengepul.name }}
            </h1>
            <p class="text-[10px]">{{ transaction.pengepul.telp }}</p>
          </div>
        </div>
        <h2 class="text-brg-primary-dark font-semibold mb-4">Nilai</h2>
        <div class="mx-auto">
          <NuxtRating
            :rating-value="transaction.review.rate"
            :read-only="true"
            class="w-[209px]"
            :rating-size="'50px'"
            :active-color="'#307FF5'"
          />
        </div>
        <label class="text-brg-primary-dark font-semibold mb-4">Ulasan</label>
        <ClientOnly>
          <textarea
            cols="10"
            rows="8"
            class="border-[1px] border-brg-light-gray w-full rounded-[20px] text-[11px] text-brg-primary-dark focus:outline-none py-3 px-4 font-medium"
            placeholder="isi ulasan anda"
            v-model="transaction.review.ulasan"
            readonly
          >
          </textarea>
        </ClientOnly>
      </div>
    </section>

    <section class="mt-[30px]">
      <h2 class="text-brg-primary-dark font-semibold mb-4">
        Alamat Pengambilan
      </h2>
      <CardAddress
        :label="transaction.address.label"
        :name="transaction.address.name"
        :telp="transaction.address.telp"
        :address="transaction.address.address"
        :detail="transaction.address.detail"
        no-button
      />
    </section>

    <section class="mt-[30px]">
      <h2 class="text-brg-primary-dark font-semibold mb-4">Data penjualan</h2>
      <div class="flex flex-col gap-y-2 mb-9">
        <CardTrashEstimate
          v-if="transaction.status.name === 'finish'"
          v-for="(data, index) in transaction.detailSampah"
          :key="index"
          :category="data.category"
          :subcategory="data.subcategory"
          :weight="data.weight"
          :final-price="data.finalPrice"
          type="finish"
        />
        <CardTrashEstimate
          v-else
          v-for="(data, index) in transaction.detailSampah"
          :key="transaction.id"
          :category="data.category"
          :subcategory="data.subcategory"
          :weight="data.weight"
          :min-price="data.minPrice"
          :max-price="data.maxPrice"
        />
      </div>

      <CardTrashTotal
        v-if="transaction.status.name === 'finish'"
        :total="transaction.totalPrice"
        :serivce-price="transaction.servicePrice"
        :final-total="transaction.finalTotalPrice"
        type="finish"
      />
      <CardTrashTotal v-else :estimate-total="estimate" />
    </section>

    <section class="mt-6">
      <h2 class="text-brg-primary-dark font-semibold mb-4">catatan</h2>
      <ClientOnly>
        <textarea
          cols="10"
          rows="8"
          class="border-[1px] border-brg-light-gray w-full rounded-[20px] text-[11px] text-brg-primary-dark focus:outline-none py-3 px-4 font-medium"
          placeholder="isi catatan"
          v-model="transaction.note"
          readonly
        >
        </textarea>
      </ClientOnly>
    </section>

    <div
      class="max-w-max mx-auto py-12"
      v-if="transaction.status.name === 'searching'"
    >
      <ButtonLarge
        label="Batalkan"
        @click="handleCancelTransaction"
        color="bg-brg-red"
        :disabled="isLoading"
      />
    </div>
    <div
      class="max-w-max mx-auto py-12"
      v-else-if="
        transaction.status.name === 'taking' ||
        transaction.status.name === 'finish'
      "
    >
      <NuxtLink
        :to="`/user/transaction/${transaction.id}/review?partnerId=${transaction.pengepul.id}`"
        v-if="transaction.review.rate === null"
      >
        <ButtonLarge
          label="Selesaikan Transaksi"
          :disabled="transaction.status.name === 'finish' ? false : true"
        />
      </NuxtLink>
    </div>

    <div
      class="max-w-max mx-auto py-12"
      v-else-if="transaction.status.name === 'canceled'"
    >
      <ButtonLarge
        label="Buat Transaksi Lagi"
        @click="handleSetCurrentTransaction"
      />
    </div>
  </div>
  <div v-else="">lagi loading</div>

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
