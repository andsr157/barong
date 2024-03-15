<script setup lang="ts">
interface Props {
  label: string
  buttonClass?: string
  color?: string
}

withDefaults(defineProps<Props>(), {
  color: "bg-brg-primary",
})
</script>

<template>
  <button
    class="min-w-[86px] h-8 rounded-[20px] text-white text-[11px] font-semibold"
    :class="[buttonClass, color]"
  >
    {{ label }}
  </button>
</template>
