<script setup lang="ts">
const nuxt = useNuxtApp()
definePageMeta({
  layout: "default",
})

const transactionDataContainer = ref(null) as any

const statusName = ref("saat ini")
const statusData = ref<string>("active")
const pageFlag: Record<string, any> = ref({
  active: ref<any>(0),
  finish: ref<any>(0),
  canceled: ref<any>(0),
})

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
          `/api/v1/transaction/user?limit=1&status=${status}&cursor=${cursor.value[status]}`
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
}

onMounted(async () => {
  await fetchData("active")
})
</script>
<template>
  <Header title="Riwayat Transaksi" />

  <div class="flex justify-evenly mt-5">
    <div @click="fetchData('active')">
      <ButtonSmall
        label="Saat ini"
        :color="
          statusData !== 'active' ? 'bg-brg-light-gray' : 'bg-brg-primary'
        "
      />
    </div>
    <div @click="fetchData('finish')">
      <ButtonSmall
        label="Selesai"
        :color="
          statusData !== 'finish' ? 'bg-brg-light-gray' : 'bg-brg-primary'
        "
      />
    </div>
    <div @click="fetchData('canceled')">
      <ButtonSmall
        label="Dibatalkan"
        :color="
          statusData !== 'canceled' ? 'bg-brg-light-gray' : 'bg-brg-primary'
        "
      />
    </div>
  </div>

  <div class="px-6 mt-6 pt-6`">
    <h1 class="font-semibold text-sm mb-6">Transaksi {{ statusName }}</h1>
    <div
      class="flex flex-col gap-y-6 mt-4 pb-24"
      ref="transactionDataContainer"
      v-if="transactionData[statusData].data.length > 0"
    >
      <CardTransactionUser
        v-for="transaction in transactionData[statusData].data"
        :partner="transaction.pengepul"
        :detail-sampah="formatSampah(transaction.detailSampah)"
        :status="transaction.status"
        :time="transaction.time"
        :to="`/user/transaction/${transaction.id}/${transaction.status.name}`"
      />

      <div v-if="transactionPending">loading data sabar</div>
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
