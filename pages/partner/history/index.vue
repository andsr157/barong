<script setup lang="ts">
const nuxt = useNuxtApp()

definePageMeta({
  layout: "partner",
  middleware: ["auth", "role"],
})

const statusName = ref("saat ini")
const statusData = ref<string>("active")
const pageFlag: Record<string, any> = ref({
  active: ref<any>(0),
  finish: ref<any>(0),
})

const cursor: Record<string, any> = ref({
  active: ref<any>(0),
  finish: ref<any>(0),
})

const transactionData: Record<string, any> = ref({
  active: ref({ data: [], pagination: {} }),
  finish: ref({ data: [], pagination: {} }),
})

const transactionPending = ref<boolean>()
const fetchStatus = ref<string>()

const fetchData = async (status: string) => {
  const statuses: Record<string, string> = {
    active: "saat ini",
    finish: "Selesai",
  }

  statusName.value = statuses[status]
  statusData.value = status
  const {
    data,
    execute,
    pending,
    status: fetchStatus,
  } = <any>(
    useAsyncData(
      status,
      () =>
        $fetch(
          `/api/v1/transaction/partner?limit=3&status=${status}&cursor=${cursor.value[status]}`
        ),
      { immediate: false }
    )
  )

  if (
    transactionData.value[status].data.length === 0 &&
    pageFlag.value[status] > 0
  ) {
    return
  }

  if (
    transactionData.value[status].pagination.total_pages ===
      pageFlag.value[status] &&
    pageFlag.value[status] > 0
  ) {
    return
  }

  transactionPending.value = pending.value
  fetchStatus.value = fetchStatus.value
  pageFlag.value[status] += 1

  watch(pending, () => {
    transactionPending.value = pending.value
  })

  watch(fetchStatus, () => {
    fetchStatus.value = fetchStatus.value
  })

  await execute()
  if (data.value && data.value.data !== null) {
    transactionData.value[status].data.push(...data.value.data)
    transactionData.value[status].pagination = data.value.pagination
    cursor.value[status] = data.value.data[data.value.data.length - 1].time
  }
  return
}

onMounted(async () => {
  await fetchData("active")
})
</script>
<template>
  <Header title="Riwayat Transaksi" />

  <div class="flex px-6 gap-x-4 mt-5">
    <ButtonSmall
      label="Saat ini"
      :color="statusData !== 'active' ? 'bg-brg-light-gray' : 'bg-brg-primary'"
      @click="fetchData('active')"
    />
    <ButtonSmall
      label="Selesai"
      :color="statusData !== 'finish' ? 'bg-brg-light-gray' : 'bg-brg-primary'"
      @click="fetchData('finish')"
    />
  </div>

  <div class="px-6 mt-6 pt-6`">
    <h1 class="font-semibold text-sm mb-6">Transaksi {{ statusName }}</h1>
    <div
      class="flex flex-col gap-y-6 mt-4 pb-24"
      v-if="transactionData[statusData].data.length > 0"
    >
      <CardTransactionPartner
        v-for="transaction in transactionData[statusData].data"
        :user="transaction.user"
        :address="transaction.address"
        :detail-sampah="formatSampah(transaction.detailSampah)"
        :status="transaction.status"
        :time="transaction.time"
        :to="`/partner/transaction/${transaction.id}/${transaction.status.name}`"
      />

      <div v-if="transactionPending"><SkeletonTransaction /></div>

      <button
        v-if="
          transactionData[statusData].pagination.total_pages !==
          pageFlag[statusData]
        "
        @click="fetchData(statusData)"
        class="border-2 border-brg-primary mt-2 text-brg-primary text-sm font-medium p-2 rounded-3xl w-[40%] mx-auto"
      >
        Load More
      </button>
    </div>

    <div v-else>
      <div v-if="transactionPending"><SkeletonTransaction /></div>
      <p
        v-if="!transactionPending && fetchStatus !== 'pending'"
        class="text-center text-sm font-medium text-brg-primary-dark text-opacity-70 mt-10"
      >
        Tidak ada data
      </p>
    </div>
  </div>
</template>
