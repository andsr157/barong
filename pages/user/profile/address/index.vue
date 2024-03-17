<script setup lang="ts">
definePageMeta({
  layout: "blank",
});
</script>
<template>
  <Header title="Daftar Alamat" />

  <div class="px-5 mt-[20px] flex flex-col gap-7">
    <CardAddress
      label="Rumah"
      name="July Dwi Saputra"
      telp="0858669121"
      address="Tompe rt.04/02, Lorog, Tawangsari, Sukoharjo, Jawa tengah 57561"
      labelButton="Ubah Alamat"
      path="/user/profile/address/edit"
      :status="true"
    />
    <CardAddress
      label="Rumah"
      name="July Dwi Saputra"
      telp="0858669121"
      address="Tompe rt.04/02, Lorog, Tawangsari, Sukoharjo, Jawa tengah 57561"
      labelButton="Ubah Alamat"
      path="/user/profile/address/edit"
      :status="false"
    />
    <CardAddress
      label="Rumah"
      name="July Dwi Saputra"
      telp="0858669121"
      address="Tompe rt.04/02, Lorog, Tawangsari, Sukoharjo, Jawa tengah 57561"
      labelButton="Ubah Alamat"
      path="/user/profile/address/edit"
      :status="false"
    />
    <div class="flex">
      <NuxLink to="/user/profile/address/add" class="mx-auto mt-3 mb-14">
        <ButtonLarge label="Tambah Alamat" />
      </NuxLink>
    </div>
  </div>
</template>
