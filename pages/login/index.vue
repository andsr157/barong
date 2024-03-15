<script setup lang="ts">
import { ref } from "vue";
definePageMeta({
  layout: "blank",
});

const password = ref("");
const passwordFieldType = ref("password");

const switchVisibility = () =>
  (passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password");
</script>

<template>
  <section class="relative px-8 h-full pt-[119px] translate-y-1">
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
          placeholder="Password"
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
    <NuxtLink
      to="/forgot_password"
      class="text-brg-primary-dark absolute text-[11px] right-0 mt-2 mr-8"
      >Lupa kata sandi ?</NuxtLink
    >

    <button
      class="absolute bg-brg-primary rounded-3xl text-white h-10 w-[292px] items-center bottom-3"
    >
      Masuk
    </button>
  </section>
</template>
