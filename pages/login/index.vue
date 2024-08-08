<script setup lang="ts">
import { useToastStore } from "~/stores/Toast.store"
import { useForm } from "vee-validate"
import { object, string } from "yup"

const toastStore = useToastStore()
const isShowInstallApp = ref(false)
const isShowLogin = ref(false)
const { signIn } = useAuth()
const router = useRouter()
const isLoading = ref(false)

definePageMeta({
  middleware: "login",
  layout: "blank",
})

let deferredPrompt: any
let beforeInstallPromptHandler: any
let hasInstalled = false

const handleInstallApp = async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === "accepted") {
      deferredPrompt = null
      isShowInstallApp.value = false
      isShowLogin.value = true
      localStorage.setItem("hasInstalled", "true")
    }
  }
}

const cleanUpLocalStorage = () => {
  console.log("Cleaning up localStorage...")
  localStorage.removeItem("hasInstalled")
}

const checkInstall = async () => {
  console.log("Checking install status...")

  if (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone
  ) {
    console.log("App is in standalone mode.")
    isShowInstallApp.value = false
    isShowLogin.value = true
    hasInstalled = true
    localStorage.setItem("hasInstalled", "true")
  } else {
    console.log("App is running in a browser tab.")

    beforeInstallPromptHandler = (e: any) => {
      e.preventDefault()
      deferredPrompt = e
      console.log("beforeinstallprompt event fired.")
      isShowInstallApp.value = true
    }
    window.addEventListener("beforeinstallprompt", beforeInstallPromptHandler)

    if (localStorage.getItem("hasInstalled") === "true") {
      isShowLogin.value = true
    } else {
      cleanUpLocalStorage()
    }
  }

  window.addEventListener("appinstalled", () => {
    console.log("App installed.")
    isShowInstallApp.value = false
    isShowLogin.value = true
    hasInstalled = true
    localStorage.setItem("hasInstalled", "true")
  })
}

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

const handleGoogleLogin = async () => {
  isLoading.value = true
  try {
    const response = (await signIn("google")) as any
    console.log("Response from Google Sign-In:", response)
    if (response.error) {
      console.error(response.error)
      toastStore.error({ text: "Login dengan Google gagal" })
    } else {
      toastStore.success({ text: "Login berhasil" })
      router.push("/")
    }
  } catch (error) {
    console.error(error)
    toastStore.error({ text: "Terjadi kesalahan saat login" })
  }
}

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

onBeforeMount(async () => {
  await checkInstall()
})

onBeforeUnmount(() => {
  window.removeEventListener("beforeinstallprompt", beforeInstallPromptHandler)
})
</script>

<template>
  <Toast />
  <ModalPermission
    title="Install App"
    desc="Install Aplikasi"
    :is-show="isShowInstallApp"
    emit-function="handleInstallApp"
    @handleInstallApp="handleInstallApp"
    labelConfirmation="Install"
  />
  <section class="px-6 sm:px-8 pt-16 translate-y-1 w-full" v-if="isShowLogin">
    <div class="text-center font-semibold text-brg-primary-dark text-2xl">
      <h1>Masuk</h1>
      <p class="font-normal text-sm mt-2">
        Belum Mendaftar?
        <NuxtLink to="/register" class="text-brg-primary"
          >Buat akun baru.</NuxtLink
        >
      </p>
    </div>
    <div class="mt-8 flex flex-col gap-5 right-0">
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
    <div class="my-4">
      <p class="text-center text-brg-gray text-sm">atau</p>
    </div>
    <div
      @click="handleGoogleLogin"
      class="hover:bg-brg-white cursor-pointer w-[80vw] sm:w-[292px] mx-auto py-[5px] border-[1px] border-brg-primary-dark rounded-full flex justify-center gap-x-2 items-center"
    >
      <NuxtImg src="/icons/google.png" width="32px" height="32px" />
      <p class="font-medium text-brg-primary-dark text-[15px]">
        Masuk Dengan Google
      </p>
    </div>
  </section>
</template>
