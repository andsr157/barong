<script setup lang="ts">
import { useToastStore } from "~/stores/Toast.store"
import { useTrashStore } from "~/stores/Trash.store"
import { useTransactionStore } from "~/stores/Transaction.store"
import { type TrashCategory, type TrashSubCategory } from "~/types/trash.type"

const trashStore = useTrashStore()
const transactionStore = useTransactionStore()
const toastStore = useToastStore()

const { category, subcategory } = storeToRefs(trashStore)

const emit = defineEmits()

const optionSubCategory = computed((): TrashCategory[] => {
  if (!selectedCategory.value) return []
  return subcategory.value.filter(
    (subcat) => subcat.category_id === selectedCategory.value?.id
  )
})

const selectedCategory = ref<TrashCategory | null>()
const selectedSubCategory = ref<TrashSubCategory | null>(null)
const selectedUnit = ref<string>("pcs")
const trashWeight = ref(0)

watch(selectedCategory, () => {
  if (selectedSubCategory.value !== null) {
    selectedSubCategory.value = null
  }
})

watch(selectedSubCategory, () => {
  const { trashUnit } = subcategory.value.filter(
    (item: any) => item.id === selectedSubCategory?.value?.id
  )[0] as any
  selectedUnit.value = trashUnit.name
})

const trashForm = computed(() => {
  return {
    trash_id: selectedSubCategory.value?.id || "",
    category: selectedCategory.value?.name || "",
    subcategory: selectedSubCategory.value?.name || "",
    minPrice: selectedSubCategory.value?.minPrice || 0,
    maxPrice: selectedSubCategory.value?.maxPrice || 0,
    trashUnit: selectedUnit.value,
    finalPrice: 0,
    weight: trashWeight.value,
  }
})

function resetTrashForm() {
  selectedCategory.value = null
  selectedSubCategory.value = null
  selectedUnit.value = "kg"
  trashWeight.value = 1
}

function addTrash() {
  if (trashForm.value.category === "" || trashForm.value.subcategory === "") {
    toastStore.error({
      text: "Kategori dan Subkategori tidak boleh kosong",
    })
    return
  }
  if (trashForm.value.weight <= 0) {
    toastStore.error({
      text: "Berat sampah tidak boleh nol",
    })
    return
  }
  transactionStore.addTrash(trashForm.value)
  resetTrashForm()
  emit("closeform")
}

onMounted(() => {
  trashStore.getTrashCategory()
})
</script>

<template>
  <Toast />
  <div
    class="border-[1px] border-brg-light-gray rounded-[10px] p-[10px] flex flex-col gap-y-3"
  >
    <div>
      <InputDropdown
        label="Kategori sampah"
        label-class="!text-[13px] !font-medium text-brg-primary-dark"
        v-model="selectedCategory"
        :options="category"
        :is-loading="trashStore.loading"
      />
    </div>
    <div>
      <InputDropdown
        label="SubKategori sampah"
        label-class="!text-[13px] !font-medium text-brg-primary-dark"
        v-model="selectedSubCategory"
        :options="optionSubCategory"
        :disable="optionSubCategory?.length > 0 ? false : true"
      />
    </div>
    <div>
      <Input
        label="Berat atau Jumlah Sampah"
        label-class="!text-[13px] text-brg-primary-dark !font-medium"
        placeholder="0.0"
        wrapper-class="!max-w-max !text-brg-dark-gray py-5 "
        input-class="!w-[50px] !text-base !bg-transparent !font-medium py-5 "
        type="number"
        v-model="trashWeight"
      >
        <template #suffix>
          <div class="!font-medium !text-sm">{{ selectedUnit }}</div>
        </template>
      </Input>
    </div>

    <div class="mt-3">
      <ButtonDefault
        @click="addTrash"
        label="Simpan"
        color="brg-primary"
        button-class="!rounded-[10px] mb-2"
      />
      <ButtonDefault
        label="Batal"
        color="brg-primary"
        button-class="!rounded-[10px] "
        outline
        @click="emit('closeform')"
      />
    </div>
  </div>
</template>
