<script setup lang="ts">
import { useField } from "vee-validate"
interface Props {
  name?: string
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
  readonly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  labelClass: "font-semibold text-brg-primary-dark",
  type: "text",
  prefixIconSize: "20px",
  suffixIconSize: "20px",
})
const fieldName = ref<string | undefined>(props.name)

const { value, errorMessage } = useField(fieldName.value ?? "", undefined, {
  syncVModel: true,
})
</script>

<template>
  <label class="mb-2 block text-brg-primary-dark" :class="props.labelClass">{{
    props.label
  }}</label>
  <div
    class="w-full h-[38px] border-[1px] border-brg-light-gray px-[14px] rounded-[10px] flex justify-between items-center"
    :class="`${props.readonly ? 'bg-slate-200' : 'bg-white'} ${
      props.wrapperClass
    }`"
  >
    <Icon
      v-if="props.prefixIcon"
      :name="props.prefixIcon"
      :size="props.prefixIconSize"
      :class="props.prefixIconColor"
    />
    <slot name="prefix" />
    <!-- <input
      :step="props.type === 'number' ? 'any' : undefined"
      :type="props.type"
      :value="props.modelValue"
      @input="updateInput"
      class="w-full h-full focus:outline-none focus:text-xs text-xs"
      :class="props.inputClass"
      :placeholder="props.placeholder"
    /> -->
    <input
      :step="props.type === 'number' ? 'any' : undefined"
      :type="props.type"
      v-model="value"
      class="w-full h-full focus:outline-none focus:text-xs text-xs bg-transparent"
      :class="props.inputClass"
      :placeholder="props.placeholder"
      :readonly="props.readonly"
    />
    <Icon
      v-if="props.suffixIcon"
      :name="props.suffixIcon"
      :size="props.suffixIconSize"
      :class="props.suffixIconColor"
    />
    <slot name="suffix" />
  </div>
  <p v-if="errorMessage" class="text-brg-red text-[10px] px-1 mt-[5px]">
    {{ errorMessage }}
  </p>
</template>
