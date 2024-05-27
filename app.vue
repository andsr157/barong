<script setup lang="ts">
useHead({
  link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
})
const notificationStore = useNotificationStore()
const { data: user }: any = useAuth()

const chat = useNuxtApp()
  .$supabase.channel("app-notification")
  .on(
    "postgres_changes",
    {
      event: "INSERT",
      schema: "public",
      table: "UserNotification",
      filter: `user_id=eq.${user?.value?.user?.id}`,
    },
    async (payload: any) => {
      console.log(payload)
      const res = (await $fetch(
        `/api/v1/notification/${payload.new.notificationId}`
      )) as any
      const payloadData = {
        ...payload.new,
        ...res.data,
      }
      if (res && res.status === 200) {
        const notif = new Notification("transaksi", {
          body: payloadData.title,
        })
        notificationStore.updateNotificationState(payloadData)
      }
    }
  )
  .subscribe()
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtLoadingIndicator />
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
