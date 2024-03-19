<script setup lang="ts">
defineProps<{
  name: string
  telp: string
  rating: number
  photo: string
}>()
</script>

<template>
  <div class="w-full">
    <div
      class="mx-auto w-[80%] h-32 rounded-[20px] border-[1px] border-black border-opacity-10 shadow-[2px_10px_30px_-10px_rgba(48,127,245,0.5)]"
    >
      <div
        class="mx-auto w-[70px] h-[70px] rounded-full overflow-hidden -mt-[35px]"
      >
        <NuxtImg :src="photo" class="w-full h-full object-cover" />
      </div>
      <div class="text-center my-4">
        <h2 class="text-sm text-brg-primary-dark font-semibold mb-1">
          {{ name }}
        </h2>
        <p class="text-xs text-brg-gray">
          {{ telp }}
        </p>
        <div
          class="flex justify-center items-center text-brg-primary-dark gap-x-[2px] mt-1"
        >
          <span class="text-[11px] font-semibold mt-[3px]">{{ rating }}</span>

          <Icon name="ic:round-star" size="15px" />
        </div>
      </div>
    </div>
  </div>
</template>
