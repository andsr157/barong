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

<style>
html,
body,
#__nuxt {
  height: 100vh;
  width: 360px;
  max-width: 375px;
}
</style>
