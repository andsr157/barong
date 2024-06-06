<script setup lang="ts">
import { createClient } from "@supabase/supabase-js"
import { v4 as uuidv4 } from "uuid"

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

const file = ref({
  image: null,
  imageUrl: user.value.user.avatar,
})

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  telp: Yup.string()
    .matches(/^\d+$/, "Phone number must be numeric")
    .max(14, "Phone number must be at most 14 characters")
    .required("Phone number is required"),
})
const { handleSubmit } = useForm<FormData>({
  validationSchema: schema,
})

const config = useRuntimeConfig().app

const supabase = createClient(config.supabaseUrl, config.supabaseKey)

const uploadImage = async () => {
  try {
    if (!file.value.image) {
      console.error("No file selected")
      return
    }

    const { data, error } = await supabase.storage
      .from("avatar")
      .upload(`${uuidv4()}.jpg`, file.value.image)

    console.log(data)
    if (error) {
      console.error("Error uploading image:", error.message)
      return
    }
    console.log(data.path)
    const { data: publicUrlData, error: publicUrlError }: any =
      await supabase.storage.from("avatar").getPublicUrl(data.path)

    if (publicUrlError) {
      console.error("Error getting public URL:", publicUrlError.message)
      return
    }
    console.log(publicUrlData.publicUrl)
    file.value.image = null
    return publicUrlData.publicUrl
  } catch (error: any) {
    console.error("Error uploading image:", error.message)
  }
}

const onSubmit = handleSubmit(async () => {
  try {
    const imageUrl = await uploadImage().catch((error) => {
      console.error("Error in uploadImage:", error)
    })

    const payload = {
      id: user.value.user.id,
      name: name.value,
      telp: telepon.value,
      avatar: imageUrl,
    }
    isLoading.value = true
    const res = await axios.put("/api/v1/profile", payload)
    if (res.data) {
      toastStore.success({ text: "Berhasil Ubah Profil" })
      await getSession()
      isLoading.value = false
      setTimeout(() => {
        useRouter().push("/partner/profile")
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
  <div class="px-6 mt-[30px]">
    <div class="w-[100px] h-[100px] mx-auto mt-4">
      <NuxtImg
        v-if="user"
        :src="file.imageUrl ?? '/assets/dummy-profile-user.jpeg'"
        width="100"
        height="100"
        class="h-full w-full object-cover rounded-full"
      />
    </div>
    <div class="flex justify-center relative">
      <InputFile v-model="file" wrapperClass="absolute opacity-0 z-50" />
      <ButtonSmall label="ubah" class="mt-4 !absolute" />
    </div>

    <div class="mt-10 flex flex-col gap-y-4">
      <div>
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
  </div>
</template>
