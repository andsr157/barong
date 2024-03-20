<script setup lang="ts">
import { TRANSACTION } from "~/constants/trash.constants"
import { type Transaction } from "~/types/transaction.type"
definePageMeta({
  layout: "blank",
})

const route = useRoute()
const router = useRouter()
const transaction = ref<Transaction>()

const estimate = computed(() => {
  return estimateTotal(transaction.value?.detailSampah)
})

const handleFinishTransaction = () => {
  router.push(`/partner/transaction/${transaction.value?.id}/report`)
}
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
  <div v-if="transaction">
    <section class="px-6 mt-[30px]">
      <h2 class="text-brg-primary-dark font-semibold mb-4">
        Alamat Pengambilan
      </h2>
      <CardAddress
        :label="transaction.address.label"
        :name="transaction.address.name"
        :telp="transaction.address.telp"
        :address="transaction.address.detail"
        label-button="Lihat Rute"
      />
    </section>

    <section class="px-6 mt-[30px]">
      <h2 class="text-brg-primary-dark font-semibold mb-4">Foto Sampah</h2>
      <CardImageGallery :url="transaction.trashImage" />
    </section>

    <section class="px-6 mt-[30px]">
      <h2 class="text-brg-primary-dark font-semibold mb-4">Data Penjualan</h2>
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
        :total="transaction.totalPrice ?? 0"
        :serivce-price="transaction.servicePrice ?? 0"
        :final-total="transaction.finalTotalPrice ?? 0"
        type="finish"
      />
      <CardTrashTotal v-else :estimate-total="estimate" />
    </section>

    <section class="px-6 mt-[30px]">
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
      <ButtonLarge label="Ambil" />
    </div>
    <div
      class="w-full flex flex-col items-center py-12"
      v-else-if="transaction.status.name === 'taking'"
    >
      <ButtonLarge label="Selesaikan" @click="handleFinishTransaction" />
      <ButtonLarge label="Batalkan" class="mt-4" color="bg-brg-red" />
    </div>
  </div>
</template>
