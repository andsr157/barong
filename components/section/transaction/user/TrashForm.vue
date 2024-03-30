<script setup lang="ts">
import { useTrashStore } from "~/stores/Trash.store"
import { type TrashCategory } from "~/types/trash.type"
const trashStore = useTrashStore()
const { category, subcategory } = storeToRefs(trashStore)

const emit = defineEmits()

const optionSubCategory = computed((): TrashCategory[] => {
  if (!selectedCategory.value) return []
  return subcategory.value.filter(
    (subcat) => subcat.id === selectedCategory.value?.id
  )
})

const selectedCategory = ref<TrashCategory>()
const selectedSubCategory = ref<TrashCategory | null>()

watchEffect(() => {
  console.log(selectedCategory.value)
  console.log(selectedSubCategory.value)
})

watch(selectedCategory, () => {
  selectedSubCategory.value = null
})

onMounted(() => {
  trashStore.getTrashCategory()
})
</script>

<template>
  <div
    class="border-[1px] border-brg-light-gray rounded-[10px] p-[10px] flex flex-col gap-2"
  >
    <div>
      <InputDropdown
        label="Kategori sampah"
        label-class="!text-[10px] !font-medium text-brg-primary-dark"
        v-model="selectedCategory"
        :options="category"
      />
    </div>
    <div>
      <InputDropdown
        label="SubKategori sampah"
        label-class="!text-[10px] !font-medium text-brg-primary-dark"
        v-model="selectedSubCategory"
        :options="optionSubCategory"
      />
    </div>
    <div>
      <Input
        label="Berat Sampah"
        label-class="text-[10px] text-brg-primary-dark !font-medium"
        placeholder="0.0"
        input-class="text-brg-primary-dark"
      />
    </div>

    <div class="mt-3">
      <ButtonDefault
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
