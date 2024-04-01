<script setup lang="ts">
import { useTransactionStore } from "~/stores/Transaction.store"

const transactionStore = useTransactionStore()
</script>
<template>
  <section>
    <h2 class="text-brg-primary-dark font-semibold mb-2">Foto Sampah</h2>
    <CardImageGallery
      with-delete
      :url="transactionStore.transactionData.transaction.image?.imageUrl"
      @deleteImage="transactionStore.transactionData.transaction.image = null"
    />
    <InputFile
      wrapper-class="!border-dashed !border-brg-primary"
      prefix-icon="heroicons:paper-clip-solid"
      prefix-icon-color="text-brg-gray"
      v-model="transactionStore.transactionData.transaction.image"
      placeholder="Masukan foto disini"
    />
  </section>
</template>
