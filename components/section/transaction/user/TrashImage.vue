<script setup lang="ts">
import { useTransactionStore } from "~/stores/Transaction.store"

const transactionStore = useTransactionStore()
const { transactionImage: data } = storeToRefs(transactionStore)
</script>
<template>
  <section>
    <h2 class="text-brg-primary-dark font-semibold mb-2">Foto Sampah</h2>
    <CardImageGallery
      with-delete
      :url="data?.imageUrl ?? ''"
      @deleteImage="data = null"
    />
    <InputFile
      wrapper-class="!border-dashed !border-brg-primary"
      prefix-icon="heroicons:paper-clip-solid"
      prefix-icon-color="text-brg-gray"
      v-model="data"
      placeholder="Masukan foto disini"
    />
  </section>
  <!-- {{ data.imageUrl }} -->
</template>
