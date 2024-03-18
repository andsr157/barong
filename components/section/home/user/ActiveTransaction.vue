<script setup lang="ts">
import { formatSampah } from "~/composables/helpers"
import { TRANSACTION } from "~/constants/trash.constants"

const activeTransaction = computed(() => {
  return TRANSACTION.filter((data) => {
    return data.status.name === "taking" || data.status.name === "searching"
  })
})
</script>

<template>
  <section class="px-6 pb-24">
    <h2 class="mb-6 text-xl font-semibold text-brg-primary-dark">
      Transaksi Aktif
    </h2>
    <div class="flex flex-col gap-5" v-if="true">
      <CardTransactionUser
        v-for="transaction in activeTransaction"
        :detail-sampah="formatSampah(transaction.detailSampah)"
        :status="transaction.status"
        :review="transaction.review.rate"
        :to="`/user/transaction/${transaction.id}/${transaction.status.name}`"
      />
    </div>
    <div class="w-full pb-14" v-if="false">
      <p
        class="text-xs font-medium text-brg-primary-dark text-opacity-70 text-center"
      >
        TIdak ada transaksi aktfi saat ini
      </p>
    </div>
  </section>
</template>
