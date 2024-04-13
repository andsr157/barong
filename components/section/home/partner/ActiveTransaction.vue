<script setup lang="ts">
import { useTransactionStore } from "~/stores/Transaction.store"
import { formatSampah } from "~/composables/helpers"

const transactionStore = useTransactionStore()
const transactionActive = ref<any>(null)
const { isLoading } = storeToRefs(transactionStore)

onMounted(async () => {
  try {
    const res = await transactionStore.getActiveTransaction("partner")
    if (res.status === 200) {
      transactionActive.value = res.data
    }
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section class="px-6 pb-24 mt-10">
    <h2 class="mb-6 text-xl font-semibold text-brg-primary-dark">
      Transaksi Aktif
    </h2>
    <div v-if="isLoading">lagi loading sabar</div>
    <div class="flex flex-col gap-5" v-else-if="transactionActive">
      <CardTransactionPartner
        v-for="transaction in transactionActive"
        :detail-sampah="formatSampah(transaction.detailSampah)"
        :status="transaction.status"
        :review="transaction.review.rate"
        :user="transaction.user"
        :address="transaction.address.address"
        :to="`/partner/transaction/${transaction.id}/${transaction.status.name}`"
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
