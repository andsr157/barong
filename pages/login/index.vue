<script setup lang="ts">
import { useToastStore } from "~/stores/Toast.store"
import { useForm } from "vee-validate"
import { object, string } from "yup"

const toastStore = useToastStore()
const { signIn } = useAuth()
const router = useRouter()

definePageMeta({
  middleware: "login",
  layout: "blank",
})

const schema = object({
  email: string().required().email().label("Email"),
  password: string().required().label("Password"),
})

const { values, handleSubmit } = useForm({
  validationSchema: schema,
})

const handleLogin = handleSubmit(async (values) => {
  try {
    const { error } = (await signIn("credentials", {
      ...values,
      redirect: false,
    })) as any

    if (error === "Unauthorized") {
      toastStore.error({
        text: "email atau password salah",
      })
    } else {
      toastStore.success({
        text: "Login berhasil",
      })
      setTimeout(() => {
        router.push("/user")
      }, 1500)
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
  <section class="px-8 h-screen pt-[119px] translate-y-1">
    <div class="text-center font-semibold text-brg-primary-dark text-lg">
      <h1>Masuk</h1>
      <p class="font-normal text-[11px]">
        Belum Mendaftar?
        <NuxtLink to="/register" class="text-brg-primary"
          >Buat akun baru.</NuxtLink
        >
      </p>
    </div>
    <div class="mt-8 flex flex-col gap-5 right-0">
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
          name="password"
          wrapperClass="!rounded-[20px] gap-2 !px-5"
          placeholder="Password"
          prefixIcon="mdi:lock"
          prefixIconColor="text-brg-primary"
          prefixIconSize="22"
          :type="passwordFieldType"
          inputClass="placeholder:text-[11px]"
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
        </Input>
      </div>
    </div>
    <div class="flex justify-end">
      <NuxtLink to="/forgot_password" class="text-brg-primary-dark text-[11px]"
        >Lupa kata sandi ?</NuxtLink
      >
    </div>

    <div class="flex">
      <ButtonLarge
        @click="handleLogin"
        label="Masuk"
        class="text-base mx-auto mt-14"
      />
    </div>
  </section>
</template>
