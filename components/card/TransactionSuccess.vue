<script setup lang="ts">
interface Props {
  title?: string
  message?: string
}

withDefaults(defineProps<Props>(), {
  title: "Berhasil",
  message: "Transaksi selesai",
})
</script>
<template>
  <div
    class="w-full rounded-[10px] py-7 flex flex-col justify-center items-center bg-white"
  >
    <Icon name="ep:success-filled" size="75px" class="text-brg-primary" />
    <h1 class="text-brg-primary-dark font-bold mt-1">
      {{ title }}
    </h1>
    <p class="text-brg-primary-dark text-[11px] mt-1 text-center px-9">
      {{ message }}
    </p>
  </div>
</template>
