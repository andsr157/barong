<script setup lang="ts">
import { TRANSACTION } from "~/constants/trash.constants"
const activeTransaction = computed(() => {
  return TRANSACTION.filter((data) => {
    return (
      (data.status.name === "taking" || data.status.name === "searching") ??
      null
    )
  })
})

const doneTransaction = computed(() => {
  return TRANSACTION.filter((data) => {
    return data.status.name === "finish" ?? null
  })
})

const canceledTransaction = computed(() => {
  return TRANSACTION.filter((data) => {
    return data.status.name === "canceled" ?? null
  })
})

const data = ref<any>({
  name: "saat ini",
  data: null,
})
const filterTransaction = (status: string) => {
  if (status === "active") {
    data.value.name = "saat ini"
    data.value.data = activeTransaction
  } else if (status === "finish") {
    data.value.name = "selesai"
    data.value.data = doneTransaction
  } else if (status === "canceled") {
    data.value.name = "dibatalkan"
    data.value.data = canceledTransaction
  }
}

definePageMeta({
  layout: "blank",
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

  <div class="block px-6 mt-6 pt-6`">
    <h1 class="font-semibold text-sm">Transaksi {{ data.name }}</h1>
    <div class="flex flex-col gap-6 mt-4" v-if="data.data !== null">
      <CardTransactionUser
        v-for="transaction in data.data"
        :detail-sampah="formatSampah(transaction.detailSampah)"
        :status="transaction.status"
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
