<script setup lang="ts">
interface Props {
  label?: string
  labelClass?: string
  wrapperClass?: string
  inputClass?: string
  type?: string
  modelValue?: string | number | null
  placeholder?: string
  prefixIcon?: string
  prefixIconSize?: string
  prefixIconColor?: string
  suffixIcon?: string
  suffixIconSize?: string
  suffixIconColor?: string
  errorMessage?: string
}

withDefaults(defineProps<Props>(), {
  labelClass: "font-semibold text-brg-primary-dark",
  type: "text",
  prefixIconSize: "20px",
  suffixIconSize: "20px",
})

const emit = defineEmits()
const updateInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit("update:modelValue", target.value)
}
</script>

<template>
  <label class="mb-2 block" :class="labelClass">{{ label }}</label>
  <div
    class="w-full h-[38px] border-[1px] border-brg-light-gray px-[14px] rounded-[10px] flex justify-between items-center"
    :class="wrapperClass"
  >
    <Icon
      v-if="prefixIcon"
      :name="prefixIcon"
      :size="prefixIconSize"
      :class="prefixIconColor"
    />
    <slot name="prefix" />
    <input
      :type="type"
      :value="modelValue"
      @input="updateInput"
      class="w-full h-full focus:outline-none focus:text-xs text-xs"
      :class="inputClass"
      :placeholder="placeholder"
    />
    <Icon
      v-if="suffixIcon"
      :name="suffixIcon"
      :size="suffixIconSize"
      :class="suffixIconColor"
    />
    <slot name="suffix" />
  </div>
  <p v-if="errorMessage" class="text-brg-red text-[10px] px-5 mt-[5px]">
    {{ errorMessage }}
  </p>
</template>
