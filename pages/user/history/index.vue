<script setup lang="ts">
import { TRANSACTION } from "~/constants/trash.constants"
import { ref } from "vue"

const status = ref("saatIni")

const doneTransaction = computed(() => {
  return TRANSACTION.filter((data) => {
    return data.status.name === "selesai"
  })
})

const canceledTransaction = computed(() => {
  return TRANSACTION.filter((data) => {
    return data.status.name === "dibatalkan"
  })
})

const buttonClick = (selectedStatus: string) => {
  status.value = selectedStatus
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
      @click="buttonClick('saatIni')"
      :buttonClass="`${
        status === 'saatIni' ? '!bg-brg-primary' : '!bg-brg-light-gray'
      }`"
    />
    <ButtonSmall
      label="Selesai"
      @click="buttonClick('selesai')"
      :buttonClass="`${
        status === 'selesai' ? '!bg-brg-primary' : '!bg-brg-light-gray'
      }`"
    />
    <ButtonSmall
      label="Dibatalkan"
      @click="buttonClick('dibatalkan')"
      :buttonClass="`${
        status === 'dibatalkan' ? '!bg-brg-primary' : '!bg-brg-light-gray'
      }`"
    />
  </div>

  <div :class="`${status === 'saatIni' ? 'block px-6 mt-6' : 'hidden'}`">
    <h1 class="font-semibold text-sm">Transaksi Saat ini:</h1>
    <div class="flex flex-col gap-6 mt-4">
      <CardTransactionUser
        v-for="transaction in TRANSACTION"
        :detail-sampah="formatSampah(transaction.detailSampah)"
        :status="transaction.status"
      />
    </div>
  </div>
  <div :class="`${status === 'selesai' ? 'block px-6 mt-6' : 'hidden'}`">
    <h1 class="font-semibold text-sm">Transaksi Selesai:</h1>
    <div class="flex flex-col gap-6 mt-4">
      <CardTransactionUser
        v-for="transactionselesai in doneTransaction"
        :detail-sampah="formatSampah(transactionselesai.detailSampah)"
        :status="transactionselesai.status"
      />
    </div>
  </div>
  <div :class="`${status === 'dibatalkan' ? 'block px-6 mt-6' : 'hidden'}`">
    <h1 class="font-semibold text-sm">Transaksi Dibatalkan:</h1>
    <div class="flex flex-col gap-6 mt-4">
      <CardTransactionUser
        v-for="transactiondibatalkan in canceledTransaction"
        :detail-sampah="formatSampah(transactiondibatalkan.detailSampah)"
        :status="transactiondibatalkan.status"
      />
    </div>
  </div>
</template>
