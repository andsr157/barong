<script setup lang="ts">
import { useToastStore } from "~/stores/Toast.store"
const toastStore = useToastStore()
definePageMeta({
  layout: "blank",
})

const route = useRoute()
const router = useRouter()
const isModalOpen = ref(false)
const rating = ref<number>()
const review = ref<string>("")
const partnerId = route.query.partnerId as string
const transactionId = route.params.id as string

const handleFinishTransaction = () => {
  const payload = {
    id: transactionId,
    rate: rating.value,
    review: review.value,
  }
  const { data: res, pending, status } = <any>useAsyncData("review-post", () =>
    $fetch("/api/v1/review", {
      method: "PUT",
      body: payload,
    })
  )
  if (res !== null || res.value.data !== null) {
    // router.push(`/user/transaction/success`)
  } else {
    toastStore.error({
      text: "gagal menyimpan ulasan",
    })
  }
}

const {
  data: partner,
  pending,
  status,
} = await (<any>useFetch(`/api/v1/review/partner/${partnerId}`))

const logRating = async (event: number) => {
  rating.value = event
}
</script>
<template>
  <Header title="Penilaian" />
  <div
    class="flex gap-2 px-6 mt-5"
    v-if="!pending && status === 'success' && partner !== null"
  >
    <NuxtImg :src="partner?.data.avatar" width="34" height="34" />
    <div class="flex flex-col">
      <h1 class="font-medium text-[14px]">{{ partner?.data.name }}</h1>
      <p class="text-[10px]">{{ partner.data.telp }}</p>
    </div>
  </div>
  <div class="px-6">
    <div class="mt-[30px] flex flex-col">
      <div class="flex flex-col mb-5">
        <label class="text-brg-primary-dark font-semibold mb-4">
          Beri Penilaian Pengepul
        </label>
        <div class="mx-auto">
          <NuxtRating
            :rating-value="5"
            :read-only="false"
            class="w-[209px]"
            :rating-size="'50px'"
            :active-color="'#307FF5'"
            @rating-selected="logRating"
          />
        </div>
      </div>
      <label class="text-brg-primary-dark font-semibold mb-4"
        >Beri Ulasan Pengepul
        <span
          class="bg-brg-light-gray text-[9px] p-1 px-2 rounded-2xl text-white font-normal"
          >optional</span
        ></label
      >
      <ClientOnly>
        <textarea
          cols="10"
          rows="8"
          class="border-[1px] border-brg-light-gray w-full rounded-[20px] text-[11px] text-brg-primary-dark focus:outline-none py-3 px-4 font-medium"
          placeholder="isi ulasan anda"
          v-model="review"
        >
        </textarea>
      </ClientOnly>
    </div>
  </div>
  <div class="max-w-max mx-auto py-11">
    <ButtonLarge
      label="Selesaikan Transaksi"
      @click="handleFinishTransaction"
    />
  </div>
</template>
