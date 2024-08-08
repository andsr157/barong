<script setup lang="ts">
import { toCurrency } from "~/composables/helpers"

const nuxt = useNuxtApp()
const { data: user } = <any>useAuth()

const { data, status, refresh } = await (<any>(
  useFetch("/api/v1/dashboard/partner", {
    transform(input) {
      return {
        ...input,
        fetchedAt: new Date(),
      }
    },
    getCachedData(key) {
      const dataCache = nuxt.payload.data[key] || nuxt.static.data[key]
      if (!dataCache) {
        return
      }
      const expirationDate = new Date(dataCache.fetchedAt)
      expirationDate.setTime(expirationDate.getTime() + 30 * 1000)
      const isExpired = expirationDate.getTime() < Date.now()
      if (isExpired) {
        return
      }
      return dataCache
    },
  })
))
</script>

<template>
  <section class="mt-[30px] px-6">
    <div class="flex justify-between items-center">
      <div>
        <div class="flex items-center gap-x-2">
          <h1 class="text-[20px] text-brg-primary-dark font-semibold">
            Hai {{ user.user.name.split(" ")[0] }}
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
        <NuxtImg :src="user.user.avatar" class="w-full h-full object-cover" />
      </div>
    </div>

    <div class="mt-9">
      <CardSummaryTransaction
        type="partner"
        :total="
          data.data !== null && status === 'success' ? data.data.totalAmount : 0
        "
        :total-monthly="
          data.data !== null && status === 'success'
            ? data.data.monthlyTotal
            : 0
        "
        :service-bill="
          data.data != null && status === 'success' ? data.data.serviceBill : 0
        "
      />
    </div>

    <div class="mt-6 grid grid-cols-2 gap-x-3 text-white">
      <div
        class="flex flex-col justify-between w-full h-[86px] p-4 rounded-[10px] bg-brg-primary"
      >
        <span class="text-[10px] font-medium">Total sampah</span>
        <h3 class="text-[20px] font-semibold">
          {{
            data.data !== null && status === "success"
              ? data.data.trashTotal
              : 0
          }}
          <span class="!text-base">Kg</span>
        </h3>
      </div>
      <div
        class="flex flex-col justify-between w-full h-[86px] p-4 rounded-[10px] bg-brg-secondary"
      >
        <span class="text-[10px] font-medium"
          >Biaya layanan belum disetorkan</span
        >
        <h3 class="font-semibold">
          {{
            toCurrency(
              data.data !== null && status === "success"
                ? data.data.lackServiceBill
                : 0
            )
          }}
        </h3>
      </div>
    </div>
  </section>
</template>
