<script setup lang="ts">
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

const props = withDefaults(defineProps<Props>(), {
  labelClass: "font-semibold text-brg-primary-dark",
  prefixIconSize: "20px",
  placeholder:'masukan file anda'
})

let heic2any: any;

const inputFileRef = ref<HTMLInputElement | null>(null);

const emit = defineEmits()
const updateInput = async (event: Event) => {
  const fileInput = event.target as HTMLInputElement;
  const file = <any>{
    image: fileInput?.files?.[0],
    imageUrl: ''
  };

  if (file.image && file.image.name.includes('.HEIC')) {
    emit('loadingFile', true)
    const blobUrl = URL.createObjectURL(file.image);
    const blobRes = await fetch(blobUrl);
    const blob = await blobRes.blob();

    const conversionResult = (await heic2any({ blob, toType: 'image/jpeg' })) as Blob;
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      file.imageUrl = reader.result;
      emit('update:modelValue', { image: conversionResult, imageUrl: reader.result });
    });
    emit('loadingFile', false)
    reader.readAsDataURL(conversionResult);
  } else {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      file.imageUrl = reader.result;
      emit('update:modelValue', file);
    });
    if (file.image) {
      reader.readAsDataURL(file.image);
    }
  }
};

const loadHeic2any = async () => {
  if (process.client) {
    const module = await import('heic2any');
    heic2any = module.default;
  }
};

watch(() => props.modelValue, (newValue) => {
  if (newValue === null && inputFileRef.value) {
    inputFileRef.value.value = '';
  }
});

onMounted(loadHeic2any);
</script>

<template>
  <label class="mb-2 block" :class="props.labelClass">{{ props.label }}</label>
  <div
    class="w-full h-[38px] border-[1px] border-brg-light-gray px-[14px] rounded-[10px] flex justify-between items-center relative "
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
    ref="inputFileRef"
      type="file"
      @change="updateInput"
      class="w-full h-full focus:outline-none focus:text-xs text-xs custom-input-file opacity-0"
      :class="props.inputClass"
    ></input>
    <span v-if="props.placeholder " class="absolute text-[11px] text-brg-gray top-1/2 -translate-y-1/2 left-12 -z-10">{{placeholder}}</span>
   
    <div>
      <p class="text-xs"></p>
    </div>
  </div>
  <p v-if="props.errorMessage" class="text-brg-red text-[10px] px-5 mt-[5px]">
    {{ props.errorMessage }}
  </p>
</template>
