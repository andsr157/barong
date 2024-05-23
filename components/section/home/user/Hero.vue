<script setup lang="ts">
const { data: user } = <any>useAuth()
const nuxt = useNuxtApp()

const { data, status, refresh } = useFetch("/api/v1/dashboard/user", {
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
  <section class="mt-[30px] mb-10 px-6">
    <h1 class="text-2xl text-brg-primary-dark font-bold mb-4">
      Hai {{ user.user.name }}
    </h1>
    <CardSummaryTransaction
      :total="
        data && data.data !== null && status === 'success'
          ? data.data.totalAmount
          : 0
      "
    />
  </section>
</template>
