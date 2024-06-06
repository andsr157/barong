<script setup lang="ts">
definePageMeta({
  layout: "partner",
  middleware: ["auth", "role"],
})
</script>

<template>
  <SectionHomePartnerHero />

  <SectionHomePartnerActiveTransaction />
</template>
