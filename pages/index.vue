<script setup lang="ts">
import { ref, onBeforeMount } from "vue"
import { useRouter } from "vue-router"

definePageMeta({
  layout: "blank",
  middleware: "auth",
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

onBeforeMount(() => {
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
