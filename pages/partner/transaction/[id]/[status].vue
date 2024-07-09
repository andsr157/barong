<script setup lang="ts">
import { useTransactionStore } from "~/stores/Transaction.store"
import { useToastStore } from "~/stores/Toast.store"
import { estimateTotal } from "~/composables/helpers"
import { type Transaction } from "~/types/transaction.type"
import axios from "axios"

const transactionStore = useTransactionStore()
const notificationStore = useNotificationStore()
const toastStore = useToastStore()
const { isLoading, statusLoading } = storeToRefs(transactionStore)
const isModalOpen = ref(false)

definePageMeta({
  layout: "blank",
  middleware: ["auth", "role"],
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

const handleRequest = async (payload: any, request: string) => {
  try {
    const id = Array.isArray(route.params.id)
      ? route.params.id[0]
      : route.params.id

    if (!transaction.value) {
      throw new Error("Transaction is not defined")
    }

    const clearMessage = await axios.delete(
      `/api/v1/chat/message/${transaction.value?.chats_id}`
    )

    if (!clearMessage.data || clearMessage.data.status === 400) {
      return
    }

    const res = await transactionStore.updateStatusTransaction(id, payload)
    if (res?.data) {
      await fetchData(id)
      const notifPayload = {
        user_id: transaction.value.user?.id,
        notificationId: request === "take" ? 1 : 2,
        link: `/transaction/${transaction.value.id}/${transaction.value.status.name}`,
      }
      notificationStore.sendNotification(notifPayload)
      //send push
      if (request === "cancel") {
        await $fetch("/api/v1/notification/sendPush", {
          method: "POST",
          body: {
            user_id: transaction.value.user?.id,
            title: "Transaksi Dicancel",
            body: "Transaksi anda dibatalkan pengepul mencari pengepul lain..",
            url: `/user/transaction/${transaction.value.id}/${transaction.value.status.name}`,
          },
        })
      } else if (request === "take") {
        await $fetch("/api/v1/notification/sendPush", {
          method: "POST",
          body: {
            user_id: transaction.value.user?.id,
            title: "Transaksi Diambil",
            body: "Transaksi anda telah diambil pengepul",
            url: `/user/transaction/${transaction.value.id}/${transaction.value.status.name}`,
          },
        })
      }

      const payloadChats = {
        chats_id: transaction.value?.chats_id,
        partner_id: request === "take" ? user.value.user.id : null,
      }
      const chats = await axios.put("/api/v1/chat", payloadChats)
    } else {
      throw new Error("Failed to update transaction status")
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

const handleCancelRequest = () => {
  const payload = {
    partner_id: null,
    status_id: "STS1",
  }
  isModalOpen.value = false
  handleRequest(payload, "cancel")
    .then(() => {
      toastStore.success({
        text: "Pengambilan dibatalkan ",
      })
    })
    .catch((error) => {
      console.error(error)
      toastStore.error({
        text: "Gagal membatalkan pengambilan",
      })
    })
}

const handleTakeRequest = () => {
  const payload = {
    partner_id: partner_id,
    status_id: "STS2",
  }
  handleRequest(payload, "take")
    .then(() => {
      toastStore.success({
        text: "Berhasil diambil",
      })
    })
    .catch((error) => {
      console.error(error)
      toastStore.error({
        text: "Gagal mengambil atau sudah diambil pengepul lain",
        timeout: 3000,
      })
      setTimeout(() => {
        router.push("/partner/request")
      }, 3000)
    })
}

const fetchData = async (id: string) => {
  const res = await transactionStore.getSingleTransaction(id)
  if (res?.error) {
    if (res.error.status === 403) {
      throw new Error("forbidden")
    }
  }
  transaction.value = res.data
}

onMounted(async () => {
  const id = Array.isArray(route.params.id)
    ? route.params.id[0]
    : route.params.id
  await fetchData(id).catch(() => {
    router.push(`/${user?.value?.user.role}`)
  })
})

const googleMapsUrl = computed(() => {
  return `/partner/transaction/${transaction.value?.id}/route?location=${transaction.value?.address.latitude},${transaction.value?.address.longitude}`
})
</script>

<template>
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
  <div v-if="isLoading" class="px-6 mt-6">
    <SplashScreen :is-loading="true" />
  </div>
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
        :no-button="transaction.status.name === 'finish'"
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
          :trashUnit="data.trashUnit"
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
          :trashUnit="data.trashUnit"
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
      <ButtonLarge
        label="Mulai"
        @click="
          router.push(
            `/partner/transaction/${transaction.id}/take?location=${transaction.address.latitude},${transaction.address.longitude}`
          )
        "
      />
      <ButtonLarge
        label="Selesaikan"
        @click="handleFinishTransaction"
        class="mt-4"
      />

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
