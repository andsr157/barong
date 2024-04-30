<script setup lang="ts">
import { useTransactionStore } from "~/stores/Transaction.store"

const transactionStore = useTransactionStore()

const { transactionData } = storeToRefs(transactionStore)
definePageMeta({
  layout: "blank",
})

onBeforeUnmount(() => {
  if (transactionData.value.transaction.id) {
    transactionData.value = {
      transaction: {
        id: 0,
        user_id: 0,
        chats_id: 0,
        address_id: 0,
        status_id: 0,
        note: "",
      },
      transaction_detail: [],
    }
  }
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
