<script setup lang="ts">
definePageMeta({
  layout: "blank",
})
</script>

<template>
  <Header title="Transaksi" />
  <div class="px-6">
    <section>
      <div class="text-brg-primary-dark mt-[30px] mb-6">
        <h2 class="font-semibold mb-2">Keranjang Sampah</h2>
        <p class="font-medium text-[11px] text-opacity-70">
          Input sampah, pilih kategori dan masukkan perkiraan berat sampahmu
        </p>
      </div>
    </section>

    <SectionTransactionUserTrashImage />
  </div>
</template>
