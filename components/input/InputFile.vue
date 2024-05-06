<script setup lang="ts">
import { string } from "yup"

interface Props {
  label?: string
  labelClass?: string
  wrapperClass?: string
  inputClass?: string
  modelValue?: string | number | null | any
  placeholder?:string
  prefixIcon?: string
  prefixIconSize?: string
  prefixIconColor?: string
  errorMessage?: string
}

withDefaults(defineProps<Props>(), {
  labelClass: "font-semibold text-brg-primary-dark",
  prefixIconSize: "20px",
  placeholder:'masukan file anda'
})

const emit = defineEmits()
const updateInput = (event: Event) => {
    const fileInput = event.target as HTMLInputElement;
  const file = <any>{
    image: fileInput?.files?.[0], // Menggunakan optional chaining
    imageUrl: ""
  }
  const reader = new FileReader()
   reader.addEventListener("load", () => {
    file.imageUrl = reader.result
    emit("update:modelValue", file)
  })
  if (file.image) {
    reader.readAsDataURL(file.image)
  }
}
</script>

<template>
  <label class="mb-2 block" :class="labelClass">{{ label }}</label>
  <div
    class="w-full h-[38px] border-[1px] border-brg-light-gray px-[14px] rounded-[10px] flex justify-between items-center relative "
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
      type="file"
      @change="updateInput"
      class="w-full h-full focus:outline-none focus:text-xs text-xs custom-input-file opacity-0"
      :class="inputClass"
    ></input>
    <span v-if="placeholder " class="absolute text-[11px] text-brg-gray top-1/2 -translate-y-1/2 left-12 -z-10">{{placeholder}}</span>
   
    <div>
      <p class="text-xs"></p>
    </div>
  </div>
  <p v-if="errorMessage" class="text-brg-red text-[10px] px-5 mt-[5px]">
    {{ errorMessage }}
  </p>
</template>
