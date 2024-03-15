<script setup lang="ts">
definePageMeta({
  layout: "blank",
});
</script>
<template>
  <section class="relative px-8 h-full pt-[119px] translate-y-1">
    <h1 class="text-brg-primary-dark text-lg font-semibold text-center">
      Lupa Kata Sandi
    </h1>
    <p
      class="font-normal text-[11px] text-center mx-auto text-brg-primary-dark w-[211px]"
    >
      Masukan Email anda yang terhubung ke akun anda
    </p>
    <div class="mt-8 flex flex-col gap-5 right-0">
      <div>
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
      </div>
    </div>

    <button
      class="absolute bg-brg-primary rounded-3xl text-white h-10 w-[292px] items-center bottom-3"
    >
      Kirim
    </button>
  </section>
</template>
