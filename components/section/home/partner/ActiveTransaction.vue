<script setup lang="ts">
import { formatSampah } from "~/composables/helpers"
const nuxt = useNuxtApp()
const {
  data: transactionActive,
  pending,
  status,
  refresh,
} = await useFetch<any>("/api/v1/transaction/partner/active", {
  transform(input) {
    return {
      ...input,
      fetchedAt: new Date(),
    }
  },
  getCachedData(key) {
    const dataCache = nuxt.payload.data[key] || nuxt.static.data[key]
    if (!dataCache) {
      return
    }
    const expirationDate = new Date(dataCache.fetchedAt)
    expirationDate.setTime(expirationDate.getTime() + 30 * 1000)
    const isExpired = expirationDate.getTime() < Date.now()
    if (isExpired) {
      return
    }
    return dataCache
  },
})
</script>

<template>
  <section class="px-6 pb-24 mt-10">
    <h2 class="mb-6 text-xl font-semibold text-brg-primary-dark">
      Transaksi Aktif
    </h2>
    <div v-if="pending">lagi loading sabar</div>
    <div
      class="flex flex-col gap-5"
      v-else-if="transactionActive.status === 200 && status === 'success'"
    >
      <CardTransactionPartner
        v-for="transaction in transactionActive?.data"
        :transaction_id="transaction.id"
        :detail-sampah="formatSampah(transaction.detailSampah)"
        :status="transaction.status"
        :user="transaction.user"
        :address="transaction.address"
        :time="transaction.time"
        :path="`/partner/transaction/${transaction.id}/${transaction.status.name}`"
      />
    </div>
    <div class="w-full pb-14" v-else>
      <p
        class="text-xs font-medium text-brg-primary-dark text-opacity-70 text-center"
      >
        TIdak ada transaksi aktfi saat ini
      </p>
    </div>
  </section>
</template>
