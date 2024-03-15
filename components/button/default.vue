<script setup lang="ts">
defineProps<{
  label?: string
  color?: string
  outline?: boolean
  buttonClass?: string
}>()
</script>

<template>
  <button
    :class="[
      'w-full h-8 rounded-[20px] text-[11px] font-semibold',
      outline
        ? 'border-[1px]' + ' border-' + color + ' text-' + color
        : 'bg-' + color + ' text-white',
      buttonClass,
    ]"
  >
    {{ label }}
  </button>
</template>
