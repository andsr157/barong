<script setup lang="ts">
import { TRANSACTION } from "~/constants/trash.constants"

const trashFormVisible = ref(false)
</script>

<template>
  <section class="my-6">
    <h2 class="text-brg-primary-dark font-semibold">Data Sampah</h2>
    <div class="my-2">
      <div
        class="flex gap-x-1 mb-2 h-[38px]"
        v-for="trash in TRANSACTION[0].detailSampah"
      >
        <div
          class="w-48 h-[38px] border-[1px] border-brg-light-gray rounded-[10px] px-3 py-[10px] shrink-0"
        >
          <p class="text-xs text-brg-primary-dark font-medium">
            {{ trash.category }} | {{ trash.subcategory }}
          </p>
        </div>
        <Input
          wrapper-class="!px-1"
          input-class="text-brg-primary !text-sm !font-semibold text-end pe-1"
        >
          <template #suffix>
            <span class="text-brg-primary text-[11px] font-medium pt-1"
              >Kg</span
            >
          </template>
        </Input>
        <button
          class="bg-transparent px-3 py-[1px] border-[1px] border-brg-red rounded-[10px] max-h-[38px]"
        >
          <Icon name="mdi:delete" class="text-brg-red" size="21px" />
        </button>
      </div>

      <div
        class="flex gap-x-2 justify-end text-xs text-brg-primary-dark font-medium mt-3"
      >
        <p>Total Sampah</p>
        <p class="text-brg-primary text-sm">10.0</p>
        <p>Kg</p>
      </div>
    </div>

    <div class="max-w-max mx-auto">

      <ButtonLarge
        label="Tambah Sampah"
        @click="trashFormVisible = true"
      />
    </div>

    <SectionTransactionUserTrashForm
      class="mt-3"
      v-if="trashFormVisible"
      @closeform="trashFormVisible = false"
    />
  </section>
</template>
