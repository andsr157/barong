<script setup lang="ts">
const data = ref(null)
</script>
<template>
  <section>
    <h2 class="text-brg-primary-dark font-semibold mb-2">Foto Sampah</h2>
    <CardImageGallery with-delete />
    <Input
      type="file"
      wrapper-class="!border-dashed !border-brg-primary"
      input-class="opacity-0"
      prefix-icon="heroicons:paper-clip-solid"
      prefix-icon-color="text-brg-gray"
    />
  </section>
</template>
