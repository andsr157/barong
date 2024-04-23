<script setup lang="ts">
import { useToastStore, type ToastStatus } from "~/stores/Toast.store"

const toastStore = useToastStore()

const toastBorderColorMap: Record<ToastStatus, string> = {
  success: "border-brg-primary",
  error: "border-brg-red",
  warning: "border-brg-orange",
}
</script>

<template>
  <Teleport to="body">
    <Transition name="toast">
      <div
        v-if="toastStore.toasts.length"
        class="fixed bottom-[10%] right-1/2 translate-x-1/2 z-50 w-full max-w-96"
      >
        <TransitionGroup name="toast" tag="ul">
          <li
            v-for="toast in toastStore.toasts"
            class="max-w-[60%] mx-auto flex justify-center items-center border-[2px] px-4 py-2 rounded-lg bg-white shadow-lg"
            :class="toastBorderColorMap[toast.status]"
            :key="toast.text"
          >
            <span
              class="text-center text-[11px] text-brg-primary-dark font-semibold"
            >
              {{ toast.text }}
            </span>
          </li>
        </TransitionGroup>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.toast-enter-from,
.toast-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.toast-enter-active,
.toast-leave-active {
  transition: 0.25s ease all;
}
</style>
