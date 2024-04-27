<script setup lang="ts">
const { data: user } = <any>useAuth()
const nuxt = useNuxtApp()

const { data, status, refresh } = useFetch("/api/v1/dashboard/user", {
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
  if (data.value.data === null) {
    refresh()
  }
})
</script>

<template>
  <section class="mt-[30px] mb-10 px-6">
    <h1 class="text-2xl text-brg-primary-dark font-bold mb-4">
      Hai {{ user.user.name }}
    </h1>
    <CardSummaryTransaction
      v-if="status === 'success'"
      :total="data.status === 200 ? data.data.totalAmount : 0"
    />
  </section>
</template>
