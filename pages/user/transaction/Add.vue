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

    <SectionTransactionUserTrashData />

    <SectionTransactionUserTrashAddress />

    <SectionTransactionUserTrashNote />
    <div class="flex">
      <NuxtLink to="/user/transaction/confirmation" class="mx-auto">
        <ButtonLarge label="Selanjutnya" class="my-12" />
      </NuxtLink>
    </div>
  </div>
</template>
