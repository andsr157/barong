<script setup lang="ts">
defineProps<{
  label: string
  name: string
  telp: string
  address: string
  detail?: string
  noButton?: boolean
  labelButton?: string
  path?: string
  status?: boolean
  buttonTarget?: string
}>()
</script>

<template>
  <div
    class="bg-white rounded-[20px] border-[1px] border-black border-opacity-10 p-4 shadow-[2px_20px_30px_-10px_rgba(48,127,245,0.5)]"
  >
    <div class="flex justify-between text-brg-gray mb-2 items-center">
      <div class="flex gap-x-1">
        <Icon name="majesticons:home" size="20px" />
        <h3 class="text-sm font-semibold">{{ label }}</h3>
      </div>
      <h3 class="font-semibold text-xs">
        {{ status === true ? "Utama" : "" }}
      </h3>
    </div>
    <div class="text-xs flex flex-col gap-y-1">
      <p class="text-brg-primary-dark font-semibold">{{ name }}</p>
      <p class="text-brg-gray">{{ telp }}</p>
      <p class="text-brg-gray">
        {{ address }}
        {{ detail !== undefined && detail !== "" ? ` (${detail})` : "" }}
      </p>
    </div>
    <div class="w-full flex justify-end mt-3" v-if="!noButton">
      <NuxtLink :to="path" :target="buttonTarget">
        <ButtonSmall
          :label="labelButton || ''"
          button-class="!px-6 !font-medium"
        />
      </NuxtLink>
    </div>
  </div>
</template>
