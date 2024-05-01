<script setup lang="ts">
import { useTransactionStore } from "~/stores/Transaction.store"
import { useToastStore } from "~/stores/Toast.store"
const transactionStore = useTransactionStore()
const toastStore = useToastStore()

const { transactionData, formError, transactionImage } =
  storeToRefs(transactionStore)

function nextToConfirmation() {
  if (transactionImage.value === null) {
    toastStore.error({
      text: "Gambar tidak boleh kosong",
    })
    return
  }
  if (transactionData.value.transaction_detail.length === 0) {
    toastStore.error({
      text: "Belum ada data sampah",
    })
    return
  }
  useRouter().push("/user/transaction/confirmation")
}
definePageMeta({
  layout: "blank",
})

// onBeforeUnmount(() => {
//   if (transactionData.value.transaction.id) {
//     transactionData.value = {
//       transaction: {
//         id: 0,
//         user_id: 0,
//         chats_id: 0,
//         address: {
//           id: 0,
//           label: "",
//           owner_name: "",
//           address_name: "",
//           owner_telp: "",
//           detail: "",
//           latitude: "",
//           longitude: "",
//         },
//         status_id: 0,
//         note: "",
//       },
//       transaction_detail: [],
//     }
//     transactionImage.value = null
//   }
// })
</script>

<template>
  {{ transactionData.transaction }}
  <Toast />
  <Header title="Transaksi" />
  <div class="px-6">
    <section>
      <div class="text-brg-primary-dark mt-[30px] mb-6">
        <h2 class="font-semibold mb-2">Keranjang Sampah</h2>
        <p class="font-medium text-[11px] text-opacity-70">
          Input sampah, pilih kategori dan masukkan perkiraan berat sampahmu
        </p>
      </div>
    </section>

    <SectionTransactionUserTrashImage />

    <SectionTransactionUserTrashData />

    <SectionTransactionUserTrashAddress />

    <SectionTransactionUserTrashNote />
    <div class="flex">
      <ButtonLarge
        label="Selanjutnya"
        class="my-12 mx-auto"
        @click="nextToConfirmation"
      />
    </div>
  </div>
</template>
