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
const notificationPermissionState = ref<any>(null)
const locationPermissionState = ref<any>(null)

const checkPermissions = async () => {
  const notificationPermission = Notification.permission
  notificationPermissionState.value = notificationPermission

  const locationPermission = await navigator.permissions
    .query({ name: "geolocation" })
    .then((result) => result.state)
  locationPermissionState.value = locationPermission

  if (notificationPermission === "default") {
    isShowModalNotification.value = true
  }

  if (locationPermission === "prompt") {
    isShowModalLocation.value = true
  }

  handlePermissions()
}

const handlePermissions = () => {
  if (notificationPermissionState.value && locationPermissionState.value) {
    // let alertMessage = ""

    // if (notificationPermissionState.value === "denied") {
    //   alertMessage +=
    //     "Notifikasi tidak diizinkan. Silakan aktifkan notifikasi di pengaturan browser Anda atau Anda tidak akan menerima notifikasi apapun dari Aplikasi ini.\n"
    // }

    // if (locationPermissionState.value === "denied") {
    //   alertMessage +=
    //     "Akses lokasi tidak diizinkan. Silakan aktifkan lokasi di pengaturan browser Anda, Atau Anda tidak akan dapat mengatur alamat lokasi anda."
    // }

    // if (alertMessage) {
    //   alert(alertMessage)
    // }

    if (
      notificationPermissionState.value !== "default" &&
      locationPermissionState.value !== "prompt"
    ) {
      redirectToRole()
    }
  }
}

const handleLocationPermission = () => {
  navigator.geolocation.getCurrentPosition(
    () => {
      isShowModalLocation.value = false
      locationPermissionState.value = "granted"
      handlePermissions()
    },
    (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        alert(
          "Akses lokasi tidak diizinkan. Silakan aktifkan lokasi di pengaturan browser Anda, Atau Anda tidak akan dapat mengatur alamat lokasi anda."
        )
        isShowModalLocation.value = false
        locationPermissionState.value = "denied"
        handlePermissions()
      }
    }
  )
}

const handleNotificationPermission = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      isShowModalNotification.value = false
      notificationPermissionState.value = "granted"
      checkNotifSubscription()
    } else if (permission === "denied") {
      alert(
        "Notifikasi tidak diizinkan. Silakan aktifkan notifikasi di pengaturan browser Anda atau Anda tidak akan menerima notifikasi apapun dari Aplikasi ini."
      )
      isShowModalNotification.value = false
      notificationPermissionState.value = "denied"
    } else {
      isShowModalNotification.value = true
    }
    handlePermissions()
  })
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
      if (user.value && user.value.user.id) {
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
  await checkPermissions()
  if (notificationPermissionState.value === "granted") {
    await checkNotifSubscription()
  }
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
