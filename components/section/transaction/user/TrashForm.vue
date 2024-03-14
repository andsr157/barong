<script setup lang="ts">
import { type category, type subcategory } from "./category.type"

const category = [
  {
    value: 1,
    text: "plastik",
  },
  {
    value: 2,
    text: "kaca",
  },
  {
    value: 3,
    text: "alumunium",
  },
]

const subcategory = [
  {
    category_id: 1,
    value: 1,
    text: "botol",
  },
  {
    category_id: 1,
    value: 2,
    text: "palstik bening",
  },
  {
    category_id: 2,
    value: 1,
    text: "botol kaca",
  },
  {
    category_id: 3,
    value: 1,
    text: "perabot",
  },
  {
    category_id: 3,
    value: 2,
    text: "alumium berat",
  },
]

const optionSubCategory = computed((): subcategory[] => {
  if (!selectedCategory.value) return []
  return subcategory.filter(
    (subcat) => subcat.category_id === selectedCategory.value?.value
  )
})

const selectedCategory = ref<category>()
const selectedSubCategory = ref<category>()
</script>

<template>
  <div
    class="border-[1px] border-brg-light-gray rounded-[10px] p-[10px] flex flex-col gap-2"
  >
    <div>
      <InputDropdown
        label="Kategori sampah"
        label-class="!text-[10px] !font-medium"
        v-model="selectedCategory"
        :option="category"
      />
    </div>
    <div>
      <InputDropdown
        label="SubKategori sampah"
        label-class="!text-[10px] !font-medium"
        v-model="selectedSubCategory"
        :option="optionSubCategory"
      />
    </div>
  </div>
</template>
