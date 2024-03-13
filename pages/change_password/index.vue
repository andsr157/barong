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
  <section class="relative px-8 h-full pt-[119px] translate-y-1">
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
        <div
          class="flex justify-between items-center border-solid border-[#E0E0E0] border-[1px] px-5 h-[41px] w-[292-px] rounded-3xl"
        >
          <div class="flex items-center gap-2">
            <Icon name="mdi:lock" class="text-brg-primary text-xl" />
            <input
              :type="passwordFieldType"
              v-model="password"
              class="placeholder:text-[11px] focus:outline-none focus:text-xs text-xs"
              placeholder="Kata Sandi Baru"
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
              placeholder="Konfirmasi Kata Sandi Baru"
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

    <button
      class="absolute bg-brg-primary rounded-3xl text-white h-10 w-[292px] items-center bottom-3"
    >
      Kirim
    </button>
  </section>
</template>
