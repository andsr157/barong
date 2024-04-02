<script setup lang="ts">
import { useTransactionStore } from "~/stores/Transaction.store"

const transactionStore = useTransactionStore()
const { transactionData: data } = storeToRefs(transactionStore)

const address = ref<any>(null)

const getMainAddress = async () => {
  try {
    const res = await useNuxtApp().$axios.get("address/main")
    console.log("address", res.data)
    if (res.data.status === 200) {
      address.value = res.data.data[0]
      console.log(address.value)
      transactionStore.transactionData.transaction.address_id =
        res.data.data[0].id
    }
  } catch (error) {
    console.error("Error fetching main address:", error)
  }
}

onMounted(async () => {
  await getMainAddress()
})
</script>

<template>
  <section class="mb-12">
    <CardAddress
      v-if="address != null"
      :label="address.label"
      :name="address.owner_name"
      :telp="address.owner_telp"
      :address="address.address_name"
      :detail="address.detail"
      label-button="Ubah Alamat"
      path="/user/profile/address"
    />
  </section>
</template>
