<script setup lang="ts">
import { toCurrency } from "~/composables/helpers"
defineProps<{
  total: number
}>()
</script>

<template>
  <div
    class="p-3 rounded-[10px] border-[1px] border-black border-opacity-10 text-brg-primary-dark"
  >
    <div class="flex mb-2 gap-x-1">
      <Icon name="solar:graph-bold" class="" size="24px" />
      <span class="font-medium">Total transaksi</span>
    </div>
    <h2 class="text-2xl font-semibold mb-">
      {{ toCurrency(total) }}
    </h2>
    <span class="text-xs font-medium text-brg-light-gray"
      >Perolehan penjualan sampah anda selama ini</span
    >
  </div>
</template>
