<script setup lang="ts">
definePageMeta({
  layout: "blank",
});
</script>
<template>
  <Header title="Daftar Alamat" />

  <div class="px-5 mt-[20px] flex flex-col gap-6">
    <CardAddress
      label="Rumah"
      name="July Dwi Saputra"
      telp="0858669121"
      address="Tompe rt.04/02, Lorog, Tawangsari, Sukoharjo, Jawa tengah 57561"
      labelButton="Ubah Alamat"
      path="/user/profile/address/edit"
      :status=true
    />
    <CardAddress
      label="Rumah"
      name="July Dwi Saputra"
      telp="0858669121"
      address="Tompe rt.04/02, Lorog, Tawangsari, Sukoharjo, Jawa tengah 57561"
      labelButton="Ubah Alamat"
      path="/user/profile/address/edit"
      :status=false
    />
    <CardAddress
      label="Rumah"
      name="July Dwi Saputra"
      telp="0858669121"
      address="Tompe rt.04/02, Lorog, Tawangsari, Sukoharjo, Jawa tengah 57561"
      labelButton="Ubah Alamat"
      path="/user/profile/address/edit"
      :status=false
    />
    <NuxtLink
      to="/user/profile/address/add"
      class="mt-20 mx-auto bg-brg-primary w-[292px] h-[41px] flex justify-center items-center text-white font-medium rounded-3xl"
      >Tambah Alamat</NuxtLink>
  </div>
</template>
