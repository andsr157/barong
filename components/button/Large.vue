<script setup lang="ts">
interface Props {
  label: string
  color?: string
}
withDefaults(defineProps<Props>(), {
  color: "bg-brg-primary",
})
</script>

<template>
  <button
    class="w-[292px] h-10 rounded-[20px] text-white text-[11px] font-semibold"
    :class="color"
  >
    {{ label }}
  </button>
</template>
