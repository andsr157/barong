<script setup lang="ts">
interface Props {
  label: string
  color?: string
  disabled?: boolean
}
withDefaults(defineProps<Props>(), {
  color: "bg-brg-primary",
  disabled: false,
})
</script>

<template>
  <button
    class="w-[80vw] sm:w-[292px] h-10 rounded-[20px] text-white text-[11px] font-semibold"
    :class="`${disabled ? 'bg-brg-light-gray cursor-not-allowed' : color}`"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>
