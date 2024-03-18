<script setup lang="ts">
import { formatSampah } from "~/composables/helpers"
import { TRANSACTION } from "~/constants/trash.constants"

const activeTransaction = computed(() => {
  return TRANSACTION.filter((data) => {
    return data.status.name === "taking"
  })
})
</script>

<template>
  <section class="px-6 pb-24 mt-10">
    <h2 class="mb-6 text-xl font-semibold text-brg-primary-dark">
      Transaksi Aktif
    </h2>
    <div class="flex flex-col gap-5">
      <CardTransactionPartner
        v-for="transaction in activeTransaction"
        :detail-sampah="formatSampah(transaction.detailSampah)"
        :status="transaction.status"
        :review="transaction.review.rate"
        :user="transaction.user"
      />
    </div>
  </section>
</template>
