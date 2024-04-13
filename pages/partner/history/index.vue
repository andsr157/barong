<script setup lang="ts">
import { useTransactionStore } from "~/stores/Transaction.store"

const transactionStore = useTransactionStore()
const { isLoading } = storeToRefs(transactionStore)

const data = ref<any>({
  name: "saat ini",
  data: transactionStore.takingTransaction,
})
const filterTransaction = (status: string) => {
  if (status === "active") {
    data.value.name = "saat ini"
    data.value.data = transactionStore.takingTransaction
  } else if (status === "finish") {
    data.value.name = "selesai"
    data.value.data = transactionStore.doneTransaction
  }
}

definePageMeta({
  layout: "partner",
})
onMounted(async () => {
  await transactionStore.getAllUserTransaction("partner")
  data.value.data = transactionStore.activeTransaction
})
</script>
<template>
  <Header title="Riwayat Transaksi" />
  <div class="flex gap-x-5 mt-5 px-6">
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
  </div>
  <div v-if="isLoading" class="px-6 mt-6">Lagi loading sabar</div>
  <div class="block px-6 mt-6 pt-6`" v-else-if="data.data !== null">
    <h1 class="font-semibold text-sm">Transaksi {{ data.name }}</h1>
    <div class="flex flex-col gap-6 mt-4">
      <CardTransactionPartner
        v-for="transaction in data.data"
        :detailSampah="formatSampah(transaction.detailSampah)"
        :status="transaction.status"
        :user="transaction.user"
        :address="transaction.address.address"
        :to="`/partner/transaction/${transaction.id}/${transaction.status.name}`"
      />
    </div>
  </div>
  <div v-else>
    <p
      class="px-6 text-center text-sm font-medium text-brg-primary-dark text-opacity-70 mt-10"
    >
      Tidak ada data
    </p>
  </div>
</template>
