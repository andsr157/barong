<script setup lang="ts">
import { useTransactionStore } from "~/stores/Transaction.store"
import { estimateTotal } from "~/composables/helpers"

const transactionStore = useTransactionStore()

const route = useRoute()
const router = useRouter()
const transaction = ref<any>()
const isModalOpen = ref(false)
// const rating = ref();

const estimate = computed(() => {
  return estimateTotal(transaction.value.detailSampah)
})

const handleFinishTransaction = () => {
  router.push(`/user/transaction/success`)
}

definePageMeta({
  layout: "blank",
})

onMounted(async () => {
  let id: string
  if (Array.isArray(route.params.id)) {
    id = route.params.id[0]
  } else {
    id = route.params.id
  }
  const res = await transactionStore.getSingleTransaction(parseInt(id))
  transaction.value = res.data
})

// const logRating = async (event: number) => {
//       rating.value = event;
//     }
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
      <CardPartnerProfile
        class="mt-14"
        v-if="
          transaction.status.name === 'finish' &&
          transaction.review.rate === null
        "
        :name="transaction.pengepul.name"
        :telp="transaction.pengepul.telp"
        :rating="transaction.pengepul.rating"
        :photo="transaction.pengepul.photo"
      />
      <div
        v-if="
          transaction.status.name === 'finish' &&
          transaction.review.rate !== null
        "
        class="mt-[30px] flex flex-col"
      >
        <h2
          v-if="
            transaction.status.name === 'finish' &&
            transaction.review.rate !== null
          "
          class="text-brg-primary-dark font-semibold mb-4"
        >
          Nilai Pengepul
        </h2>
        <div class="mx-auto">
          <NuxtRating
            :rating-value="transaction.review.rate"
            :read-only="false"
            class="w-[209px]"
            :rating-size="'50px'"
            :active-color="'#307FF5'"
          />
        </div>
        <label
          v-if="
            transaction.status.name === 'finish' &&
            transaction.review.rate !== null
          "
          class="text-brg-primary-dark font-semibold mb-4"
          >Ulasan</label
        >
        <ClientOnly>
          <textarea
            cols="10"
            rows="8"
            class="border-[1px] border-brg-light-gray w-full rounded-[20px] text-[11px] text-brg-primary-dark focus:outline-none py-3 px-4 font-medium"
            placeholder="isi ulasan anda"
            v-model="transaction.review.ulasan"
          >
          </textarea>
        </ClientOnly>
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
      <NuxtLink :to="`/user/transaction/${transaction.id}/review`">
        <ButtonLarge label="Selesaikan Transaksi" />
        <!-- @click="isModalOpen = true" -->
      </NuxtLink>
    </div>

    <div
      class="max-w-max mx-auto py-12"
      v-else-if="transaction.status.name === 'canceled'"
    >
      <ButtonLarge label="Buat Transaksi Lagi" />
    </div>
  </div>
  <div v-else="">lagi loading</div>

  <ModalDefault
    title="Selesaikan Transaksi"
    desc="apakah anda yakin ingin menyelesaikan transaksi"
    label-confirmation="Selesaikan"
    label-color="text-brg-primary"
    :is-show="isModalOpen"
    emit-function="finishTransaction"
    @closeModal="isModalOpen = false"
    @finishTransaction="handleFinishTransaction"
  />
</template>
