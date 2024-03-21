<script setup lang="ts">
import { TRANSACTION } from "~/constants/trash.constants"
const activeTransaction = computed(() => {
  return TRANSACTION.filter((data) => {
    return data.status.name === "taking" ?? null
  })
})

const doneTransaction = computed(() => {
  return TRANSACTION.filter((data) => {
    return data.status.name === "finish" ?? null
  })
})

const data = ref<any>({
  name: "saat ini",
  data: activeTransaction,
})
const filterTransaction = (status: string) => {
  if (status === "active") {
    data.value.name = "saat ini"
    data.value.data = activeTransaction
  } else if (status === "finish") {
    data.value.name = "selesai"
    data.value.data = doneTransaction
  }
}

definePageMeta({
  layout: "blank",
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

  <div class="block px-6 mt-6 pt-6`">
    <h1 class="font-semibold text-sm">Transaksi {{ data.name }}</h1>
    <div class="flex flex-col gap-6 mt-4" v-if="data.data !== null">
      <CardTransactionPartner
        v-for="transaction in data.data"
        :detailSampah="formatSampah(transaction.detailSampah)"
        :status="transaction.status"
        :user="transaction.user"
        :to="`/partner/transaction/${transaction.id}/${transaction.status.name}`"
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
