<script setup lang="ts">
import { type category } from "../section/transaction/user/category.type"
interface Props {
  label?: string
  labelClass?: string
  modelValue?: category
  option?: category[]
}

withDefaults(defineProps<Props>(), {
  labelClass: "font-semibold text-brg-primary-dark",
})

const emit = defineEmits()
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit("update:modelValue", target.value)
}

const isOpen = ref(false)
const handleSelect = (value: any) => {
  emit("update:modelValue", value)
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div>
    <label class="mb-2 block" :class="labelClass">{{ label }}</label>
    <div
      class="w-full h-[38px] border-[1px] border-brg-light-gray rounded-[10px] items-center relative"
    >
      <div @click="isOpen = !isOpen">
        <input
          type="text"
          class="w-full absolute left-0 focus:outline-none ps-[10px] top-1/2 -translate-y-1/2 text-brg-primary-dark text-xs"
          @input="handleChange"
          :value="modelValue?.text"
          readonly
        />
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
          v-for="(data, index) in option"
          :key="index"
          @click="handleSelect(data)"
          class="text-xs text-brg-gray font-medium w-56"
        >
          {{ data.text }}
        </div>
      </div>
    </div>
  </div>
</template>
