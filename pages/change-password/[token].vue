<script setup lang="ts">
import { useForm } from "vee-validate"
import * as Yup from "yup"

definePageMeta({
  layout: "blank",
})

const toastStore = useToastStore()
const isLoading = ref(false)

const token = useRoute().params.token as string

const schema = Yup.object({
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
      "Kata sandi harus mengandung setidaknya 8 karakter, termasuk satu huruf besar dan satu angka."
    )
    .required("Kata sandi tidak boleh kosong"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Konfirmasi kata sandi harus cocok")
    .required("Konfirmasi kata sandi tidak boleh kosong"),
})

const { handleSubmit } = useForm({
  validationSchema: schema,
})

const password = ref("")
const confirmPassword = ref("")
const passwordFieldType = ref("password")
const confirmPasswordFieldType = ref("password")

const switchVisibilityPassword = () =>
  (passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password")

const switchVisibilityConfirmPassword = () =>
  (confirmPasswordFieldType.value =
    confirmPasswordFieldType.value === "password" ? "text" : "password")

const onSubmit = handleSubmit(async () => {
  isLoading.value = true
  const res = (await $fetch("/api/v1/reset", {
    method: "POST",
    body: { newPassword: password.value, token: token },
  })) as any

  if (res && res.status === 200) {
    toastStore.success({
      text: "berhasil ubah kata sandi",
    })
    setTimeout(() => {
      useRouter().push("/login")
    }, 1000)
  } else if (res.status === 400) {
    toastStore.warning({
      text: "Link kadaluarsa",
      timeout: 3000,
    })
  } else {
    toastStore.error({
      text: "gagal ubah kata sandi coba kirim email lagi",
      timeout: 3000,
    })
  }

  isLoading.value = false
})
</script>
<template>
  <Toast />
  <section class="px-8 h-full pt-24 translate-y-1">
    <h1 class="text-brg-primary-dark text-lg font-semibold text-center">
      Ubah Kata Sandi
    </h1>
    <p
      class="font-normal text-[11px] text-center mx-auto text-brg-primary-dark w-[211px]"
    >
      Masukan Kata Sandi baru anda
    </p>
    <div class="mt-8 flex flex-col gap-5 right-0">
      <div>
        <InputValidation
          name="password"
          wrapperClass="!rounded-[20px] gap-2 !px-5"
          placeholder="Kata Sandi"
          prefixIcon="mdi:lock"
          prefixIconColor="text-brg-primary"
          prefixIconSize="22"
          :type="passwordFieldType"
          v-model="password"
          errorMessage="Password minimal 8 karakter."
          inputClass="placeholder:text-[11px]"
        >
          <template #suffix>
            <Icon
              @click="switchVisibilityPassword"
              :name="
                passwordFieldType === 'password'
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
          name="password_confirmation"
          wrapperClass="!rounded-[20px] gap-2 !px-5"
          placeholder="Konfirmasi Kata Sandi"
          prefixIcon="mdi:lock-check"
          prefixIconColor="text-brg-primary"
          prefixIconSize="22"
          :type="confirmPasswordFieldType"
          v-model="confirmPassword"
          errorMessage="Password minimal 8 karakter."
          inputClass="placeholder:text-[11px]"
        >
          <template #suffix>
            <Icon
              @click="switchVisibilityConfirmPassword"
              :name="
                confirmPasswordFieldType === 'password'
                  ? 'ant-design:eye-filled'
                  : 'ant-design:eye-invisible-filled'
              "
              class="text-brg-primary text-2xl text-end cursor-pointer"
            />
          </template>
        </InputValidation>
      </div>
    </div>
  </section>
  <div class="absolute bottom-0 right-1/2 translate-x-1/2 mb-16">
    <ButtonLarge
      label="Kirim"
      class="text-base mt-10"
      @click="onSubmit"
      :disabled="isLoading"
    />
  </div>
</template>
