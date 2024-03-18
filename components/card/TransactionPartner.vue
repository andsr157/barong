<script setup lang="ts">
defineProps<{
  detailSampah: string
  status: { name: string; status: string }
  user: {
    name: string
    telp: string
    address: string
  }
  review?: number | null
}>()
</script>

<template>
  <div
    class="flex flex-col justify-between w-full min-h-[145px] px-[14px] py-3 rounded-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"
  >
    <div class="flex justify-between">
      <h3 class="text-sm font-semibold text-brg-primary-dark w-[142px]">
        {{ detailSampah }}
      </h3>
      <span
        v-if="status.name === 'diambil'"
        class="text-xs text-brg-primary-dark font-medium text-end w-[126px] truncate"
        >{{ user.address }}</span
      >
      <span
        v-else-if="status.name === 'dibatalkan'"
        class="text-xs text-brg-primary font-medium text-end w-[126px] truncate"
        >{{ status.name }}</span
      >
    </div>
    <div>
      <p class="text-[10px] text-brg-gray">+{{ user.telp }}</p>
      <p class="text-xs text-brg-primary-dark font-semibold mt-1">
        {{ user.name }}
      </p>
    </div>

    <div class="flex justify-between items-end">
      <span
        class="text-xs text-[#72798E] font-medium"
        v-if="status.name === 'selesai' || status.name === 'dibatalkan'"
        >12 Januari 2024</span
      >
      <span v-else class="text-xs text-[#72798E] font-medium">12:30</span>
      <ButtonSmall
        v-if="status.name === 'diambil'"
        label="Lokasi"
        color="bg-brg-secondary"
      />
      <ButtonSmall
        v-else-if="status.name === 'mencari pengepul'"
        label="Ambil"
        color="bg-brg-secondary"
      />

      <ButtonSmall
        v-else-if="status.name === 'selesai'"
        label="Lihat Ulasan"
        color="bg-brg-secondary"
      />
    </div>
  </div>
</template>
