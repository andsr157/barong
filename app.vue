<script setup lang="ts">
useHead({
  link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body {
  height: 100vh;
}
#__nuxt {
  max-width: 450px;
  margin-right: auto;
  margin-left: auto;
}
</style>
