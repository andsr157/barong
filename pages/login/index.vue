<script setup lang="ts">
import { useToastStore } from "~/stores/Toast.store"
import { useForm } from "vee-validate"
import { object, string } from "yup"

const toastStore = useToastStore()
const { signIn } = useAuth()
const router = useRouter()
const isLoading = ref(false)

definePageMeta({
  middleware: "login",
  layout: "blank",
})

const schema = object({
  email: string()
    .required("Email tidak boleh kosong")
    .email("Email tidak valid")
    .label("Email"),
  password: string().required("Password tidak boleh kosong").label("Password"),
})

const { values, handleSubmit } = useForm({
  validationSchema: schema,
})

const handleLogin = handleSubmit(async (values) => {
  try {
    isLoading.value = true
    const { error } = (await signIn("credentials", {
      ...values,
      redirect: false,
    })) as any

    if (error === "Unauthorized") {
      isLoading.value = false
      toastStore.error({
        text: "email atau password salah",
      })
    } else {
      isLoading.value = false
      toastStore.success({
        text: "Login berhasil",
      })
      setTimeout(() => {
        router.push("/")
      }, 1000)
    }
  } catch (error) {
    console.error(error)
  }
})

const password = ref("")
const passwordFieldType = ref("password")

const switchVisibility = () => {
  passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password"
}
</script>

<template>
  <Toast />
  <section class="px-6 sm:px-8 pt-24 translate-y-1 w-full">
    <div class="text-center font-semibold text-brg-primary-dark text-2xl">
      <h1>Masuk</h1>
      <p class="font-normal text-sm mt-2">
        Belum Mendaftar?
        <NuxtLink to="/register" class="text-brg-primary"
          >Buat akun baru.</NuxtLink
        >
      </p>
    </div>
    <div class="mt-8 flex flex-col gap-5 right-0 text-">
      <div>
        <InputValidation
          name="email"
          type="email"
          wrapperClass="!rounded-[20px] gap-2 !px-6"
          placeholder="Email"
          prefixIcon="mdi:email"
          prefixIconColor="text-brg-primary"
          prefixIconSize="26"
          inputClass="focus:!text-[15px] !text-[15px] placeholder:text-sm"
        />
      </div>

      <div>
        <InputValidation
          name="password"
          wrapperClass="!rounded-[20px] gap-2 !px-5"
          placeholder="Password"
          prefixIcon="mdi:lock"
          prefixIconColor="text-brg-primary"
          prefixIconSize="26"
          :type="passwordFieldType"
          inputClass="focus:!text-[15px] !text-[15px] placeholder:text-sm"
        >
          <template #suffix>
            <Icon
              @click="switchVisibility"
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
    </div>
    <div class="flex justify-end mt-4">
      <NuxtLink to="/forgot-password" class="text-brg-primary-dark text-sm"
        >Lupa kata sandi ?</NuxtLink
      >
    </div>
    <div class="max-w-max mx-auto mt-20">
      <ButtonLarge
        @click="handleLogin"
        label="Masuk"
        class="text-base"
        :disabled="isLoading"
      />
    </div>
  </section>
</template>
