<script setup lang="ts">
definePageMeta({
  middleware: "auth",
})
</script>

<template>
  <div>
    <SectionHomeUserHero />

    <SectionHomeUserTrash />

    <SectionHomeUserActiveTransaction />
  </div>
</template>
