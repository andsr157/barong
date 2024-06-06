<script setup lang="ts">
import { ref, onBeforeMount } from "vue"
import { useRouter } from "vue-router"

definePageMeta({
  layout: "blank",
})

const router = useRouter()
const isShowModalNotification = ref(false)
const isShowModalLocation = ref(false)

const checkPermissions = async () => {
  const notificationPermission = Notification.permission
  const locationPermission = await new Promise((resolve) => {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      resolve(result.state)
    })
  })

  if (notificationPermission !== "granted") {
    isShowModalNotification.value = true
  } else if (locationPermission !== "granted") {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const worker of registrations) {
          console.log("Service worker:", worker)
        }
      })
    }
    isShowModalLocation.value = true
  } else {
    redirectToRole()
  }
}

const handleLocationPermission = () => {
  navigator.geolocation.getCurrentPosition(
    () => {
      isShowModalLocation.value = false
      redirectToRole()
    },
    () => {
      console.error("Geolocation permission denied")
    }
  )
}

const handleNotificationPermission = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      isShowModalNotification.value = false
      checkPermissions()
    }
  })
}

const redirectToRole = () => {
  const { data: user } = <any>useAuth()
  const role = user.value?.user?.role
  if (role === "user") {
    router.push("/user")
  } else if (role === "partner") {
    router.push("/partner")
  }
}

const checkNotifSubscription = async () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      console.log("Service Worker ready")
      const { data: user } = <any>useAuth()
      console.log("user", user)
      if (user.value && user.value.user.id) {
        console.log("User logged in")
        const storedData = JSON.parse(localStorage.getItem("subscriptionData"))
        const VERSION = "1.0.0"
        if (!storedData || storedData.swVersion !== VERSION) {
          registration.active.postMessage({
            type: "SAVE_SUBSCRIPTION",
            userId: user.id,
          })
        }
        if (process.client) {
          localStorage.setItem(
            "subscriptionData",
            JSON.stringify({ swVersion: VERSION })
          )
        }
      }
    })
  } else {
    console.warn("Service Worker is not supported in this browser.")
  }
}

onBeforeMount(async () => {
  await checkNotifSubscription()
  checkPermissions()
})
</script>

<template>
  <ModalPermission
    title="Permintaan Akses Notifikasi"
    desc="tolong izinkan akses notifikasi"
    :is-show="isShowModalNotification"
    emit-function="handleNotificationPermission"
    @handleNotificationPermission="handleNotificationPermission"
  />
  <ModalPermission
    title="Permintaan Akses Lokasi"
    desc="tolong izinkan akses lokasi"
    :is-show="isShowModalLocation"
    emit-function="handleLocationPermission"
    @handleLocationPermission="handleLocationPermission"
  />
</template>
