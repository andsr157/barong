<script setup lang="ts">
import { type TrashCategory } from "~/types/trash.type"
interface Props {
  label?: string
  labelClass?: string
  modelValue?: TrashCategory | null
  options?: TrashCategory[]
  disable?: boolean
  isLoading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disable: false,
})

const dropDown = ref<HTMLElement | null>(null)
const emit = defineEmits()

const isOpen = ref(false)
const handleSelect = (value: any) => {
  selectedOption.value = value
  emit("update:modelValue", selectedOption.value)
  isOpen.value = false
}

const selectedOption = ref<TrashCategory | null>()

const mappedSelectedOption = computed(() => {
  return selectedOption.value?.name || selectedOption.value || "Pilih Sampah"
})

const closeDropdown = (element: any) => {
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
        v-if="isOpen && isLoading"
        class="absolute z-40 top-12 bg-white border-[1px] border-brg-light-gray border-opacity-40 rounded-lg p-3"
      >
        <p class="text-xs text-brg-gray font-medium">loading...</p>
      </div>
      <div
        v-else-if="isOpen && !disable"
        class="flex flex-col absolute z-40 top-12 bg-white border-[1px] border-brg-light-gray border-opacity-40 rounded-lg"
      >
        <div
          v-for="(option, index) in options"
          :key="index"
          @click="handleSelect(option)"
          class="text-xs text-brg-gray font-medium w-56 p-3 hover:bg-brg-white"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
  </div>
</template>
