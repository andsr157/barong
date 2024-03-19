<script setup lang="ts">
import { TRANSACTION } from "~/constants/trash.constants"
import { estimateTotal } from "~/composables/helpers"

definePageMeta({
  layout: "blank",
})

const route = useRoute()
const transaction = ref<any>()

const estimate = computed(() => {
  return estimateTotal(transaction.value.detailSampah)
})

onMounted(() => {
  let id: string
  if (Array.isArray(route.params.id)) {
    id = route.params.id[0]
  } else {
    id = route.params.id
  }
  transaction.value = TRANSACTION.filter((data) => {
    return data.id === parseInt(id)
  })[0]
})
</script>

<template>
  <Header title="Detail" />
  <div v-if="transaction" class="px-6">
    <section class="mt-[30px]">
      <Stepper
        :status="transaction.status"
        v-if="transaction.status.name !== 'canceled'"
      />

      <CardPartnerProfile
        class="mt-14"
        v-if="transaction.status.name === 'taking'"
        :name="transaction.pengepul.name"
        :telp="transaction.pengepul.telp"
        :rating="transaction.pengepul.rating"
        :photo="transaction.pengepul.photo"
      />
      <div v-else class="mt-[30px]">
        ini nanti tampilan user review tugas july
      </div>
    </section>

    <section class="mt-[30px]">
      <h2 class="text-brg-primary-dark font-semibold mb-4">
        Alamat Pengambilan
      </h2>
      <CardAddress
        :label="transaction.address.label"
        :name="transaction.address.name"
        :telp="transaction.address.telp"
        :address="transaction.address.detail"
        no-button
      />
    </section>

    <section class="mt-[30px]">
      <h2 class="text-brg-primary-dark font-semibold mb-4">Data penjualan</h2>
      <div class="flex flex-col gap-y-2 mb-9">
        <CardTrashEstimate
          v-if="transaction.status.name === 'finish'"
          v-for="(data, index) in transaction.detailSampah"
          :key="index"
          :category="data.category"
          :subcategory="data.subcategory"
          :weight="data.weight"
          :final-price="data.finalPrice"
          type="finish"
        />
        <CardTrashEstimate
          v-else
          v-for="(data, index) in transaction.detailSampah"
          :key="transaction.id"
          :category="data.category"
          :subcategory="data.subcategory"
          :weight="data.weight"
          :min-price="data.minPrice"
          :max-price="data.maxPrice"
        />
      </div>

      <CardTrashTotal
        v-if="transaction.status.name === 'finish'"
        :total="transaction.totalPrice"
        :serivce-price="transaction.servicePrice"
        :final-total="transaction.finalTotalPrice"
        type="finish"
      />
      <CardTrashTotal v-else :estimate-total="estimate" />
    </section>

    <section class="mt-6">
      <h2 class="text-brg-primary-dark font-semibold mb-4">catatan</h2>
      <ClientOnly>
        <textarea
          cols="10"
          rows="8"
          class="border-[1px] border-brg-light-gray w-full rounded-[20px] text-[11px] text-brg-primary-dark focus:outline-none py-3 px-4 font-medium"
          placeholder="isi catatan"
          v-model="transaction.note"
        >
        </textarea>
      </ClientOnly>
    </section>

    <div
      class="max-w-max mx-auto py-12"
      v-if="transaction.status.name === 'searching'"
    >
      <ButtonLarge label="Batalkan" color="bg-brg-red" />
    </div>
    <div
      class="max-w-max mx-auto py-12"
      v-else-if="transaction.status.name === 'taking'"
    >
      <ButtonLarge label="Selesaikan Transaksi" :disabled="true" />
    </div>
    <div
      class="max-w-max mx-auto py-12"
      v-else-if="
        transaction.status.name === 'finish' && transaction.review.rate === null
      "
    >
      <ButtonLarge label="Selesaikan Transaksi" />
    </div>

    <div
      class="max-w-max mx-auto py-12"
      v-else-if="transaction.status.name === 'canceled'"
    >
      <ButtonLarge label="Buat Transaksi Lagi" />
    </div>
  </div>
  <div v-else="">lagi loading</div>
</template>
