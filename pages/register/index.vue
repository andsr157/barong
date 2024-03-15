<script setup lang="ts">
import { ref } from "vue";
definePageMeta({
  layout: "blank",
});

const password = ref("");
const confirmPassword = ref("");
const passwordFieldType = ref("password");
const confirmPasswordFieldType = ref("password");

const switchVisibilityPassword = () =>
  (passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password");

const switchVisibilityConfirmPassword = () =>
  (confirmPasswordFieldType.value =
    confirmPasswordFieldType.value === "password" ? "text" : "password");
</script>

<template>
  <section class="relative px-8 h-[800px] pt-[119px] translate-y-1">
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
          wrapperClass="!rounded-[20px] gap-2 !px-5"
          placeholder="Nama Lengkap"
          prefixIcon="mdi:account"
          prefixIconColor="text-brg-primary"
          prefixIconSize="22"
          errorMessage="Nama lengkap minimal 4 karakter."
          inputClass="placeholder:text-[11px]"
        />
      </div>

      <div>
        <Input
          wrapperClass="!rounded-[20px] gap-2 !px-5"
          placeholder="Email"
          prefixIcon="mdi:email"
          prefixIconColor="text-brg-primary"
          prefixIconSize="22"
          errorMessage="Email tidak valid"
          inputClass="placeholder:text-[11px]"
        />
      </div>

      <div>
        <Input
          wrapperClass="!rounded-[20px] gap-2 !px-5"
          placeholder="Telepon"
          prefixIcon="mdi:call"
          prefixIconColor="text-brg-primary"
          prefixIconSize="22"
          errorMessage="Nomer telepon minimal 12 karakter."
          inputClass="placeholder:text-[11px]"
        />
      </div>

      <div>
        <Input
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
        </Input>
      </div>

      <div>
        <Input
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
        </Input>
      </div>
    </div>

    <NuxtLink
      to="/forgot_password"
      class="text-brg-primary-dark absolute text-[11px] right-0 mt-2 mr-8"
      >Lupa kata sandi ?</NuxtLink
    >

    <button
      class="absolute bg-brg-primary rounded-3xl text-white h-10 w-[292px] items-center bottom-3"
    >
      Kirim
    </button>
  </section>
</template>
