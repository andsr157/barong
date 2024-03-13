<script setup lang="ts">
defineProps<{
  label: string
  color: string
}>()
</script>

<template>
  <button
    class="min-w-[86px] h-8 rounded-[20px] text-white text-[11px] font-semibold"
    :class="color"
  >
    {{ label }}
  </button>
</template>
