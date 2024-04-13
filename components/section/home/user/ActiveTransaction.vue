<script setup lang="ts">
import { useTransactionStore } from "~/stores/Transaction.store"
import { formatSampah } from "~/composables/helpers"
import { TRANSACTION } from "~/constants/trash.constants"

const transactionStore = useTransactionStore()
const transactionActive = ref<any>(null)
const { isLoading } = storeToRefs(transactionStore)

onMounted(async () => {
  const res = await transactionStore.getUserActiveTransaction()
  if (res.status === 200) {
    transactionActive.value = res.data
  }
})
</script>

<template>
  <section class="px-6 pb-24">
    <h2 class="mb-6 text-xl font-semibold text-brg-primary-dark">
      Transaksi Aktif
    </h2>
    <div v-if="isLoading">lagi loading sabar</div>
    <div class="flex flex-col gap-5" v-else-if="transactionActive">
      <CardTransactionUser
        v-for="transaction in transactionActive"
        :detail-sampah="formatSampah(transaction.detailSampah)"
        :status="transaction.status"
        :review="transaction.review.rate"
        :to="`/user/transaction/${transaction.id}/${transaction.status.name}`"
      />
    </div>
    <div class="w-full pb-14" v-else>
      <p
        class="text-xs font-medium text-brg-primary-dark text-opacity-70 text-center"
      >
        TIdak ada transaksi aktfi saat ini
      </p>
    </div>
  </section>
</template>
