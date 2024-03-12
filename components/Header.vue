<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <header>
    <div class="grid grid-cols-3 px-6 py-4 items-center">
      <Icon name="mdi:arrow-back" size="24px" class="text-brg-primary-dark" />
      <h1 class="text-brg-primary-dark font-semibold text-[20px]">
        {{ title }}
      </h1>
      <slot />
    </div>
  </header>
</template>
