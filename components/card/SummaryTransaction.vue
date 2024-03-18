<script setup lang="ts">
import type { Prop } from "vue"
import { toCurrency } from "~/composables/helpers"

interface Props {
  total: number
  totalMonthly: number
  serviceBill: number
  type: string
}

withDefaults(defineProps<Props>(), {
  type: "default",
  total: 0,
  totalMonthly: 0,
  serviceBill: 0,
})
</script>

<template>
  <div
    class="p-3 rounded-[10px] border-[1px] border-black border-opacity-10 text-brg-primary-dark shadow-[0px_20px_30px_-10px_rgba(48,127,245,0.5)]"
  >
    <div>
      <div class="flex mb-2 gap-x-1">
        <Icon name="solar:graph-bold" class="" size="24px" />
        <span class="font-medium">Total transaksi</span>
      </div>
      <h2 class="text-2xl font-semibold mb-">
        {{ toCurrency(total) }}
      </h2>
      <span
        v-if="type === 'default'"
        class="text-[10px] font-medium text-brg-light-gray"
        >Perolehan penjualan sampah anda selama ini</span
      >
      <span v-else class="text-[10px] font-medium text-brg-light-gray"
        >Perolehan pendapatan sampah anda selama ini</span
      >
    </div>

    <div v-if="type === 'partner'">
      <hr class="h-[1px] bg-brg-light-gray mt-2 mb-2" />
      <div class="grid grid-cols-2 justify-between">
        <div class="flex justify-between pe-4">
          <div>
            <span class="text-[10px] text-brg-gray">bulan ini</span>
            <h3 class="text-sm text-brg-primary-dark font-semibold">
              {{ toCurrency(totalMonthly) }}
            </h3>
          </div>
          <div class="w-[0.1px] h-full bg-brg-light-gray"></div>
        </div>

        <div>
          <span class="text-[10px] text-brg-gray">bulan layanan bulan ini</span>
          <h3 class="text-sm text-brg-primary-dark font-semibold">
            {{ toCurrency(serviceBill) }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
