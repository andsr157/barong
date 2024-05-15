<script setup lang="ts">
import useCustomMaps from "~/composables/useMap"

const maps = useCustomMaps() as any

const transactionStore = useTransactionStore()
const locationStore = useLocationStore()
const { isLoading } = storeToRefs(transactionStore)
const { lat: latitude, lng: longitude } = storeToRefs(locationStore)

definePageMeta({
  layout: "partner",
})

const { data: dataCache } = useNuxtData("request")
const cursor = ref(0)
const pageFlag = ref(0)

const requestData = ref<any>({ data: [], pagination: {} })
const requestPending = ref()
const requestStatus = ref()

async function fetchData() {
  if (latitude.value === 0 && longitude.value === 0) {
    const { lat, lng } = await maps.getCurrentLocation()
    ;(latitude.value = lat), (longitude.value = lng)
  }

  const { data, execute, pending, status } = useAsyncData(
    "request",
    () =>
      $fetch(
        `/api/v1/transaction/request?limit=1&cursor=${cursor.value}&lat=${latitude.value}&lng=${longitude.value}`
      ),
    { immediate: false }
  ) as any

  if (
    dataCache.value !== null &&
    dataCache.value.data.length === dataCache.value.pagination.total_record
  ) {
    return
  }

  requestPending.value = pending.value
  requestStatus.value = status.value

  pageFlag.value += 1

  watch(pending, () => {
    requestPending.value = pending.value
  })

  watch(status, () => {
    requestStatus.value = status.value
  })

  if (!dataCache.value || dataCache.value.data.length === 0) {
    await execute()
    if (data.value !== null) {
      requestData.value.data.push(...data.value.data)
      requestData.value.pagination = data.value.pagination
      cursor.value =
        requestData.value.data[requestData.value.data.length - 1].time
    }
    return
  }
  if (
    requestData.value.data.length !== dataCache.value.pagination.total_record
  ) {
    await execute()
    if (data.value !== null) {
      requestData.value.data.push(...data.value.data)
      requestData.value.pagination = data.value.pagination
      cursor.value =
        requestData.value.data[requestData.value.data.length - 1].time
    }
    return
  }
}

onMounted(() => {
  fetchData()
  setInterval(() => {
    locationStore.updateLocation()
  }, 5000)
  // if (dataCache.value !== null && dataCache.value.data.length > 0) {
  //   requestData.value.data.push(...dataCache.value.data)
  //   requestData.value.pagination = dataCache.value.pagination
  //   cursor.value = dataCache.value.data[dataCache.value.data.length - 1].time
  // } else {
  //   fetchData()
  // }
})
</script>

<template>
  <Header title="Permintaan" />
  <section class="px-6 pt-[30px] pb-24 overflow-auto">
    <div v-if="isLoading" class="px-6 mt-6">Lagi loading sabar</div>
    <div v-else-if="requestData.data.length > 0" class="flex flex-col gap-y-5">
      <CardTransactionPartner
        v-for="transaction in requestData.data"
        :detailSampah="formatSampah(transaction.detailSampah)"
        :address="transaction.address.address"
        :status="transaction.status"
        :user="transaction.user"
        :time="transaction.time"
        :to="`/partner/transaction/${transaction.id}/${transaction.status.name}`"
      />

      <div v-if="requestPending">loading data</div>

      <button
        v-if="requestData.pagination.total_pages !== pageFlag"
        @click="fetchData()"
        class="border-2 border-brg-primary mt-2 text-brg-primary text-sm font-medium p-2 rounded-3xl w-[40%] mx-auto"
      >
        Load More
      </button>
    </div>
    <div
      v-else-if="
        !requestPending &&
        requestStatus !== 'pending' &&
        requestData.data.length > 0
      "
    >
      <p
        class="text-center text-sm font-medium text-brg-primary-dark text-opacity-70 mt-10"
      >
        Loading data
      </p>
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
