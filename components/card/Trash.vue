<script setup lang="ts">
const props = defineProps<{
  weight?: string | number
  category?: string
  dark?: boolean
  color?: string
}>()

interface ColorVariants {
  [key: string]: string
}

const ColorVariants: ColorVariants = {
  brgPrimary: "bg-brg-primary",
  brgSecondary: "bg-brg-secondary",
  brgPrimaryDark: "bg-brg-primary-dark",
  brgSecondaryDark: "bg-brg-secondary-dark",
  brgRed: "bg-brg-red",
  brgOrange: "bg-brg-orange",
  brgBrown: "bg-brg-brown",
  brgWhite: "bg-brg-white",
}

const colorClass = props.color ? ColorVariants[props.color] : undefined
</script>

<template>
  <div
    class="w-[206px] h-[252px] px-6 pb-7 rounded-[10px] overflow-hidden bg-[url('/assets/trash-card-bg.svg')] bg-right bg-no-repeat flex items-end"
    :class="colorClass"
  >
    <div :class="`${props.dark ? 'text-brg-primary-dark' : 'text-white'}`">
      <h3 class="font-semibold text-4xl mb-1">
        {{ props.weight }} <span class="text-base">Kg</span>
      </h3>
      <span class="text-xl font-medium">
        <h4>Sampah</h4>
        <h4>{{ props.category }}</h4>
      </span>
    </div>
  </div>
</template>
