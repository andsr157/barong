<script setup lang="ts">
const { signOut } = useAuth()

const handleLogout = async () => {
  await signOut()
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
  <Header title="Profil" />
  <div class="h-[600px]">
    <div
      class="h-[238px] bg-brg-primary rounded-br-3xl rounded-bl-3xl flex flex-col justify-center items-center"
    >
      <div
        class="w-[98px] h-[98px] rounded-full border-[3px] overflow-y-hidden"
      >
        <NuxtImg
          :src="user.user.avatar"
          width="98"
          height="98"
          class="object-cover w-full h-full"
        />
      </div>
      <h1 class="font-semibold text-white text-sm my-1">
        {{ user.user.name }}
      </h1>
      <h1 class="text-[11px] text-white font-light mb-1">
        {{ user.user.telp }}
      </h1>
      <h1 class="text-[11px] text-white font-light">{{ user.user.email }}</h1>
    </div>
    <div class="px-6 mt-[34px] flex flex-col gap-[15px]">
      <NuxtLink class="flex items-center gap-2" to="/user/profile/edit">
        <Icon
          name="mdi:account-edit"
          size="24px"
          class="text-brg-primary-dark"
        />
        <h1 class="font-semibold text-brg-primary-dark">Ubah Profil</h1>
      </NuxtLink>
      <NuxtLink class="flex items-center gap-2" to="/user/profile/address">
        <Icon
          name="uil:map-marker-edit"
          size="24px"
          class="text-brg-primary-dark"
        />
        <h1 class="font-semibold text-brg-primary-dark">Alamat</h1>
      </NuxtLink>
      <NuxtLink
        class="flex items-center gap-2"
        to="/user/profile/changePassword"
      >
        <Icon name="ooui:edit-lock" class="text-brg-primary-dark" size="22px" />
        <h1 class="font-semibold text-brg-primary-dark">Ubah Kata Sandi</h1>
      </NuxtLink>
    </div>
    <div class="px-6 mt-[34px] flex flex-col gap-[15px]">
      <div class="flex items-center gap-2 cursor-pointer" @click="handleLogout">
        <Icon name="mdi:logout" size="24px" class="text-brg-red" />
        <h1 class="font-semibold text-brg-red">Keluar</h1>
      </div>
    </div>
  </div>
</template>
