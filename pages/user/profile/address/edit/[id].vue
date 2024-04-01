<script setup lang="ts">
definePageMeta({
  layout: "blank",
})
const route = useRoute()
const toggle = ref("off")

const mapRef = ref<any>(null)
const center = ref({ lat: 0, lng: 0 })
const generatedAddress = ref("")
const isMapOpen = ref(false)
import axios from "axios"

const getAddress = async (lat: number, lng: number) => {
  try {
    const res = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    )
    console.log(res.data)
    if (res.data) {
      generatedAddress.value = res.data.display_name
    }
  } catch (error) {}
}

const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      center.value = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      if (mapRef.value) {
        mapRef.value.leafletObject.setView(center.value, 1000)
      }
      getAddress(center.value.lat, center.value.lng)
    })
  }
}

onMounted(() => {
  getCurrentLocation()
  console.log(center.value)
})

const data = reactive({
  label: "Kos",
  address: "tompe rt.04/02, lorog, tawangsari, sukoharjo",
  patokan: "depan masjid",
  name: "July Dwi Saputra",
  telp: "+6285865412191",
})

const toggleSwitch = () => {
  toggle.value = toggle.value === "off" ? "on" : "off"
}
</script>
<template>
  <Header title="Edit Alamat" />
  <div class="px-6 flex flex-col gap-4 mt-5">
    <div>
      <h2 class="font-sm text-brg-primary-dark font-semibold mb-2">
        Pilih lokasi anda
      </h2>
      <div
        @click="isMapOpen = true"
        class="w-full h-[60px] rounded-[10px] border-[1px] border-brg-light-gray flex justify-center items-center cursor-pointer"
      >
        <Icon name="lucide:map-pin" size="24px" class="text-brg-light-gray" />
      </div>
    </div>
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

  <!-- maps -->
  <div v-if="isMapOpen" class="fixed top-o bottom-0 w-full h-full z-50">
    <div class="absolute w-full h-full z-10">
      <LMap ref="mapRef" :zoom="1000" :center="[center.lat, center.lng]">
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
        />
        <LMarker :lat-lng="[center.lat, center.lng]" draggable> </LMarker>
      </LMap>
    </div>

    <div
      class="absolute flex flex-col z-50 bottom-0 w-full h-48 rounded-tl-[36px] rounded-tr-[36px] pt-6 px-6 bg-white"
    >
      <p class="text-sm font-medium">
        {{ generatedAddress }}
      </p>

      <div class="flex gap-x-1 justify-between mt-4">
        <button
          class="w-[40%] text-sm p-2 text-white bg-brg-primary rounded-xl mt-6"
        >
          Simpan
        </button>
        <button
          @click="isMapOpen = false"
          class="w-[40%] text-sm p-2 text-white bg-brg-light-gray rounded-xl mt-6"
        >
          Batal
        </button>
      </div>
    </div>

    <div
      class="rounded-full w-12 h-12 bg-white absolute z-50 bottom-[35%] right-6 flex justify-center items-center"
      @click="getCurrentLocation"
    >
      <Icon name="bx:target-lock" size="30px" class="mx-auto text-black" />
    </div>
  </div>
</template>
