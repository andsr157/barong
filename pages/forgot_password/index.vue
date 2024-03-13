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
          Email tidak boleh kosong.
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
