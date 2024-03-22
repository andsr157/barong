<script setup lang="ts">
definePageMeta({
  layout: "blank",
});
const name = ref("July DwI Saputra");
const email = ref("julydsp4@gmail.com");
const telepon = ref("085865412191");
</script>
<template>
  <Header title="Ubah Profil" />
  <div class="px-6 flex flex-col gap-4 mt-3">
    <div classs="">
      <label class="text-brg-primary-dark font-semibold text-sm">Profil</label>
      <div class="w-[100px] h-[100px] mx-auto mt-4">
        <NuxtImg
          src="/assets/dummy-profile-user.jpeg"
          width="100"
          height="100"
          class="h-full w-full object-cover rounded-full"
        />
      </div>
      <div class="flex justify-center">
        <ButtonSmall label="ubah" class="mt-4" />
      </div>
    </div>

    <div class="">
      <Input
        v-model="name"
        label="Nama Lengkap"
        labelClass="text-sm font-semibold"
      />
    </div>

    <div class="">
      <Input v-model="email" label="Email" labelClass="text-sm font-semibold" />
    </div>

    <div class="">
      <Input
        v-model="telepon"
        label="telepon"
        labelClass="text-sm font-semibold"
      />
    </div>

    <ButtonLarge label="Simpan" class="mx-auto mt-10 mb-10" />
  </div>
</template>
