<script setup lang="ts">
const transactionStore = useTransactionStore()
const toastStore = useToastStore()
const addressStore = useAddressStore()
const route = useRoute()
const router = useRouter()

const { mainAddress } = storeToRefs(addressStore)

const addTransactionFlag = ref<boolean>(true)
const isMainAddressNotExist = ref()

const { transactionData, formError, transactionImage } =
  storeToRefs(transactionStore)

const getMainAddress = async () => {
  try {
    const res = await useNuxtApp().$axios.get("address/main")
    console.log("address", res.data)
    if (res.data.status === 200) {
      mainAddress.value = res.data
      transactionStore.transactionData.transaction.address = {
        id: res.data.data[0].id,
        label: res.data.data[0].label,
        owner_name: res.data.data[0].owner_name,
        address_name: res.data.data[0].address_name,
        owner_telp: res.data.data[0].owner_telp,
        detail: res.data.data[0].detail,
        latitude: res.data.data[0].latitude,
        longitude: res.data.data[0].longitude,
      }
    }
  } catch (error) {
    console.error("Error fetching main address:", error)
  }
}

function nextToConfirmation() {
  if (transactionData.value.transaction.id) {
    addTransactionFlag.value = false
  }

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
  middleware: ["auth", "role"],
})

onBeforeUnmount(() => {
  const currentRoute = route.path
  const nextRoute = router.currentRoute.value.path
  if (
    nextRoute !== "/user/profile/address" &&
    transactionData.value.transaction.id &&
    addTransactionFlag.value
  ) {
    transactionData.value = {
      transaction: {
        id: null,
        user_id: null,
        chats_id: null,
        address: {
          id: null,
          label: "",
          owner_name: "",
          address_name: "",
          owner_telp: "",
          detail: "",
          latitude: "",
          longitude: "",
        },
        status_id: null,
        note: "",
      },
      transaction_detail: [],
    }
    transactionImage.value = null
  }
})

onMounted(async () => {
  await getMainAddress()
  if (mainAddress.value.data.length === 0) {
    setTimeout(() => {
      isMainAddressNotExist.value = true
    }, 500)
  }
})
</script>

<template>
  <Toast />
  <Header title="Transaksi" />
  <Transition name="bounce">
    <div
      class="fixed w-full max-w-[450px] h-screen bg-white bg-opacity-10 flex justify-center items-center px-6"
      v-if="isMainAddressNotExist"
    >
      <div class="w-[80%] mb-32 text-brg-primary-dark text-center">
        <p>Atur atau tambahkan alamat utama terlebih dahulu</p>
      </div>
    </div>
  </Transition>

  <div class="px-6" v-if="!isMainAddressNotExist">
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

<style scoped>
.bounce-enter-active {
  animation: bounce-in 1.2s;
}
.bounce-leave-active {
  animation: bounce-in 1.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
