<script setup lang="ts">
definePageMeta({
  middleware: ["auth", "role"],
})
</script>

<template>
  <div>
    <SectionHomeUserHero />

    <SectionHomeUserTrash />

    <SectionHomeUserActiveTransaction />

    <ButtonAddTransaction />
  </div>
</template>
