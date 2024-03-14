<script setup lang="ts">
import { formatSampah } from "~/composables/helpers"

const activeTransaction = [
  {
    detailSampah: [
      { category: "Alumunium" },
      { category: "Plastik" },
      { category: "Kertas" },
    ],
    status: "mencari pengepul",
    review: {
      rate: null,
      ulasan: null,
    },
  },
  {
    detailSampah: [
      { category: "Plastik" },
      { category: "Alumunium" },
      { category: "Kertas" },
    ],
    status: "diambil",
    review: {
      rate: null,
      ulasan: null,
    },
  },
]
</script>

<template>
  <section class="px-6 pb-24">
    <h2 class="mb-6 text-xl font-semibold text-brg-primary-dark">
      Transaksi Aktif
    </h2>
    <div class="flex flex-col gap-5">
      <CardTransactionUser
        v-for="transaction in activeTransaction"
        :detail-sampah="formatSampah(transaction.detailSampah)"
        :status="transaction.status"
        :review="transaction.review.rate"
      />
    </div>
  </section>
</template>
