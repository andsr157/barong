<script setup lang="ts">
const router = useRouter()
definePageMeta({
  layout: "blank",
})
</script>
<template>
  <h1 class="text-3xl font-semibold mt-32 px-4">Pilih room chat :</h1>
  <div class="grid grid-cols-2 w-full h-full gap-x-2 px-4 pt-8">
    <div
      @click="router.push('room/1')"
      class="w-full h-32 bg-red-400 text-white font-medium rounded-2xl flex justify-center items-center cursor-pointer hover:bg-red-500"
    >
      Room Merah
    </div>
    <div
      @click="router.push('room/2')"
      class="w-full h-32 bg-green-400 text-white font-medium rounded-2xl flex justify-center items-center cursor-pointer hover:bg-green-500"
    >
      Room Hijau
    </div>
  </div>
</template>
