<script setup lang="ts">
import { useForm } from "vee-validate"
import { object, string } from "yup"

const toastStore = useToastStore()
const email = ref<string>()
const isLoading = ref(false)

const schema = object({
  email: string()
    .required("Email tidak boleh kosong")
    .email("Email tidak valid")
    .label("Email"),
})

const { values, handleSubmit } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit(async () => {
  isLoading.value = true
  const res = await (<any>$fetch(`/api/v1/forgot/${email.value}`, {
    method: "POST",
  })).catch((error: any) => {
    isLoading.value = false
  })
  if (res) {
    toastStore.success({
      text: "berhasil terkirim cek pesan email",
      timeout: 3000,
    })
  } else if (!res || res.status === 500) {
    toastStore.error({
      text: "gagal terkirim pastikan jaringan dan email benar",
      timeout: 3000,
    })
  }
  isLoading.value = false
})

definePageMeta({
  layout: "blank",
})
</script>
<template>
  <Toast />
  <section class="px-8 h-full pt-24 translate-y-1">
    <h1 class="text-brg-primary-dark text-2xl font-semibold text-center">
      Lupa Kata Sandi
    </h1>
    <p
      class="font-normal text-sm text-center mx-auto text-brg-primary-dark w-[270px] mt-2"
    >
      Masukan Email anda yang terhubung ke akun anda
    </p>
    <div class="mt-8 flex flex-col gap-5 right-0">
      <div>
        <div>
          <InputValidation
            name="email"
            v-model="email"
            wrapperClass="!rounded-[20px] gap-2 !px-5"
            placeholder="Email"
            prefixIcon="mdi:email"
            prefixIconColor="text-brg-primary"
            prefixIconSize="26"
            errorMessage="Email tidak valid"
            inputClass="placeholder:text-sm focus:!text-sm !text-sm"
          />
        </div>
      </div>
    </div>
    <div class="max-w-max mx-auto mt-20">
      <ButtonLarge
        label="Kirim"
        class="text-base mt-10"
        @click="onSubmit"
        :disabled="isLoading"
      />
    </div>
  </section>
</template>
