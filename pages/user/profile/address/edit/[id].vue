<script setup lang="ts">
import { useAddressStore } from "~/stores/Address.store"

const addresStore = useAddressStore()
definePageMeta({
  layout: "blank",
})

const route = useRoute()
const address_id = Array.isArray(route.params.id)
  ? route.params.id[0]
  : route.params.id
const toggle = ref("off")

const { center, isLoading, formAdress } = storeToRefs(addresStore)
const isMapOpen = ref(false)
const isModalOpen = ref(false)

const closeMap = () => {
  isMapOpen.value = false
}
onMounted(async () => {
  if (addresStore.address.length === 0) {
    await addresStore.getAddress()
  }
  addresStore.setForm(address_id)
})

const toggleLoading = ref(false)
const toggleSwitch = async () => {
  toggleLoading.value = true
  if (
    formAdress.value.is_main === undefined ||
    formAdress.value.is_main === null
  ) {
    formAdress.value.is_main = false
  }
  formAdress.value.is_main = formAdress.value.is_main === false ? true : false
  const res = await addresStore.setMainAddress({
    is_main: formAdress.value.is_main,
    id: formAdress.value.id,
  })
  if (res) {
    toggleLoading.value = false
  }
}

const handleDeleteAddress = async () => {
  const res = await addresStore.deleteAddress(formAdress.value.id)
  if (res.status === 200) {
    useRouter().push("/user/profile/address")
  }
}

const handleUpdateAddress = async () => {
  const res = await addresStore.updateAddress()
  if (res.status === 200) {
    useRouter().push("/user/profile/address")
  }
}
</script>
<template>
  <div v-if="!isLoading">
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
          label="Alamat Lengkap"
          inputClass="placeholder:text-[11px]"
          placeholder="Masukkan alamat lengkap anda"
          v-model="formAdress.address_name"
        />
      </div>
      <div>
        <Input
          label="Label Alamat"
          inputClass="placeholder:text-[11px]"
          placeholder="Masukkan label alamat anda"
          v-model="formAdress.label"
        />
      </div>
      <div>
        <Input
          label="Patokan"
          inputClass="placeholder:text-[11px]"
          placeholder="Cth(perempatan pas, depan masjid, dll)"
          v-model="formAdress.detail"
        />
      </div>
      <div>
        <Input
          label="Nama Pemilik"
          inputClass="placeholder:text-[11px]"
          placeholder="Masukkan nama anda"
          v-model="formAdress.owner_name"
        />
      </div>
      <div>
        <Input
          label="Nomor Telepon"
          inputClass="placeholder:text-[11px]"
          placeholder="Masukkan nomor telepon"
          v-model="formAdress.owner_telp"
        />
      </div>
      <div class="flex justify-between items-center">
        <h1 class="text-[11px] text-brg-primary-dark font-medium">
          Atur sebagai alamat utama
        </h1>
        <Icon
          v-model="formAdress.is_main"
          @click="toggleSwitch"
          :class="`${
            formAdress.is_main === true
              ? 'text-brg-primary'
              : 'text-brg-light-gray'
          }`"
          width="40"
          height="40"
          :name="
            formAdress.is_main === true
              ? 'mdi:toggle-switch'
              : 'mdi:toggle-switch-off'
          "
        />
      </div>

      <ButtonLarge
        label="Hapus Alamat"
        class="mx-auto mt-10 !bg-brg-red"
        @click="isModalOpen = true"
      />
      <ButtonLarge
        label="Simpan"
        class="mx-auto mb-12"
        @click="handleUpdateAddress"
        :disabled="toggleLoading"
      />
    </div>

    <Maps v-if="isMapOpen" :center="center" @closeMap="closeMap" />
  </div>
  <div v-else>lagi loading</div>
  <ModalDefault
    label-color="text-brg-primary"
    :is-show="isModalOpen"
    emit-function="finishTransaction"
    @closeModal="isModalOpen = false"
    @finishTransaction="handleDeleteAddress"
  />
</template>
