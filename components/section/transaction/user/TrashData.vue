<script setup lang="ts">
import { useTransactionStore } from "~/stores/Transaction.store"

const transactionStore = useTransactionStore()

const { transactionData } = storeToRefs(transactionStore)
const trashFormVisible = ref(false)
</script>

<template>
  <section class="my-6">
    <h2 class="text-brg-primary-dark font-semibold">Data Sampah</h2>
    <div class="my-2">
      <div
        v-if="transactionData.transaction_detail.length > 0"
        class="flex gap-x-1 mb-2 h-[38px]"
        v-for="trash in transactionData.transaction_detail"
      >
        <div
          class="w-52 h-[38px] border-[1px] border-brg-light-gray rounded-[10px] px-3 py-[10px] shrink-0"
        >
          <p class="text-xs text-brg-primary-dark font-medium">
            {{ trash.category }} | {{ trash.subcategory }}
          </p>
        </div>
        <Input
          wrapper-class="!px-1"
          type="number"
          input-class="text-brg-primary !text-xs !font-semibold text-end pe-1"
          v-model="trash.weight"
        >
          <template #suffix>
            <span class="text-brg-primary text-[11px] font-medium pt-1"
              >Kg</span
            >
          </template>
        </Input>
        <button
          v-if="trash.id"
          @click="transactionStore.deleteTransactionTrash(trash.id)"
          class="bg-transparent px-2 py-[1px] border-[1px] border-brg-red rounded-[10px] max-h-[38px]"
        >
          <Icon name="mdi:delete" class="text-brg-red" size="21px" />
        </button>

        <button
          v-else
          @click="transactionStore.removeTrash(trash.trash_id)"
          class="bg-transparent px-2 py-[1px] border-[1px] border-brg-red rounded-[10px] max-h-[38px]"
        >
          <Icon name="mdi:delete" class="text-purple-400" size="21px" />
        </button>
      </div>

      <div class="w-full" v-else>
        <div
          class="w-full h-[38px] border-[1px] border-brg-light-gray rounded-[10px] px-3 py-[10px] shrink-0"
        >
          <p class="text-xs text-brg-primary-dark font-medium text-opacity-80">
            Belum ada sampah yang ditambahkan
          </p>
        </div>
      </div>

      <div
        class="flex gap-x-2 justify-end text-xs text-brg-primary-dark font-medium mt-3"
      >
        <p>Total Sampah</p>
        <p class="text-brg-primary text-sm">
          {{ transactionStore.trashTotal }}
        </p>
        <p>Kg</p>
      </div>
    </div>

    <div class="max-w-max mx-auto">
      <ButtonLarge label="Tambah Sampah" @click="trashFormVisible = true" />
    </div>

    <SectionTransactionUserTrashForm
      class="mt-3"
      v-if="trashFormVisible"
      @closeform="trashFormVisible = false"
    />
  </section>
</template>
