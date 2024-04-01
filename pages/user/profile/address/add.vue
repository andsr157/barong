<script setup lang="ts">
import { useForm } from "vee-validate"
import { useAddressStore } from "~/stores/Address.store"
import * as Yup from "yup"

const toastStore = useToastStore()

const schema = Yup.object({
  address_name: Yup.string().required("address is required"),
  label: Yup.string().required("label is required"),
  detail: Yup.string(),
  owner_name: Yup.string().required("owner name is required"),
  owner_telp: Yup.string()
    .matches(/^\d+$/, "Phone number must be numeric")
    .max(14, "Phone number must be at most 14 characters")
    .required("Phone number is required"),
})

const { handleSubmit } = useForm<FormData>({
  validationSchema: schema,
})

const addresStore = useAddressStore()
const { center, formAdress, isLoading } = storeToRefs(addresStore)

const toggle = ref("off")
const isMapOpen = ref(false)

const closeMap = () => {
  isMapOpen.value = false
}

const toggleSwitch = () => {
  if (
    formAdress.value.is_main === undefined ||
    formAdress.value.is_main === null
  ) {
    formAdress.value.is_main = false
  }
  formAdress.value.is_main = formAdress.value.is_main === false ? true : false
}

const onSubmit = handleSubmit(async (values) => {
  const res = await addresStore.addAddress()
  if (res) {
    toastStore.success({
      text: "Alamat ditambahkan",
    })
    setTimeout(() => {
      addresStore.setDefaultFormAddress()
      useRouter().push("/user/profile/address")
    }, 1000)
  }
})
definePageMeta({
  layout: "blank",
})
</script>
<template>
  <Header title="Tambah Alamat" />
  <Maps v-if="isMapOpen" :center="center" @closeMap="closeMap" />

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
      <InputValidation
        v-model="formAdress.address_name"
        name="address_name"
        label="Alamat Lengkap"
        inputClass="placeholder:text-[11px]"
        placeholder="Masukan Alamat Lengkap"
      />
    </div>
    <div>
      <InputValidation
        v-model="formAdress.label"
        name="label"
        label="Label Alamat"
        inputClass="placeholder:text-[11px]"
        placeholder="Masukkan label alamat anda"
      />
    </div>

    <div>
      <InputValidation
        v-model="formAdress.detail"
        name="detail"
        label="Patokan"
        inputClass="placeholder:text-[11px]"
        placeholder="Cth(perempatan pas, depan masjid, dll)"
      />
    </div>
    <div>
      <InputValidation
        v-model="formAdress.owner_name"
        name="owner_name"
        label="Nama Pemilik"
        inputClass="placeholder:text-[11px]"
        placeholder="Masukkan nama anda"
      />
    </div>
    <div>
      <InputValidation
        v-model="formAdress.owner_telp"
        name="owner_telp"
        label="Nomor Telepon"
        inputClass="placeholder:text-[11px]"
        placeholder="Masukkan nomor telepon"
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
      label="Simpan"
      class="mx-auto mt-10"
      @click="onSubmit"
      :disabled="isLoading"
    />
  </div>
</template>
