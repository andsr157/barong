<script setup lang="ts">
import { useTransactionStore } from "~/stores/Transaction.store"

const transactionStore = useTransactionStore()
const { transactionImage: data } = storeToRefs(transactionStore)
</script>
<template>
  <section>
    <div class="relative">
      <h2 class="text-brg-primary-dark font-semibold mb-2">Foto Sampah</h2>
      <CardImageGallery
        with-delete
        :url="data?.imageUrl ?? ''"
        @deleteImage="data = null"
      />
      <InputFile
        wrapper-class="!border-dashed !border-brg-primary !absolute top-8 !h-[180px] opacity-0"
        prefix-icon="heroicons:paper-clip-solid"
        prefix-icon-color="text-brg-gray"
        v-model="data"
        placeholder="Masukan foto disini"
      />
    </div>
  </section>
  <!-- {{ data.imageUrl }} -->
</template>
