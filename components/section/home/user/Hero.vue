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

let newHeroData: any
onMounted(() => {
  newHeroData = nuxt.$supabase
    .channel("user-home-hero")
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "transaction",
        filter: `user_id=eq.${user?.value?.user?.id}`,
      },
      (payload: any) => {
        refresh()
      }
    )
    .subscribe()
})

onUnmounted(() => {
  if (newHeroData) {
    newHeroData.unsubscribe()
  }
})
</script>

<template>
  <section class="mt-[30px] mb-10 px-6">
    <div class="flex w-full justify-between">
      <h1 class="text-2xl text-brg-primary-dark font-bold mb-4">
        Hai {{ user.user.name }}
      </h1>
      <div class="relative" @click="useRouter().push('/user/notification')">
        <Icon
          name="ri:notification-3-fill"
          size="28px"
          class="text-brg-primary-dark"
        />
        <div
          class="text-center py-[2px] absolute -top-1 right-0 w-4 h-4 text-[9px] rounded-full bg-brg-primary text-white"
        >
          {{
            data && data.data !== null && status === "success"
              ? data.data.notification
              : 0
          }}
        </div>
      </div>
    </div>

    <CardSummaryTransaction
      :total="
        data && data.data !== null && status === 'success'
          ? data.data.totalAmount
          : 0
      "
    />
  </section>
</template>
