<script setup lang="ts">
import { createClient } from "@supabase/supabase-js"
import { v4 as uuidv4 } from "uuid"
import { estimateTotal } from "~/composables/helpers"
import { useTransactionStore } from "~/stores/Transaction.store"

const transactionStore = useTransactionStore()
const {
  transactionData: trash,
  transactionImage: file,
  isLoading,
} = storeToRefs(transactionStore)

const { data: user } = <any>useAuth()

definePageMeta({
  layout: "blank",
})

const router = useRouter()
const address = computed(() => {
  return trash.value.transaction.address
})
const note = ref("ini catatan")
const transactionData = trash.value.transaction_detail

const estimate = computed(() => {
  return estimateTotal(transactionData)
})

const config = useRuntimeConfig().app

const supabase = createClient(config.supabaseUrl, config.supabaseKey)

const uploadImage = async () => {
  try {
    if (!file.value.image) {
      console.error("No file selected")
      return
    }

    const { data, error } = await supabase.storage
      .from("images")
      .upload(`${uuidv4()}.jpg`, file.value.image)

    console.log(data)
    if (error) {
      console.error("Error uploading image:", error.message)
      return
    }
    console.log(data.path)
    const { data: publicUrlData, error: publicUrlError }: any =
      await supabase.storage.from("images").getPublicUrl(data.path)

    if (publicUrlError) {
      console.error("Error getting public URL:", publicUrlError.message)
      return
    }
    console.log(publicUrlData.publicUrl)
    file.value = null
    return publicUrlData.publicUrl
  } catch (error: any) {
    console.error("Error uploading image:", error.message)
  }
}

const onSubmit = async () => {
  try {
    isLoading.value = true
    const imageUrl = await uploadImage().catch((error) => {
      console.error("Error in uploadImage:", error)
    })

    const transaction = {
      ...trash.value.transaction,
      user_id: user.value.user.id,
      status_id: 1,
      image: imageUrl,
    }

    const transaction_detail = trash.value.transaction_detail.map(
      (data: any) => {
        const detail = {
          trash_id: data.trash_id,
          weight: data.weight,
          ...(data.id ? { id: data.id } : {}),
        }
        return detail
      }
    )

    console.log("detail", transaction_detail)

    const payload = {
      transaction: transaction,
      transaction_detail: transaction_detail,
    }

    console.log(payload)

    let res
    if (trash.value.transaction.id) {
      res = await transactionStore.updateTransaction(payload).catch((error) => {
        console.error("Error in updateTransaction:", error)
      })
    } else {
      res = await transactionStore.addTransaction(payload).catch((error) => {
        console.error("Error in addTransaction:", error)
      })
    }

    isLoading.value = false

    localStorage.removeItem("transaction")
    useRouter().push("/user/transaction/success")
  } catch (error) {
    isLoading.value = false
    console.error(error)
  }
}
</script>

<template>
  <Header title="Transaksi" />
  <div class="px-6 mt-[30px]">
    <section class="">
      <h2 class="text-brg-primary-dark font-semibold mb-4">
        Alamat Pengambilan
      </h2>
      <CardAddress
        v-if="address !== null"
        :label="address.label"
        :name="address.owner_name"
        :telp="address.owner_telp"
        :address="address.address_name"
        :detail="address.detail"
        label-button="Ubah Alamat"
        no-button
      />
    </section>

    <section class="mt-8">
      <h2 class="text-brg-primary-dark font-semibold mb-4">Data penjualan</h2>
      <div class="flex flex-col gap-y-2 mb-9">
        <CardTrashEstimate
          v-for="(data, index) in trash.transaction_detail"
          :key="index"
          :category="data.category"
          :subcategory="data.subcategory"
          :weight="data.weight"
          :min-price="data.minPrice"
          :max-price="data.maxPrice"
        />
      </div>

      <CardTrashTotal :estimate-total="estimate" />
    </section>

    <section class="mt-6">
      <h2 class="text-brg-primary-dark font-semibold mb-4">catatan</h2>
      <ClientOnly>
        <textarea
          cols="10"
          rows="8"
          class="border-[1px] border-brg-light-gray w-full rounded-[20px] text-[11px] text-brg-primary-dark focus:outline-none py-3 px-4 font-medium"
          placeholder="isi catatan"
          v-model="trash.transaction.note"
        >
        </textarea>
      </ClientOnly>
    </section>

    <div class="max-w-max mx-auto py-12">
      <ButtonLarge label="Konfirmasi" @click="onSubmit" :disabled="isLoading" />
    </div>
  </div>
</template>
