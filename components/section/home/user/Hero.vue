<script setup lang="ts">
import axios from "axios"

const total = ref()
const { data: user } = <any>useAuth()
const nuxt = useNuxtApp()

const { data, status } = useFetch("/api/v1/dashboard/user", {
  getCachedData(key) {
    return nuxt.payload.data[key] || nuxt.static.data[key]
  },
})

onMounted(async () => {
  // try {
  //   const res = await axios.get("/api/v1/dashboard/user")
  //   if (res) {
  //     total.value = res.data.data.totalAmount
  //   } else {
  //     console.error("failed fetch api")
  //   }
  // } catch (error) {
  //   console.error(error)
  // }
})
</script>

<template>
  <section class="mt-[30px] mb-10 px-6">
    <h1 class="text-2xl text-brg-primary-dark font-bold mb-4">
      Hai {{ user.user.name }}
    </h1>
    <CardSummaryTransaction
      :total="status === 'success' ? data.data.totalAmount : 0"
    />
  </section>
</template>
