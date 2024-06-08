<script setup lang="ts">
import { ref, onBeforeMount } from "vue"
import { useRouter } from "vue-router"

definePageMeta({
  layout: "blank",
  middleware: ["auth"],
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

  if (notificationPermission === "default") {
    isShowModalNotification.value = true
  } else if (locationPermission == "prompt") {
    isShowModalLocation.value = true
  } else {
    if (notificationPermission === "denied") {
      alert(
        "Notifikasi tidak diizinkan. Silakan aktifkan notifikasi di pengaturan browser Anda atau Anda tidak akan menerima nNtifikasi apapun dari Aplikasi ini"
      )
    }

    if (locationPermission === "denied") {
      alert(
        "Akses lokasi tidak diizinkan. Silakan aktifkan lokasi di pengaturan browser Anda, Atau Anda tidak akan dapat mengatur alamat lokasi anda"
      )
    }
    redirectToRole()
  }
}

const handleLocationPermission = () => {
  navigator.geolocation.getCurrentPosition(
    () => {
      isShowModalLocation.value = false
      redirectToRole()
    },
    (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        alert(
          "Akses lokasi tidak diizinkan. Silakan aktifkan lokasi di pengaturan browser Anda, Atau Anda tidak akan dapat mengatur alamat lokasi anda"
        )
        checkPermissions()
      }
    }
  )
}

// const handleNotificationPermission = () => {
//   if (Notification.permission === "denied") {
//     isShowModalNotification.value = false
//     alert(
//       "Notifikasi diblokir. Silakan aktifkan notifikasi di pengaturan browser Anda atau Anda tidak akan menerima nNtifikasi apapun dari Aplikasi ini"
//     )
//     checkPermissions()
//   } else if (Notification.permission === "default") {
//     isShowModalNotification.value = true
//     requestNotificationPermission()
//   } else if (Notification.permission === "granted") {
//     // If already granted, do what is needed
//     isShowModalNotification.value = false
//   }
// }

const handleNotificationPermission = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      isShowModalNotification.value = false
      checkPermissions()
    } else if (permission === "default") {
      isShowModalNotification.value = true
    } else if (permission === "denied") {
      isShowModalNotification.value = false
      alert(
        "Notifikasi tidak diizinkan. Silakan aktifkan notifikasi di pengaturan browser Anda atau Anda tidak akan menerima nNtifikasi apapun dari Aplikasi ini"
      )
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
