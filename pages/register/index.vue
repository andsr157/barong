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
    <div class="mt-8 flex flex-col gap-5 right-0">
      <div>
        <div
          class="flex items-center border-solid border-[#E0E0E0] border-[1px] px-5 gap-2 h-[41px] w-[292-px] rounded-3xl"
        >
          <Icon name="mdi:account" class="text-brg-primary text-xl" />
          <input
            type="text"
            class="placeholder:text-[11px] focus:outline-none focus:text-xs text-xs"
            placeholder="Nama Lengkap"
          />
        </div>
        <p class="text-brg-red text-[8px] px-5 mt-[5px]" v-show="false">
          Nama lengkap minimal 4 karakter.
        </p>
      </div>
      <div>
        <div
          class="flex items-center border-solid border-[#E0E0E0] border-[1px] px-5 gap-2 h-[41px] w-[292-px] rounded-3xl"
        >
          <Icon name="mdi:email" class="text-brg-primary text-xl" />
          <input
            type="email"
            class="placeholder:text-[11px] focus:outline-none focus:text-xs text-xs"
            placeholder="Email"
          />
        </div>
        <p class="text-brg-red text-[8px] px-5 mt-[5px]" v-show="false">
          Email tidak valid.
        </p>
      </div>
      <div>
        <div
          class="flex items-center border-solid border-[#E0E0E0] border-[1px] px-5 gap-2 h-[41px] w-[292-px] rounded-3xl"
        >
          <Icon name="mdi:call" class="text-brg-primary text-xl" />
          <input
            type="number"
            class="placeholder:text-[11px] focus:outline-none focus:text-xs text-xs"
            placeholder="Telepon"
          />
        </div>
        <p class="text-brg-red text-[8px] px-5 mt-[5px]" v-show="false">
          Nomer telepon minimal 12 karakter.
        </p>
      </div>

      <div>
        <div
          class="flex justify-between items-center border-solid border-[#E0E0E0] border-[1px] px-5 h-[41px] w-[292-px] rounded-3xl"
        >
          <div class="flex items-center gap-2">
            <Icon name="mdi:lock" class="text-brg-primary text-xl" />
            <input
              :type="passwordFieldType"
              v-model="password"
              class="placeholder:text-[11px] focus:outline-none focus:text-xs text-xs"
              placeholder="Kata Sandi"
            />
          </div>

          <Icon
            @click="switchVisibilityPassword"
            :name="
              passwordFieldType === 'password'
                ? 'ant-design:eye-filled'
                : 'ant-design:eye-invisible-filled'
            "
            class="text-brg-primary text-xl text-end cursor-pointer"
          />
        </div>
        <p class="text-brg-red text-[8px] px-5 mt-[5px]" v-show="false">
          Kata sandi minimal 8 karakter.
        </p>
      </div>
      <div>
        <div
          class="flex justify-between items-center border-solid border-[#E0E0E0] border-[1px] px-5 h-[41px] w-[292-px] rounded-3xl"
        >
          <div class="flex items-center gap-2">
            <Icon name="mdi:lock-check" class="text-brg-primary text-xl" />
            <input
              :type="confirmPasswordFieldType"
              v-model="confirmPassword"
              class="placeholder:text-[11px] focus:outline-none focus:text-xs text-xs"
              placeholder="Konfirmasi Kata Sandi"
            />
          </div>

          <Icon 
          @click="switchVisibilityConfirmPassword"
            :name="
              confirmPasswordFieldType === 'password'
                ? 'ant-design:eye-filled'
                : 'ant-design:eye-invisible-filled'
            "
            class="text-brg-primary text-xl text-end cursor-pointer"
          />
        </div>
        <p class="text-brg-red text-[8px] px-5 mt-[5px]" v-show="false">
          Kata sandi minimal 8 karakter.
        </p>
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
