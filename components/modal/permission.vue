<script setup lang="ts">
interface Props {
  title?: string
  desc?: string
  labelConfirmation?: string
  labelColor?: string
  isShow: boolean
  emitFunction: string
}

withDefaults(defineProps<Props>(), {
  title: "Permintaan Akses",
  desc: "Apakah anda yakin ?",
  labelColor: "text-brg-primary-dark",
  labelConfirmation: "Berikan akses",
})

const emit = defineEmits()
</script>

<template>
  <ClientOnly>
    <transition name="fade-overlay">
      <div
        v-if="isShow"
        class="w-full max-w-[450px] h-screen fixed top-0 z-40 bg-black bg-opacity-20"
      ></div>
    </transition>

    <transition name="fade">
      <div
        v-if="isShow"
        class="fixed w-full max-w-96 z-50 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 px-6"
      >
        <div
          class="w-full flex flex-col items-center py-6 rounded-[10px] bg-white"
        >
          <h1 class="text-brg-primary-dark font-bold mb-1">{{ title }}</h1>
          <p class="text-brg-primary-dark text-[11px] w-[80%] text-center">
            {{ desc }}
          </p>
          <div
            class="flex justify-center w-full text-sm font-semibold mt-8 text-center"
          >
            <span
              class="cursor-pointer p-2 rounded-md bg-brg-primary text-white"
              :class="labelColor"
              @click="emit(emitFunction)"
              >{{ labelConfirmation }}</span
            >
          </div>
        </div>
      </div>
    </transition>
  </ClientOnly>
</template>

<style>
.fade-overlay-enter-active,
.fade-overlay-leave-active {
  transition: opacity 0.5s ease;
}

.fade-overlay-enter-from,
.fade-overlay-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
