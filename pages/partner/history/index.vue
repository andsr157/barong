<script setup lang="ts">
const nuxt = useNuxtApp()

definePageMeta({
  layout: "partner",
})

const statusName = ref("saat ini")
const statusData = ref<string>("active")

const { data: activeCache } = useNuxtData("active")
const { data: finishCache } = useNuxtData("finish")
const { data: canceledCache } = useNuxtData("canceled")

const cursor: Record<string, any> = ref({
  active: ref<any>(0),
  finish: ref<any>(0),
  canceled: ref<any>(0),
})

const transactionDataCache: Record<string, any> = ref({
  active: ref<any>(activeCache),
  finish: ref<any>(finishCache),
  canceled: ref<any>(canceledCache),
})

const transactionData: Record<string, any> = ref({
  active: ref({ data: [], pagination: {} }),
  finish: ref({ data: [], pagination: {} }),
  canceled: ref({ data: [], pagination: {} }),
})

const transactionPending = ref<boolean>()
const fetchStatus = ref<string>()

const fetchData = async (status: string) => {
  const statuses: Record<string, string> = {
    active: "saat ini",
    finish: "Selesai",
    canceled: "Dibatalkan",
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
          `/api/v1/transaction/partner?limit=5&status=${status}&cursor=${cursor.value[status]}`
        ),
      { immediate: false }
    )
  )

  if (
    transactionDataCache.value[status] !== null &&
    transactionData.value[status].data.length ===
      transactionDataCache.value[status].pagination.total_record
  ) {
    return
  }

  transactionPending.value = pending.value
  fetchStatus.value = fetchStatus.value

  watch(pending, () => {
    transactionPending.value = pending.value
    console.log(transactionPending.value)
  })

  watch(fetchStatus, () => {
    fetchStatus.value = fetchStatus.value
    console.log(fetchStatus.value)
  })

  if (
    !transactionDataCache.value[status] ||
    transactionDataCache.value[status].data.length === 0
  ) {
    await execute()
    if (data.value !== null) {
      transactionData.value[status].data.push(...data.value.data)
      transactionData.value[status].pagination = data.value.pagination
      cursor.value[status] = data.value.data[data.value.data.length - 1].id
    }
    return
  }
  if (
    transactionData.value[status].data.length !==
    transactionDataCache.value[status].pagination.total_record
  ) {
    await execute()
    if (data.value !== null) {
      transactionData.value[status].data.push(...data.value.data)
      transactionData.value[status].pagination = data.value.pagination
      cursor.value[status] = data.value.data[data.value.data.length - 1].id
    }
    return
  }
}

onMounted(() => {
  if (
    transactionDataCache.value["active"] !== null &&
    transactionDataCache.value["active"].data.length > 0
  ) {
    transactionData.value["active"].data.push(
      ...transactionDataCache.value["active"].data
    )
    transactionData.value["active"].pagination =
      transactionDataCache.value["active"].pagination
    cursor.value["active"] =
      transactionDataCache.value["active"].data[
        transactionDataCache.value["active"].data.length - 1
      ].id
  } else {
    fetchData("active")
  }
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
        :to="`/user/transaction/${transaction.id}/${transaction.status.name}`"
      />

      <div v-if="transactionPending">loading data sabar</div>
    </div>

    <div v-else>
      <div v-if="transactionPending">loading data sabar</div>
      <p
        v-if="!transactionPending && fetchStatus !== 'pending'"
        class="text-center text-sm font-medium text-brg-primary-dark text-opacity-70 mt-10"
      >
        Tidak ada data
      </p>
    </div>
  </div>
</template>
