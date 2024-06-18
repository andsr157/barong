<script setup lang="ts">
import { useForm } from "vee-validate"
import * as Yup from "yup"
definePageMeta({
  layout: "blank",
  middleware: ["auth", "role"],
})

const toastStore = useToastStore()
const isLoading = ref(false)

const schema = Yup.object({
  oldPassword: Yup.string().required("Kata sandi tidak boleh kosong"),
  newPassword: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
      "Kata sandi harus mengandung setidaknya 8 karakter, termasuk satu huruf besar dan satu angka"
    )
    .required("Kata sandi baru tidak boleh kosong"),
  new_password_confirmation: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Konfirmasi kata sandi harus cocok")
    .required("Konfirmasi kata sandi tidak boleh kosong"),
})

const { handleSubmit } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit(async () => {
  isLoading.value = true
  const res = (await $fetch("/api/v1/profile/password", {
    method: "PUT",
    body: {
      oldPassword: oldPassword.value,
      newPassword: newPassword.value,
    },
  })) as any

  if (res && res.status === 200) {
    toastStore.success({
      text: "berhasil ubah kata sandi",
      timeout: 3000,
    })
    setTimeout(() => {
      useRouter().push("/user/profile")
    }, 1000)
  } else {
    toastStore.error({
      text: res.error?.statusMessage,
    })
  }
  isLoading.value = false
})

const oldPassword = ref("")
const newPassword = ref("")
const newPasswordConfirmation = ref("")
const oldPasswordType = ref("password")
const newPasswordType = ref("password")
const newPasswordConfirmationType = ref("password")

const switchVisibilityPasswordNow = () =>
  (oldPasswordType.value =
    oldPasswordType.value === "password" ? "text" : "password")

const switchVisibilityPassword = () =>
  (newPasswordType.value =
    newPasswordType.value === "password" ? "text" : "password")

const switchVisibilityConfirmPassword = () =>
  (newPasswordConfirmationType.value =
    newPasswordConfirmationType.value === "password" ? "text" : "password")
</script>
<template>
  <Toast />
  <Header title="Ubah Kata Sandi" />
  <div class="px-6 flex flex-col mt-6 gap-4">
    <div>
      <InputValidation
        name="oldPassword"
        label="Kata Sandi Saat Ini"
        labelClass="text-sm font-semibold"
        :type="oldPasswordType"
        v-model="oldPassword"
      >
        <template #suffix>
          <Icon
            @click="switchVisibilityPasswordNow"
            :name="
              oldPasswordType === 'password'
                ? 'ant-design:eye-filled'
                : 'ant-design:eye-invisible-filled'
            "
            class="text-brg-primary text-2xl text-end cursor-pointer"
          />
        </template>
      </InputValidation>
    </div>
    <div>
      <InputValidation
        name="newPassword"
        label="Kata Sandi Baru"
        labelClass="text-sm font-semibold"
        :type="newPasswordType"
        v-model="newPassword"
      >
        <template #suffix>
          <Icon
            @click="switchVisibilityPassword"
            :name="
              newPasswordType === 'password'
                ? 'ant-design:eye-filled'
                : 'ant-design:eye-invisible-filled'
            "
            class="text-brg-primary text-2xl text-end cursor-pointer"
          />
        </template>
      </InputValidation>
    </div>
    <div>
      <InputValidation
        name="new_password_confirmation"
        label="Konfirmasi Kata Sandi Baru"
        labelClass="text-sm font-semibold"
        :type="newPasswordConfirmationType"
        v-model="newPasswordConfirmation"
      >
        <template #suffix>
          <Icon
            @click="switchVisibilityConfirmPassword"
            :name="
              newPasswordConfirmationType === 'password'
                ? 'ant-design:eye-filled'
                : 'ant-design:eye-invisible-filled'
            "
            class="text-brg-primary text-2xl text-end cursor-pointer"
          />
        </template>
      </InputValidation>
    </div>
    <div class="flex justify-end">
      <NuxtLink to="/forgot-password" class="text-brg-primary-dark text-[11px]"
        >Lupa kata sandi ?</NuxtLink
      >
    </div>

    <div class="flex">
      <ButtonLarge
        label="Ubah Kata Sandi"
        class="text-[11px] mx-auto mt-14"
        :disabled="isLoading"
        @click="onSubmit"
      />
    </div>
  </div>
</template>
