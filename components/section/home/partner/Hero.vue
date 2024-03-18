<script setup lang="ts">
import { toCurrency } from "~/composables/helpers"
const trashTotal = ref<number>(55)
const unPaidService = ref<number>(0)
</script>

<template>
  <section class="mt-[30px] px-6">
    <div class="flex justify-between items-center">
      <div>
        <div class="flex items-center gap-x-2">
          <h1 class="text-[20px] text-brg-primary-dark font-semibold">
            Hai July
          </h1>
          <h2 class="!text-brg-primary">
            <span class="text-sm font-semibold">4.5</span>
            <span>
              <Icon name="ic:round-star" size="18px" />
            </span>
          </h2>
        </div>
        <p class="text-xs text-brg-gray">Ayo ambil dan cari sampah anda</p>
      </div>

      <div class="w-11 h-11 rounded-full overflow-hidden">
        <NuxtImg
          src="/assets/dummy-profile.png"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <div class="mt-9">
      <CardSummaryTransaction
        type="partner"
        :total="1500000"
        :total-monthly="400000"
        :service-bill="10000"
      />
    </div>

    <div class="mt-6 grid grid-cols-2 gap-x-3 text-white">
      <div
        class="flex flex-col justify-between w-full h-[86px] p-4 rounded-[10px] bg-brg-primary"
      >
        <span class="text-[10px] font-medium">Total sampah</span>
        <h3 class="text-[20px] font-semibold">
          {{ trashTotal }} <span class="!text-base">Kg</span>
        </h3>
      </div>
      <div
        class="flex flex-col justify-between w-full h-[86px] p-4 rounded-[10px] bg-brg-secondary"
      >
        <span class="text-[10px] font-medium"
          >Biaya layanan belum disetorkan</span
        >
        <h3 class="font-semibold">
          {{ toCurrency(unPaidService) }}
        </h3>
      </div>
    </div>
  </section>
</template>
