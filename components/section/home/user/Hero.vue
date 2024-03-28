<script setup lang="ts">
import axios from "axios"
const total = ref()

const { data: user } = <any>useAuth()
const id = user.value?.user?.id

onMounted(async () => {
  try {
    const headers = { Cookie: document.cookie }
    const res = await axios.get(`/api/v1/dashboard/user/${id}`, {
      headers: headers,
    })
    if (res) {
      total.value = res.data.data.totalAmount
    } else {
      console.error("failed fetch api")
    }
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
