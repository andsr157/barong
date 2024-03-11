<script setup lang="ts">
useHead({
  link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
