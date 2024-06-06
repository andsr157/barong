<script setup lang="ts">
useHead({
  link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
})
const notificationStore = useNotificationStore()
const { data: user }: any = useAuth()

const showNotification = async (payload: any) => {
  try {
    const res = (await $fetch(
      `/api/v1/notification/${payload.notificationId}`
    )) as any
    console.log("data", res)
    const payloadData = {
      ...payload.new,
      ...res.data,
    }
    if (res && res.status === 200) {
      notificationStore.updateNotificationState(payloadData)
      // if (process.client) {
      //   new Notification("transaksi", {
      //     body: payloadData.title,
      //   })
      // }
    }
  } catch (error) {
    console.log("err", error)
  }
}

const newNotificationData = useNuxtApp()
  .$supabase.channel("app-notification")
  .on(
    "postgres_changes",
    {
      event: "INSERT",
      schema: "public",
      table: "user_notification",
      filter: `user_id=eq.${user?.value?.user?.id}`,
    },
    (payload: any) => {
      console.log(payload)
      showNotification(payload.new)
    }
  )
  .subscribe()

const isLoading = ref(false)
const nuxtApp = useNuxtApp()

nuxtApp.hook("page:start", () => {
  isLoading.value = true
})
nuxtApp.hook("page:finish", () => {
  setTimeout(() => {
    isLoading.value = false
  }, 800)
})
</script>

<template>
  <SplashScreen :is-loading="isLoading" />
  <VitePwaManifest />
  <NuxtLayout>
    <NotificationPopUp />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body {
  height: 100vh;
}
#__nuxt {
  max-width: 450px;
  margin-right: auto;
  margin-left: auto;
}
</style>
