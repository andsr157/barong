<script setup lang="ts">
import { convertToTime, convertToDate } from "~/composables/helpers"
defineProps<{
  transaction_id: string
  detailSampah: string
  status: { name: string; label: string; status: string }
  distance?: number
  user: {
    name: string
    telp: string
  }
  address: {
    address_name: string
    lat: string
    lng: string
  }
  path: string
  time: string
}>()

const handleClick = (event: Event, callback: () => void) => {
  event.stopPropagation()
  callback()
}
</script>

<template>
  <div
    @click="useRouter().push(path)"
    class="flex flex-col justify-between w-full cursor-pointer min-h-[145px] px-[14px] py-3 rounded-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"
  >
    <div class="flex justify-between">
      <h3 class="text-sm font-semibold text-brg-primary-dark w-[142px]">
        {{ detailSampah }}
      </h3>
      <span
        v-if="status.name === 'taking' || status.name === 'searching'"
        class="text-xs text-brg-primary-dark font-medium text-end w-[126px] truncate"
        >{{ address.address_name }}</span
      >
      <span
        v-else-if="status.name === 'canceled'"
        class="text-xs text-brg-primary font-medium text-end w-[126px] truncate"
        >{{ status.label }}</span
      >
    </div>
    <div class="flex justify-between items-end">
      <div>
        <p class="text-[10px] text-brg-gray">+{{ user.telp }}</p>
        <p class="text-xs text-brg-primary-dark font-semibold mt-1">
          {{ user.name }}
        </p>
      </div>
      <div class="pe-6" v-if="distance">
        <p class="font-bold">{{ distance }} Km</p>
      </div>
    </div>

    <div class="flex justify-between items-end">
      <span
        class="text-xs text-[#72798E] font-medium"
        v-if="status.name === 'finish' || status.name === 'canceled'"
        >{{ convertToDate(time) }}</span
      >
      <span v-else class="text-xs text-[#72798E] font-medium">{{
        convertToTime(time)
      }}</span>

      <ButtonSmall
        v-if="status.name === 'taking'"
        label="Lokasi"
        color="bg-brg-secondary"
        class="relative z-50"
        @click="
          (event:any) => handleClick(event, () => useRouter().push(`/partner/transaction/${transaction_id}/route?location=${address.lat},${address.lng}`))
        "
      />
      <ButtonSmall
        v-else-if="status.name === 'searching'"
        label="Lihat"
        color="bg-brg-secondary"
      />

      <ButtonSmall
        v-else-if="status.name === 'finish'"
        label="Lihat Ulasan"
        color="bg-brg-secondary"
      />
    </div>
  </div>
</template>
