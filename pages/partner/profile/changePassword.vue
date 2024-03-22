<script setup lang="ts">
definePageMeta({
  layout: "blank",
});
const passwordNow = ref("july");
const password = ref("july");
const confirmPassword = ref("july");
const passwordNowFieldType = ref("password");
const passwordFieldType = ref("password");
const confirmPasswordFieldType = ref("password");

const switchVisibilityPasswordNow = () =>
  (passwordNowFieldType.value =
    passwordNowFieldType.value === "password" ? "text" : "password");

const switchVisibilityPassword = () =>
  (passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password");

const switchVisibilityConfirmPassword = () =>
  (confirmPasswordFieldType.value =
    confirmPasswordFieldType.value === "password" ? "text" : "password");
</script>
<template>
  <Header title="Ubah Kata Sandi" />
  <div class="px-6 flex flex-col mt-6 gap-4">
    <div>
      <Input
        label="Kata Sandi Saat Ini"
        labelClass="text-sm font-semibold"
        :type="passwordNowFieldType"
        v-model="passwordNow"
      >
        <template #suffix>
          <Icon
            @click="switchVisibilityPasswordNow"
            :name="
              passwordNowFieldType === 'password'
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
        label="Kata Sandi Baru"
        labelClass="text-sm font-semibold"
        :type="passwordFieldType"
        v-model="password"
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
        label="Konfirmasi Kata Sandi Baru"
        labelClass="text-sm font-semibold"
        :type="confirmPasswordFieldType"
        v-model="confirmPassword"
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
    <div class="flex justify-end">
      <NuxtLink to="/forgot_password" class="text-brg-primary-dark text-[11px]"
        >Lupa kata sandi ?</NuxtLink
      >
    </div>

    <div class="flex">
      <ButtonLarge label="Ubah Kata Sandi" class="text-[11px] mx-auto mt-14" />
    </div>
  </div>
</template>
