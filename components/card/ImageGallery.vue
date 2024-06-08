<script setup lang="ts">
const props = defineProps<{
  url?: string
  withDelete?: boolean
  isEditMode?: boolean
}>()

const emit = defineEmits()

const handleDeleteImage = () => {
  if (props.isEditMode) {
    console.log("editmode")
  } else {
    emit("deleteImage")
  }
}

const isPreviewOpen = ref(false)
</script>

<template>
  <div
    v-if="url"
    :class="`${
      props.withDelete
        ? 'border-[1px] border-brg-light-gray rounded-[10px] overflow-hidden'
        : ''
    }`"
  >
    <NuxtImg
      v-if="props.url"
      @click="isPreviewOpen = true"
      :src="props.url"
      class="object-cover h-48 w-full"
      width="312"
      height="159"
    />
    <div v-if="props.withDelete" class="w-full px-2 py-[6px]">
      <div class="flex gap-x-1 items-center" @click="handleDeleteImage">
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

  <transition name="fade">
    <div
      v-if="isPreviewOpen"
      @click="isPreviewOpen = false"
      class="fixed top-0 left-0 z-50 w-full h-[100vh] bg-gray-500 bg-opacity-10 flex justify-center items-center"
    >
      <img
        :src="props.url"
        alt="partner profile img"
        class="w-[375px] h-auto md:w-3/4 object-contain"
      />
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
