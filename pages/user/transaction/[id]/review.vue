<script setup lang="ts">
import { TRANSACTION } from "~/constants/trash.constants";

definePageMeta({
  layout: "blank",
});

const route = useRoute();
const router = useRouter();
const transaction = ref<any>();
const isModalOpen = ref(false);
const rating = ref();

const handleFinishTransaction = () => {
  router.push(`/user/transaction/success`);
};
onMounted(() => {
  let id: string;
  if (Array.isArray(route.params.id)) {
    id = route.params.id[0];
  } else {
    id = route.params.id;
  }
  transaction.value = TRANSACTION.filter((data) => {
    return data.id === parseInt(id);
  })[0];
});

const logRating = async (event: number) => {
  rating.value = event;
};
</script>
<template>
  <Header title="Penilaian" />
  <div class="flex gap-2 px-6 mt-5">
    <NuxtImg :src="transaction.pengepul.photo" width="34" height="34" />
    <div class="flex flex-col">
      <h1 class="font-medium text-[14px]">{{transaction.pengepul.name}}</h1>
      <p class="text-[10px]">{{transaction.pengepul.telp}}</p>
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
            :rating-value="0"
            :read-only="false"
            class="w-[209px]"
            :rating-size="'50px'"
            :active-color="'#307FF5'"
            @rating-selected="logRating"
          />
        </div>
      </div>
      <label class="text-brg-primary-dark font-semibold mb-4"
        >Beri Ulasan Pengepul</label
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
  </div>
  <div class="max-w-max mx-auto py-11">
    <ButtonLarge label="Selesaikan Transaksi" @click="isModalOpen = true" />
  </div>

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
