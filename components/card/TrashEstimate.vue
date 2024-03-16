<script setup lang="ts">
defineProps<{
  category: string
  subcategory: string
  weight: number
  minPrice: number
  maxPrice: number
}>()
</script>

<template>
  <div class="w-full">
    <div class="text-brg-primary-dark flex justify-between mb-1">
      <h3 class="text-[13px]">
        <span>{{ category }}</span
        ><span class="font-medium"> | {{ subcategory }}</span>
      </h3>
      <p class="text-xs">
        <span class="font-semibold">{{ weight }}</span
        ><span> Kg</span>
      </p>
    </div>

    <div class="flex justify-between">
      <span class="text-xs text-brg-gray">Estimasi harga</span>
      <p class="text-brg-primary-dark text-[13px]">
        <span class="font-light">Rp</span
        ><span class="font-semibold">{{ minPrice }}</span
        ><span class="font-light"> s.d </span><span class="font-light">Rp</span
        ><span class="font-semibold">{{ maxPrice }}</span>
      </p>
    </div>
  </div>
</template>
