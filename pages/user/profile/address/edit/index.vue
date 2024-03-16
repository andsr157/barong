<script setup lang="ts">
definePageMeta({
  layout: "blank",
});
const toggle = ref("off");

const data = reactive({
  label: "Kos",
  address: "tompe rt.04/02, lorog, tawangsari, sukoharjo",
  patokan: "depan masjid",
  name: "July Dwi Saputra",
  telp: "+6285865412191",
});

const toggleSwitch = () => {
  toggle.value = toggle.value === "off" ? "on" : "off";
};
</script>
<template>
  <Header title="Edit Alamat" />
  <div class="px-6 flex flex-col gap-4 mt-5">
    <div>
      <Input
        label="Label Alamat"
        inputClass="placeholder:text-[11px]"
        placeholder="Masukkan label alamat anda"
        v-model="data.label"
      />
    </div>
    <div>
      <Input
        label="Alamat Lengkap"
        inputClass="placeholder:text-[11px]"
        placeholder="Masukkan alamat lengkap anda"
        v-model="data.address"
      />
    </div>
    <div>
      <Input
        label="Patokan"
        inputClass="placeholder:text-[11px]"
        placeholder="Cth(perempatan pas, depan masjid, dll)"
        v-model="data.patokan"
      />
    </div>
    <div>
      <Input
        label="Nama Pemilik"
        inputClass="placeholder:text-[11px]"
        placeholder="Masukkan nama anda"
        v-model="data.name"
      />
    </div>
    <div>
      <Input
        label="Nomor Telepon"
        inputClass="placeholder:text-[11px]"
        placeholder="Masukkan nomor telepon"
        v-model="data.telp"
      />
    </div>
    <div class="flex justify-between items-center">
      <h1 class="text-[11px] text-brg-primary-dark font-medium">
        Atur sebagai alamat utama
      </h1>
      <Icon
        v-model="toggle"
        @click="toggleSwitch"
        :class="`${
          toggle === 'on' ? 'text-brg-primary' : 'text-brg-light-gray'
        }`"
        width="40"
        height="40"
        :name="toggle === 'on' ? 'mdi:toggle-switch' : 'mdi:toggle-switch-off'"
      />
    </div>

    <ButtonLarge label="Simpan" class="mx-auto mt-10" />
  </div>
</template>
