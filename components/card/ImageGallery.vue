<script setup lang="ts">
defineProps<{
  url?: string
  withDelete?: boolean
}>()
</script>

<template>
  <div
    v-if="url"
    :class="`${
      withDelete
        ? 'border-[1px] border-brg-light-gray rounded-[10px] overflow-hidden'
        : ''
    }`"
  >
    <NuxtImg
      v-if="url"
      :src="url"
      class="object-cover h-[159px] w-full"
      width="312"
      height="159"
    />
    <div v-if="withDelete" class="w-full px-2 py-[6px]">
      <div class="flex gap-x-1 items-center" @click="$emit('deleteImage')">
        <Icon name="mdi:delete" size="20px" class="text-brg-gray" />
        <span class="text-[10px] text-brg-gray font-medium">Hapus Foto</span>
      </div>
    </div>
  </div>
  <div
    v-else
    class="w-full h-[180px] border-[1px] border-brg-light-gray rounded-[10px] flex justify-center items-center"
  >
    <div class="flex flex-col max-w-max justify-center">
      <Icon
        name="fluent:camera-24-filled"
        size="36px"
        class="text-brg-light-gray !mx-auto"
      />
      <p class="text-[11px] text-brg-gray text-center mt-2">
        Upload foto sampah(wajib)
      </p>
    </div>
  </div>
</template>
