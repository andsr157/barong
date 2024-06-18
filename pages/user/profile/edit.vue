<script setup lang="ts">
definePageMeta({
  layout: "blank",
  middleware: ["auth", "role"],
})
import { useForm } from "vee-validate"
import * as Yup from "yup"
import axios from "axios"
import { useToastStore } from "~/stores/Toast.store"
const { data: user, getSession } = <any>useAuth()

const name = ref(user.value.user.name)
const email = ref(user.value.user.email)
const telepon = ref(user.value.user.telp)
const toastStore = useToastStore()
const isLoading = ref(false)

const schema = Yup.object({
  name: Yup.string().required("Nama tidak boleh kosong"),
  telp: Yup.string()
    .matches(/^\d+$/, "Nomor telepon harus angka")
    .max(14, "Nomor telepon harus terdiri dari maksimal 14 karakter")
    .required("Nomor telepon tidak boleh kosong"),
})
const { handleSubmit } = useForm<FormData>({
  validationSchema: schema,
})
const onSubmit = handleSubmit(async () => {
  try {
    const payload = {
      id: user.value.user.id,
      name: name.value,
      telp: telepon.value,
      avatar: user.value.user.value,
    }
    isLoading.value = true
    const res = await axios.put("/api/v1/profile", payload)
    if (res.data) {
      toastStore.success({ text: "Berhasil Ubah Profil" })
      await getSession()
      isLoading.value = false
      setTimeout(() => {
        useRouter().push("/user/profile")
      }, 1000)
    }
    isLoading.value = false
  } catch (error) {
    console.log(error)
  }
})
</script>
<template>
  <Toast />
  <Header title="Ubah Profil" />
  <div class="px-6 flex flex-col gap-4 mt-3">
    <div class="">
      <InputValidation
        v-model="name"
        name="name"
        label="Nama Lengkap"
        labelClass="text-sm font-semibold"
      />
    </div>

    <div class="">
      <InputValidation
        v-model="email"
        name="email"
        label="Email"
        labelClass="text-sm font-semibold"
        :readonly="true"
      />
    </div>

    <div class="">
      <InputValidation
        v-model="telepon"
        name="telp"
        label="telepon"
        labelClass="text-sm font-semibold"
      />
    </div>

    <ButtonLarge
      label="Simpan"
      @click="onSubmit"
      :disabled="isLoading"
      class="mx-auto mt-10 mb-10"
    />
  </div>
</template>
