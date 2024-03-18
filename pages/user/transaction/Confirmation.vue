<script setup lang="ts">
import { TRANSACTION } from "~/constants/trash.constants"
const note = ref("ini catatan")

definePageMeta({
  layout: "blank",
})

const transactionData = TRANSACTION[0].detailSampah

const estimateTotal = computed(() => {
  const min = transactionData.reduce(
    (total, data) => total + data.minPrice * data.weight,
    0
  )
  const max = transactionData.reduce(
    (total, data) => total + data.maxPrice * data.weight,
    0
  )

  return [min, max]
})
</script>

<template>
  <Header title="Transaksi" />
  <div class="px-6 mt-[30px]">
    <section class="">
      <h2 class="text-brg-primary-dark font-semibold mb-4">
        Alamat Pengambilan
      </h2>
      <CardAddress
        label="Rumah"
        name="July Dwi Saputra"
        telp="+62876543219"
        address="Dk. Tompe Rt.04/02, Lorog, Tawangsari, Sukoharjo, Jawa Tengah 57561"
        label-button="Ubah Alamat"
        path="/user/profile/address/edit"
        no-button
      />
    </section>

    <section class="mt-8">
      <h2 class="text-brg-primary-dark font-semibold mb-4">Data penjualan</h2>
      <div class="flex flex-col gap-y-2 mb-9">
        <CardTrashEstimate
          v-for="(data, index) in TRANSACTION[0].detailSampah"
          :key="index"
          :category="data.category"
          :subcategory="data.subcategory"
          :weight="data.weight"
          :min-price="data.minPrice"
          :max-price="data.maxPrice"
        />
      </div>

      <CardTrashTotal :estimate-total="estimateTotal" />
    </section>

    <section class="mt-6">
      <h2 class="text-brg-primary-dark font-semibold mb-4">catatan</h2>
      <ClientOnly>
        <textarea
          cols="10"
          rows="8"
          class="border-[1px] border-brg-light-gray w-full rounded-[20px] text-[11px] text-brg-primary-dark focus:outline-none py-3 px-4 font-medium"
          placeholder="isi catatan"
          v-model="note"
        >
        </textarea>
      </ClientOnly>
    </section>

    <div class="max-w-max mx-auto py-12">
      <ButtonLarge label="Konfirmasi" />
    </div>
  </div>
</template>
