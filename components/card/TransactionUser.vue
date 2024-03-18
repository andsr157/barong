<script setup lang="ts">
defineProps<{
  detailSampah: string
  status: {
    name: string
    status: string
  }
  review?: number | null
}>()
</script>

<template>
  <div
    class="flex flex-col justify-between w-full min-h-[145px] px-[14px] py-3 rounded-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"
  >
    <div class="flex justify-between">
      <h3 class="text-sm font-semibold text-brg-primary-dark w-40">
        {{ detailSampah }}
      </h3>
      <span
        class="text-[11px] text-brg-primary font-semibold text-end w-[105px]"
        >{{ status.name }}</span
      >
    </div>
    <div>
      <div
        v-if="status.name === 'diambil' || status.name === 'selesai'"
        class="flex gap-x-2 items-center"
      >
        <NuxtImg
          src="/assets/dummy-profile.png"
          alt="foto pengepul"
          size="32px"
          width="32"
          height="32"
        />
        <span class="text-[11px] font-medium text-brg-primary-dark mt-1">
          Mulyanto
        </span>
      </div>
      <div>
        <p class="text-[13px]" v-if="status.name === 'mencari pengepul'">
          Permintaanmu sedang diproses. Silahkan menunggu.
        </p>
        <p class="text-[13px]" v-else-if="status.name === 'dibatalkan'">
          Transaksi anda telah dibatalkan. Anda bisa mengajukan kembali.
        </p>
      </div>
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
        label="lacak"
        color="bg-brg-secondary"
      />
      <ButtonSmall
        v-else-if="status.name === 'mencari pengepul'"
        label="batalkan"
        color="bg-brg-red"
      />
      <ButtonSmall
        v-else-if="status.name === 'dibatalkan'"
        label="Buat Transaksi"
        color="bg-brg-secondary"
        class="px-3"
      />
      <ButtonSmall
        v-else-if="status.name === 'selesai' && review !== null"
        label="Beri Nilai"
        color="bg-brg-secondary"
        class="px-3"
      />
    </div>
  </div>
</template>
