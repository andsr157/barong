<script setup lang="ts">
defineProps<{
  withDelete?: boolean
}>()
</script>

<template>
  <div
    :class="`${
      withDelete
        ? 'border-[1px] border-brg-light-gray rounded-[10px] overflow-hidden'
        : ''
    }`"
  >
    <NuxtImg
      src="/assets/dummy-trash.png"
      class="object-cover w-full"
      width="312"
      height="159"
    />
    <div v-if="withDelete" class="w-full px-2 py-[6px]">
      <div class="flex gap-x-1 items-center">
        <Icon name="mdi:delete" size="20px" class="text-brg-gray" />
        <span class="text-[10px] text-brg-gray font-medium">Hapus Foto</span>
      </div>
    </div>
  </div>
</template>
