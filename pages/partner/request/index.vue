<script setup lang="ts">
import useCustomMaps from "~/composables/useMap"

const maps = useCustomMaps() as any

const transactionStore = useTransactionStore()
const locationStore = useLocationStore()
const { isLoading } = storeToRefs(transactionStore)
const { lat: latitude, lng: longitude } = storeToRefs(locationStore)

definePageMeta({
  layout: "partner",
  middleware: ["auth", "role"],
})

const { data: dataCache } = useNuxtData("request")
const cursor = ref<any>(0)
const pageFlag = ref<any>(0)

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
        `/api/v1/transaction/request?limit=3&cursor=${cursor.value}&lat=${latitude.value}&lng=${longitude.value}`
      ),
    { immediate: false }
  ) as any

  if (requestData.value.data.length === 0 && pageFlag.value[status] > 0) {
    return
  }

  if (
    requestData.value.pagination.total_pages === pageFlag.value &&
    pageFlag.value > 0
  ) {
    return
  }

  requestPending.value = pending.value
  requestStatus.value = status.value

  watch(pending, () => {
    requestPending.value = pending.value
  })

  watch(status, () => {
    requestStatus.value = status.value
  })

  await execute()
  if (data.value !== null && data.value.data.length !== 0) {
    requestData.value.data.push(...data.value.data)
    requestData.value.pagination = data.value.pagination
    cursor.value =
      requestData.value.data[requestData.value.data.length - 1].time
  }
  if (data.value !== null) {
    pageFlag.value += data.value.pagination.pageFlag
  }
}

onMounted(async () => {
  setInterval(() => {
    locationStore.updateLocation()
  }, 5000)

  await fetchData()
})
</script>

<template>
  <Header title="Permintaan" />
  <Suspense>
    <section class="px-6 pt-[30px] pb-24 overflow-auto">
      <div v-if="requestData.length > 0" class="px-6 mt-6">
        Lagi loading sabar
      </div>
      <div
        v-else-if="requestData.data.length > 0"
        class="flex flex-col gap-y-5"
      >
        <CardTransactionPartner
          v-for="transaction in requestData.data"
          :transaction_id="transaction.id"
          :detailSampah="formatSampah(transaction.detailSampah)"
          :address="transaction.address"
          :status="transaction.status"
          :user="transaction.user"
          :time="transaction.time"
          :path="`/partner/transaction/${transaction.id}/${transaction.status.name}`"
        />

        <div v-if="requestPending"><SkeletonTransaction /></div>

        <button
          v-if="requestData.pagination.total_pages > pageFlag"
          @click="fetchData()"
          class="border-2 border-brg-primary mt-2 text-brg-primary text-sm font-medium p-2 rounded-3xl w-[40%] mx-auto"
        >
          Load More
        </button>
      </div>
      <div v-else>
        <div v-if="requestPending"><SkeletonTransaction /></div>
        <p
          v-if="!requestPending && requestStatus !== 'pending'"
          class="text-center text-sm font-medium text-brg-primary-dark text-opacity-70 mt-10"
        >
          Tidak ada permintaan
        </p>
      </div>
    </section>
  </Suspense>
</template>
