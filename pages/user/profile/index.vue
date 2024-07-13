<script setup lang="ts">
import SplashScreen from "~/components/SplashScreen.vue"

const { signOut } = useAuth()

const isLoading = ref(false)

const handleLogout = async () => {
  isLoading.value = true
  localStorage.removeItem("subscriptionData")
  localStorage.removeItem("transaction")
  await signOut()
  isLoading.value = false
}

const { data: user } = <any>useAuth()
const nuxt = useNuxtApp()

const { data, status } = useFetch("/api/v1/dashboard/user", {
  getCachedData(key) {
    return nuxt.payload.data[key] || nuxt.static.data[key]
  },
})

definePageMeta({
  middleware: ["auth", "role"],
})
</script>

<template>
  <SplashScreen :is-loading="isLoading" />
  <Header title="Profil" />
  <div class="h-[600px] mt-5 px-6">
    <div
      class="w-full py-6 rounded-lg mx-auto bg-gradient-to-br from-brg-primary to-brg-secondary flex flex-col justify-center items-center"
    >
      <h1 class="font-semibold text-white my-1 capitalize">
        {{ user.user.name }}
      </h1>
      <h1 class="text-sm text-white font-normal mb-1">
        {{ user.user.telp }}
      </h1>
      <h1 class="text-sm text-white">{{ user.user.email }}</h1>
    </div>
    <div class="mt-[34px] flex flex-col gap-[15px]">
      <NuxtLink class="flex items-start gap-2" to="/user/profile/edit">
        <Icon name="mdi:account-edit" size="26px" class="text-brg-gray" />
        <div>
          <h1 class="text-[15px] font-semibold text-brg-primary-dark">
            Ubah Profil
          </h1>
          <p class="text-xs text-brg-gray font-light">Kelola Data Profilmu</p>
        </div>
      </NuxtLink>
      <NuxtLink class="flex items-start gap-2" to="/user/profile/address">
        <Icon
          name="uil:map-marker-edit"
          size="26px"
          class="text-brg-primary-dark"
        />
        <div>
          <h1 class="text-[15px] font-semibold text-brg-primary-dark">
            Alamat
          </h1>
          <p class="text-xs text-brg-gray font-light">
            Tambah dan edit Data Alamat
          </p>
        </div>
      </NuxtLink>
      <NuxtLink
        class="flex items-start gap-2"
        to="/user/profile/changePassword"
      >
        <Icon
          name="ooui:edit-lock"
          class="text-brg-primary-dark me-1"
          size="22px"
        />
        <div>
          <h1 class="text-[15px] font-semibold text-brg-primary-dark">
            Ubah Kata Sandi
          </h1>
          <p class="text-xs text-brg-gray font-light">Kelola kata sandi akun</p>
        </div>
      </NuxtLink>
      <a
        class="flex items-start gap-2"
        href="https://www.barongsolo.com/feature"
        target="_blank"
      >
        <Icon
          name="material-symbols:info-outline"
          size="26px"
          class="text-brg-primary-dark"
        />
        <div>
          <h1 class="text-[15px] font-semibold text-brg-primary-dark">
            Panduan Penggunaan
          </h1>
          <p class="text-xs text-brg-gray font-light">
            Panduan penggunaan semua Ffitur aplikasi
          </p>
        </div>
      </a>
    </div>
    <div class="mt-[34px] flex flex-col gap-[15px]">
      <div class="flex items-center gap-2 cursor-pointer" @click="handleLogout">
        <Icon name="mdi:logout" size="24px" class="text-brg-red" />
        <h1 class="font-semibold text-brg-red">Keluar</h1>
      </div>
    </div>
  </div>
</template>
