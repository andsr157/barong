<script setup lang="ts">
import { convertToTime, convertToDate } from "~/composables/helpers"
defineProps<{
  detailSampah: string
  chatId?: string
  status: {
    id: number
    name: string
    status: string
    label: string
  }
  partner?: {
    name: string
    avatar: string
  }
  time: string
  path: string
}>()

const router = useRouter()
const handleClick = (event: Event, callback: () => void) => {
  event.stopPropagation()
  callback()
}
</script>

<template>
  <div
    @click="router.push(path)"
    class="flex flex-col justify-between w-full min-h-[145px] px-[14px] py-3 rounded-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"
  >
    <div class="flex justify-between">
      <h3 class="text-sm font-semibold text-brg-primary-dark w-40">
        {{ detailSampah }}
      </h3>
      <span
        class="text-[11px] text-brg-primary font-semibold text-end w-[105px]"
        >{{ status.label }}</span
      >
    </div>
    <div>
      <div
        v-if="status.name === 'taking' || status.name === 'finish'"
        class="flex gap-x-2 items-center"
      >
        <NuxtImg
          :src="partner?.avatar ?? '/assets/dummy-profile.png'"
          alt="foto pengepul"
          size="32px"
          class="w-8 h-8 object-cover rounded-full overflow-hidden"
        />
        <span class="text-[11px] font-medium text-brg-primary-dark mt-1">
          {{ partner?.name }}
        </span>
      </div>
      <div>
        <p class="text-[13px]" v-if="status.name === 'searching'">
          Permintaanmu sedang diproses. Silahkan menunggu.
        </p>
        <p class="text-[13px]" v-else-if="status.name === 'canceled'">
          Transaksi anda telah dibatalkan. Anda bisa mengajukan kembali.
        </p>
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
        @click="
          (event:any) => handleClick(event, () => router.push(`/chat/${chatId}`))
        "
        v-if="status.name === 'taking'"
        label="chat"
        color="bg-brg-secondary"
        class="relative z-50"
      />
      <ButtonSmall
        v-else-if="status.name === 'searching'"
        label="batalkan"
        color="bg-brg-red"
      />
      <ButtonSmall
        v-else-if="status.name === 'canceled'"
        label="Buat Transaksi"
        color="bg-brg-secondary"
        class="px-3"
      />
      <ButtonSmall
        v-else-if="status.name === 'finish' && status.id === 3"
        label="Beri Nilai"
        color="bg-brg-secondary"
        class="px-3"
      />
    </div>
  </div>
</template>
