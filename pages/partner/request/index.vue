<script setup lang="ts">
import { TRANSACTION } from "~/constants/trash.constants"

definePageMeta({
  layout: "partner",
})

const requestTransaction = computed(() => {
  return TRANSACTION.filter((data) => {
    return data.status.name === "searching" ?? null
  })
})
</script>

<template>
  <Header title="Permintaan" />
  <section class="px-6 mt-[30px]">
    <div class="flex flex-col gap-y-5">
      <CardTransactionPartner
        v-for="transaction in requestTransaction"
        :detailSampah="formatSampah(transaction.detailSampah)"
        :status="transaction.status"
        :user="transaction.user"
        :to="`/partner/transaction/${transaction.id}/${transaction.status.name}`"
      />
    </div>
  </section>
</template>
