<script setup lang="ts">
import { formatSampah } from "~/composables/helpers"

const nuxt = useNuxtApp()
const {
  data: transactionActive,
  pending,
  error,
  refresh,
} = await useFetch<any>("/api/v1/transaction/user/active", {
  getCachedData(key) {
    const dataCache = nuxt.payload.data[key] || nuxt.static.data[key]
    if (!dataCache) {
      return
    } else {
      return dataCache
    }
  },
})

onMounted(() => {
  if (transactionActive.value.data === null) {
    refresh()
  }
})
</script>

<template>
  <section class="px-6 pb-40">
    <h2 class="mb-6 text-xl font-semibold text-brg-primary-dark">
      Transaksi Aktif
    </h2>
    <div v-if="pending">lagi loading sabar</div>
    <div
      class="flex flex-col gap-5"
      v-else-if="transactionActive.status === 200"
    >
      <CardTransactionUser
        v-for="transaction in transactionActive?.data"
        :detail-sampah="formatSampah(transaction.detailSampah)"
        :status="transaction.status"
        :review="transaction.review.rate"
        :to="`/user/transaction/${transaction.id}/${transaction.status.name}`"
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
