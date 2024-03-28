<script setup lang="ts">
const { data: user } = <any>useAuth()
import axios from "axios"
const total = ref()

onMounted(async () => {
  try {
    const res = await axios.get("/api/v1/dashboard/user/1")
    if (res) {
      total.value = res.data.data.totalAmount
    } else {
      console.error("failed fetch api")
    }
    console.log(total.value)
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section class="mt-[30px] mb-10 px-6">
    <h1 class="text-2xl text-brg-primary-dark font-bold mb-4">
      Hai {{ user.user.name }}
    </h1>
    <CardSummaryTransaction :total="total" />
  </section>
</template>
