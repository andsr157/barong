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
  readonly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  labelClass: "font-semibold text-brg-primary-dark",
  type: "text",
  prefixIconSize: "20px",
  suffixIconSize: "20px",
  readonly: false,
})

const emit = defineEmits()
const updateInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  let inputvalue = ref<any>(target.value)

  if (props.type === "number") {
    if (inputvalue.value === "" || parseFloat(inputvalue.value) < 0) {
      console.log(inputvalue.value === "")
      inputvalue.value = 1
    }
    emit("update:modelValue", parseFloat(inputvalue.value))
  } else {
    emit("update:modelValue", inputvalue.value)
  }
}
</script>

<template>
  <label class="mb-2 block text-brg-primary-dark" :class="props.labelClass">{{
    props.label
  }}</label>
  <div
    class="w-full h-[38px] border-[1px] border-brg-light-gray px-[14px] rounded-[10px] flex justify-between items-center"
    :class="props.wrapperClass"
  >
    <Icon
      v-if="props.prefixIcon"
      :name="props.prefixIcon"
      :size="props.prefixIconSize"
      :class="props.prefixIconColor"
    />
    <slot name="prefix" />
    <input
      :step="props.type === 'number' ? 'any' : undefined"
      :type="props.type"
      :value="props.modelValue"
      @input="updateInput"
      class="w-full h-full focus:outline-none focus:text-xs text-xs"
      :class="props.inputClass"
      :placeholder="props.placeholder"
      :readonly="props.readonly"
      min="1"
    />

    <Icon
      v-if="props.suffixIcon"
      :name="props.suffixIcon"
      :size="props.suffixIconSize"
      :class="props.suffixIconColor"
    />
    <slot name="suffix" />
  </div>
  <p v-if="errorMessage" class="text-brg-red text-[10px] px-5 mt-[5px]">
    {{ errorMessage }}
  </p>
</template>
