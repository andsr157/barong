<script setup lang="ts">
const addressStore = useAddressStore()
const transactionStore = useTransactionStore()
const { mainAddress } = storeToRefs(addressStore)
</script>

<template>
  <section class="mb-12">
    <CardAddress
      v-if="mainAddress.data != null"
      :label="mainAddress.data[0].label"
      :name="mainAddress.data[0].owner_name"
      :telp="mainAddress.data[0].owner_telp"
      :address="mainAddress.data[0].address_name"
      :detail="mainAddress.data[0].detail"
      label-button="Ubah Alamat"
      path="/user/profile/address"
    />
  </section>
</template>
