<script setup lang="ts">
import { type category } from "../section/transaction/user/category.type"
interface Props {
  label?: string
  labelClass?: string
  modelValue?: category | null
  options?: category[]
}

const props = defineProps<Props>()

const dropDown = ref<HTMLElement | null>(null)
const emit = defineEmits()

const isOpen = ref(false)
const handleSelect = (value: any) => {
  selectedOption.value = value
  emit("update:modelValue", selectedOption.value)
  isOpen.value = false
}

const selectedOption = ref<category | null>()

const mappedSelectedOption = computed(() => {
  return selectedOption.value?.text || selectedOption.value || "Pilih Sampah"
})

const closeDropdown = (element: any) => {
  console.log(dropDown.value?.contains(element.target))
  if (!dropDown.value?.contains(element.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener("click", closeDropdown)
})

onBeforeUnmount(() => {
  window.removeEventListener("click", closeDropdown)
})

watch(
  () => props.modelValue,
  (newValue) => {
    selectedOption.value = newValue
  }
)
</script>

<template>
  <div ref="dropDown">
    <label class="mb-2 block" :class="labelClass">{{ label }}</label>
    <div
      class="w-full h-[38px] border-[1px] border-brg-light-gray rounded-[10px] items-center relative"
    >
      <div @click="isOpen = true">
        <p
          class="w-full absolute left-0 focus:outline-none ps-[10px] top-1/2 -translate-y-1/2 text-brg-primary-dark text-xs"
        >
          {{ mappedSelectedOption }}
        </p>
        <Icon
          name="mdi:menu-down"
          size="36px"
          class="text-brg-light-gray absolute right-0"
        />
      </div>
      <div
        v-if="isOpen"
        class="flex flex-col gap-y-4 absolute z-40 top-12 bg-white border-[1px] border-brg-light-gray border-opacity-40 rounded-lg p-3"
      >
        <div
          v-for="(option, index) in options"
          :key="index"
          @click="handleSelect(option)"
          class="text-xs text-brg-gray font-medium w-56"
        >
          {{ option.text }}
        </div>
      </div>
    </div>
  </div>
</template>
