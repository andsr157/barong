<script setup lang="ts">
import { useAddressStore } from "~/stores/Address.store"

const addresStore = useAddressStore()
definePageMeta({
  layout: "blank",
  middleware: ["auth", "role", "address"],
})

const { address, isLoading } = storeToRefs(addresStore)

onMounted(() => {
  addresStore.getAddress()
})
</script>
<template>
  <AddressHeader title="Daftar Alamat" />
  <div v-if="!isLoading">
    <div class="px-5 mt-[20px] flex flex-col gap-7">
      <NuxtLink
        v-for="(data, index) in address"
        :key="index"
        :to="`/user/profile/address/edit/${data.id}`"
      >
        <CardAddress
          :label="data.label"
          :name="data.owner_name"
          :telp="data.owner_telp"
          :address="data.address_name"
          :detail="data.detail"
          noButton
          :status="data.is_main === true ? true : false"
        />
      </NuxtLink>
    </div>
    <div class="flex w-full justify-center mb-12">
      <NuxtLink to="/user/profile/address/add">
        <ButtonLarge
          label="Tambah alamat"
          class="mx-auto mt-10 mb-12"
          to="/user/profile/address/add"
        />
      </NuxtLink>
    </div>
  </div>
  <div v-else><SplashScreen :isLoading="true" /></div>
</template>
