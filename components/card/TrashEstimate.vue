<script setup lang="ts">
import { toCurrency } from "~/composables/helpers"
interface Props {
  category: string
  subcategory: string
  weight: number
  finalPrice?: number
  minPrice?: number
  maxPrice?: number
  type?: string
}

withDefaults(defineProps<Props>(), {
  type: "default",
  finalPrice: 0,
})
</script>

<template>
  <div class="w-full" v-if="type === 'default'">
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

  <div class="w-full" v-else-if="type === 'finish'">
    <div class="text-brg-primary-dark grid grid-cols-5 justify-between mb-1">
      <h3 class="text-[13px] col-span-3">
        <span>{{ category }}</span
        ><span class="font-medium"> | {{ subcategory }}</span>
      </h3>

      <p class="text-[13px] text-brg-primary-dark font-medium text-end">
        {{ toCurrency(finalPrice) }}
      </p>
      <p class="text-sm text-end">
        <span class="font-semibold">{{ weight }}</span
        ><span> Kg</span>
      </p>
    </div>
  </div>
</template>
