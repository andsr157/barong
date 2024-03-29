<script setup lang="ts">
import { useAuthStore } from "~/stores/Auth.store"
import { useForm } from "vee-validate"
import * as Yup from "yup"

const toastStore = useToastStore()
const authStore = useAuthStore()
const router = useRouter()

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  telp: Yup.string()
    .matches(/^\d+$/, "Phone number must be numeric")
    .max(14, "Phone number must be at most 14 characters")
    .required("Phone number is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
      "Password must contain at least 8 characters, including one uppercase letter and one digit"
    )
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
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
  console.log("result", registerResult)
  if (registerResult) {
    toastStore.success({
      text: "Pendafataran berhasil",
    })
    setTimeout(() => {
      router.push("/login")
    }, 2000)
  } else {
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
  <section class="px-8 h-[800px] pt-[119px] translate-y-1">
    <div class="text-center font-semibold text-brg-primary-dark text-lg">
      <h1>Daftar</h1>
      <p class="font-normal text-[11px]">
        Sudah Mendaftar?
        <NuxtLink to="/login" class="text-brg-primary">Masuk.</NuxtLink>
      </p>
    </div>
    <div class="mt-8 flex flex-col gap-5">
      <div>
        <Input
          name="name"
          wrapperClass="!rounded-[20px] gap-2 !px-5"
          placeholder="Nama Lengkap"
          prefixIcon="mdi:account"
          prefixIconColor="text-brg-primary"
          prefixIconSize="22"
          inputClass="placeholder:text-[11px]"
        />
      </div>

      <div>
        <Input
          name="email"
          type="email"
          wrapperClass="!rounded-[20px] gap-2 !px-5"
          placeholder="Email"
          prefixIcon="mdi:email"
          prefixIconColor="text-brg-primary"
          prefixIconSize="22"
          inputClass="placeholder:text-[11px]"
        />
      </div>

      <div>
        <Input
          name="telp"
          wrapperClass="!rounded-[20px] gap-2 !px-5"
          placeholder="Telepon"
          prefixIcon="mdi:call"
          prefixIconColor="text-brg-primary"
          prefixIconSize="22"
          inputClass="placeholder:text-[11px]"
        />
      </div>

      <div>
        <Input
          name="password"
          wrapperClass="!rounded-[20px] gap-2 !px-5"
          placeholder="Kata Sandi"
          prefixIcon="mdi:lock"
          prefixIconColor="text-brg-primary"
          prefixIconSize="22"
          :type="passwordFieldType"
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
        </Input>
      </div>

      <div>
        <Input
          name="password_confirmation"
          wrapperClass="!rounded-[20px] gap-2 !px-5"
          placeholder="Konfirmasi Kata Sandi"
          prefixIcon="mdi:lock-check"
          prefixIconColor="text-brg-primary"
          prefixIconSize="22"
          :type="confirmPasswordFieldType"
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
        </Input>
      </div>
    </div>
    <div class="flex">
      <ButtonLarge
        @click="onSubmit"
        :disabled="authStore.loading"
        label="Masuk"
        class="text-base mx-auto mt-14"
      />
    </div>
  </section>
</template>
