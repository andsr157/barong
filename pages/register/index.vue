<script setup lang="ts">
import { useAuthStore } from "~/stores/Auth.store"
import { useForm } from "vee-validate"
import * as Yup from "yup"

const toastStore = useToastStore()
const authStore = useAuthStore()
const router = useRouter()

const schema = Yup.object({
  name: Yup.string().required("Nama tidak boleh kosong"),
  email: Yup.string()
    .email("Email tidak valid")
    .required("Email tidak boleh kosong"),
  telp: Yup.string()
    .matches(/^\d+$/, "Nomor telepon harus angka")
    .max(14, "Nomor telepon harus terdiri dari maksimal 14 karakter.")
    .required("Nomor tidak boleh kosong"),
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

interface FormData {
  name: string
  email: string
  telp: string
  password: string
  password_confirmation: string
}

const { values, handleSubmit } = useForm<FormData>({
  validationSchema: schema,
})

const onSubmit = handleSubmit(async (values) => {
  const registerResult = await authStore.register(values)
  if (registerResult) {
    toastStore.success({
      text: "Pendafataran berhasil",
    })
    setTimeout(() => {
      router.push("/login")
    }, 2000)
  } else {
    toastStore.error({
      text: "Pendafataran gagal",
    })
    console.error("Registration failed")
  }
})

definePageMeta({
  layout: "blank",
})

const passwordFieldType = ref("password")
const confirmPasswordFieldType = ref("password")

const switchVisibilityPassword = () =>
  (passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password")

const switchVisibilityConfirmPassword = () =>
  (confirmPasswordFieldType.value =
    confirmPasswordFieldType.value === "password" ? "text" : "password")
</script>

<template>
  <Toast />
  <section class="px-6 sm:px-8 pt-16 translate-y-1">
    <div class="text-center font-semibold text-brg-primary-dark text-2xl">
      <h1>Daftar</h1>
      <p class="font-normal text-sm">
        Sudah Mendaftar?
        <NuxtLink to="/login" class="text-brg-primary">Masuk.</NuxtLink>
      </p>
    </div>
    <div class="mt-8 flex flex-col gap-3">
      <div>
        <InputValidation
          name="name"
          wrapperClass="!rounded-[20px] gap-2 !px-5"
          placeholder="Nama Lengkap"
          prefixIcon="mdi:account"
          prefixIconColor="text-brg-primary"
          prefixIconSize="26"
          inputClass="placeholder:text-sm focus:!text-[15px] !text-[15px]"
        />
      </div>

      <div>
        <InputValidation
          name="email"
          type="email"
          wrapperClass="!rounded-[20px] gap-2 !px-5"
          placeholder="Email"
          prefixIcon="mdi:email"
          prefixIconColor="text-brg-primary"
          prefixIconSize="26"
          inputClass="placeholder:text-sm focus:!text-[15px] !text-[15px]"
        />
      </div>

      <div>
        <InputValidation
          name="telp"
          wrapperClass="!rounded-[20px] gap-2 !px-5"
          placeholder="Telepon"
          prefixIcon="mdi:call"
          prefixIconColor="text-brg-primary"
          prefixIconSize="26"
          inputClass="placeholder:text-sm focus:!text-[15px] !text-[15px]"
        />
      </div>

      <div>
        <InputValidation
          name="password"
          wrapperClass="!rounded-[20px] gap-2 !px-5"
          placeholder="Kata Sandi"
          prefixIcon="mdi:lock"
          prefixIconColor="text-brg-primary"
          prefixIconSize="26"
          :type="passwordFieldType"
          inputClass="placeholder:text-sm focus:!text-[15px] !text-[15px]"
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
          prefixIconSize="26"
          :type="confirmPasswordFieldType"
          inputClass="placeholder:text-sm focus:!text-[15px] !text-[15px]"
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
    <div class="max-w-max mx-auto mt-5">
      <ButtonLarge
        @click="onSubmit"
        :disabled="authStore.loading"
        label="Masuk"
        class="text-base mt-14"
      />
    </div>
  </section>
</template>
