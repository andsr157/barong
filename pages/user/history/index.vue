<script setup lang="ts">
import { useTransactionStore } from "~/stores/Transaction.store"
const transactionStore = useTransactionStore()
const { isLoading } = storeToRefs(transactionStore)

const data = ref<any>({
  name: "saat ini",
  data: transactionStore.activeTransaction,
})
const filterTransaction = (status: string) => {
  if (status === "active") {
    data.value.name = "saat ini"
    data.value.data = transactionStore.activeTransaction
  } else if (status === "finish") {
    data.value.name = "selesai"
    data.value.data = transactionStore.doneTransaction
  } else if (status === "canceled") {
    data.value.name = "dibatalkan"
    data.value.data = transactionStore.canceledTransaction
  }
}

definePageMeta({
  layout: "default",
})

onMounted(async () => {
  await transactionStore.getAllTransaction()
})
</script>
<template>
  <Header title="Riwayat Transaksi" />
  <div class="flex justify-evenly mt-5">
    <ButtonSmall
      label="Saat ini"
      @click="filterTransaction('active')"
      :buttonClass="`${
        data.name === 'saat ini' ? '!bg-brg-primary' : '!bg-brg-light-gray'
      }`"
    />
    <ButtonSmall
      label="Selesai"
      @click="filterTransaction('finish')"
      :buttonClass="`${
        data.name === 'selesai' ? '!bg-brg-primary' : '!bg-brg-light-gray'
      }`"
    />
    <ButtonSmall
      label="Dibatalkan"
      @click="filterTransaction('canceled')"
      :buttonClass="`${
        data.name === 'dibatalkan' ? '!bg-brg-primary' : '!bg-brg-light-gray'
      }`"
    />
  </div>

  <div v-if="isLoading" class="px-6 mt-6">Lagi loading sabar</div>
  <div v-else class="px-6 mt-6 pt-6`">
    <h1 class="font-semibold text-sm mb-6">Transaksi {{ data.name }}</h1>
    <div class="flex flex-col gap-y-6 mt-4 pb-24" v-if="data.data.length > 0">
      <CardTransactionUser
        v-for="transaction in data.data"
        :detail-sampah="formatSampah(transaction.detailSampah)"
        :status="transaction.status"
        :review="transaction.review.rate"
        :to="`/user/transaction/${transaction.id}/${transaction.status.name}`"
      />
    </div>

    <div v-else>
      <p
        class="text-center text-sm font-medium text-brg-primary-dark text-opacity-70 mt-10"
      >
        Tidak ada data
      </p>
    </div>
  </div>
</template>
