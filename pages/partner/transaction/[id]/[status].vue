<script setup lang="ts">
import { useTransactionStore } from "~/stores/Transaction.store"
import { useToastStore } from "~/stores/Toast.store"
import { estimateTotal } from "~/composables/helpers"
import { type Transaction } from "~/types/transaction.type"
import axios from "axios"

const transactionStore = useTransactionStore()
const toastStore = useToastStore()
const { isLoading, statusLoading } = storeToRefs(transactionStore)
const isModalOpen = ref(false)

definePageMeta({
  layout: "blank",
})

const { data: user } = <any>useAuth()
const partner_id = user.value?.user?.id
const route = useRoute()
const router = useRouter()
const transaction = ref<Transaction>()

const estimate = computed(() => {
  return estimateTotal(transaction.value?.detailSampah)
})

const handleFinishTransaction = () => {
  router.push(`/partner/transaction/${transaction.value?.id}/report`)
}

// const createChat = async (payload: any) => {
//   try {
//     const res = await axios.post("/api/v1/chat", payload)
//     if (res.data.status === 200) {
//       return true
//     }
//   } catch (error) {}
// }

// const clearChat = async (chat_id) => {}

const handleRequest = async (payload: any, request: string) => {
  try {
    const id = Array.isArray(route.params.id)
      ? route.params.id[0]
      : route.params.id

    const clearMessage = await axios.delete(
      `/api/v1/chat/message/${transaction.value?.chats_id}`
    )

    if (!clearMessage.data || clearMessage.data.status === 400) {
      return
    }

    console.log(clearMessage.data)

    const res = await transactionStore.updateStatusTransaction(id, payload)
    if (transaction.value) {
      transaction.value.status = res.data.status ?? transaction.value.status
    }

    const payloadChats = {
      chats_id: transaction.value?.chats_id,
      partner_id: request === "take" ? user.value.user.id : null,
    }
    const chats = await axios
      .put("/api/v1/chat", payloadChats)
      .catch((error) => {
        console.log(error)
      })
    console.log(chats)

    console.log(res)
  } catch (error) {
    console.error(error)
  }
}

const handleCancelRequest = () => {
  const payload = {
    partner_id: null,
    status_id: "STS1",
  }
  handleRequest(payload, "cancel")

  isModalOpen.value = false
  toastStore.success({
    text: "Pengambilan dibatalkan ",
  })
}

const handleTakeRequest = () => {
  const payload = {
    partner_id: partner_id,
    status_id: "STS2",
  }
  handleRequest(payload, "take")
  toastStore.success({
    text: "Berhasil diambil",
  })
}

onMounted(async () => {
  const id = Array.isArray(route.params.id)
    ? route.params.id[0]
    : route.params.id
  const res = await transactionStore.getSingleTransaction(id)
  transaction.value = res.data

  console.log(res)
})

const googleMapsUrl = computed(() => {
  return `https://www.google.com/maps?q=${transaction.value?.address.latitude},${transaction.value?.address.longitude}`
})
</script>

<template>
  {{ transaction }}
  <Toast />
  <Header title="Detail">
    <div
      class="flex w-full justify-end cursor-pointer"
      v-if="
        transaction &&
        (transaction.status.name === 'taking' ||
          transaction.status.name === 'finish')
      "
    >
      <NuxtLink :to="`/chat/${transaction.chats_id}`">
        <Icon
          name="mingcute:chat-1-fill"
          size="32px"
          class="text-brg-primary-dark text-right"
        />
      </NuxtLink>
    </div>
  </Header>
  <div v-if="isLoading" class="px-6 mt-6">Lagi loading sabar</div>
  <div v-else-if="transaction">
    <section class="px-6 mt-[30px]">
      <h2 class="text-brg-primary-dark font-semibold mb-4">
        Alamat Pengambilan
      </h2>
      <CardAddress
        :label="transaction.address.label"
        :name="transaction.address.name"
        :telp="transaction.address.telp"
        :address="transaction.address.address"
        :detail="transaction.address.detail"
        label-button="Lihat Rute"
        :path="googleMapsUrl"
        button-target="_blank"
      />
    </section>

    <section
      class="px-6 mt-[30px]"
      v-if="
        transaction.status.name === 'taking' ||
        transaction.status.name === 'searching'
      "
    >
      <h2 class="text-brg-primary-dark font-semibold mb-4">Foto Sampah</h2>
      <CardImageGallery :url="transaction.trashImage" />
    </section>

    <section
      class="px-6 mt-10 flex flex-col"
      v-if="transaction.review.rate !== null"
    >
      <h2 class="text-brg-primary-dark font-semibold mb-4">Nilai</h2>
      <div class="mx-auto">
        <NuxtRating
          :rating-value="transaction.review.rate"
          :read-only="true"
          class="w-[209px]"
          :rating-size="'50px'"
          :active-color="'#307FF5'"
        />
      </div>
      <label class="text-brg-primary-dark font-semibold mb-4">Ulasan</label>
      <ClientOnly>
        <textarea
          cols="10"
          rows="8"
          class="border-[1px] border-brg-light-gray w-full rounded-[20px] text-[11px] text-brg-primary-dark focus:outline-none py-3 px-4 font-medium"
          placeholder="isi ulasan anda"
          v-model="transaction.review.ulasan"
          readonly
        >
        </textarea>
      </ClientOnly>
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
      <div
        class="w-full h-40 py-3 px-4 border-[1px] border-brg-light-gray rounded-[20px] text-[11px] text-brg-primary-dark font-medium"
      >
        {{ transaction.note }}
      </div>
    </section>

    <div
      class="max-w-max mx-auto py-12"
      v-if="transaction.status.name === 'searching'"
      @click="handleTakeRequest"
    >
      <ButtonLarge label="Ambil" :disabled="statusLoading" />
    </div>
    <div
      class="w-full flex flex-col items-center py-12"
      v-else-if="transaction.status.name === 'taking'"
    >
      <ButtonLarge label="Selesaikan" @click="handleFinishTransaction" />
      <ButtonLarge
        label="Batalkan"
        class="mt-4"
        color="bg-brg-red"
        :disabled="statusLoading"
        @click="isModalOpen = true"
      />
    </div>
  </div>
  <div v-else class="px-6 mt-6">ada yang salah!!</div>

  <ModalDefault
    title="Batalkan Pengambilan"
    desc="apakah anda yakin ingin membatalkan pengambilan"
    label-confirmation="Batalkan"
    label-color="text-brg-primary"
    :is-show="isModalOpen"
    emit-function="cancelTransaction"
    @closeModal="isModalOpen = false"
    @cancelTransaction="handleCancelRequest"
  />
</template>
