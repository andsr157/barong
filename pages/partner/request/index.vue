<script setup lang="ts">
import { useTransactionStore } from "~/stores/Transaction.store"
const transactionStore = useTransactionStore()
const { isLoading } = storeToRefs(transactionStore)

const data = ref<any>(null)
definePageMeta({
  layout: "partner",
})

onMounted(async () => {
  await transactionStore.getAllTransaction()
  data.value = transactionStore.activeTransaction
})
</script>

<template>
  <Header title="Permintaan" />
  <section class="px-6 mt-[30px]">
    <div v-if="isLoading" class="px-6 mt-6">Lagi loading sabar</div>
    <div v-else-if="data !== null" class="flex flex-col gap-y-5">
      <CardTransactionPartner
        v-for="transaction in data"
        :detailSampah="formatSampah(transaction.detailSampah)"
        :status="transaction.status"
        :user="transaction.user"
        :to="`/partner/transaction/${transaction.id}/${transaction.status.name}`"
      />
    </div>
    <div v-else>
      <p
        class="text-center text-sm font-medium text-brg-primary-dark text-opacity-70 mt-10"
      >
        Tidak ada permintaan
      </p>
    </div>
  </section>
</template>
