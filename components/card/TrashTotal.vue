<script setup lang="ts">
interface Props {
  estimateTotal?: number[]
  total?: number
  serivcePrice?: number
  finalTotal?: number
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: "default",
})

const estimateService = computed((): number[] => {
  if (props.estimateTotal && props.estimateTotal.length > 0) {
    const min = (props.estimateTotal[0] * 10) / 100
    const max = (props.estimateTotal[1] * 10) / 100
    return [min, max]
  }
  return [0, 0]
})

const estimateFinalTotal = computed(() => {
  if (
    estimateService.value.length > 0 &&
    props.estimateTotal &&
    props.estimateTotal.length > 0
  ) {
    const min = props.estimateTotal[0] - estimateService.value[0]
    const max = props.estimateTotal[1] - estimateService.value[1]

    return [min, max]
  }
  return [0, 0]
})
</script>

<template>
  <div
    class="px-3 py-4 flex flex-col gap-y-3 text-white bg-brg-primary rounded-2xl"
  >
    <div class="flex justify-between" v-if="type === 'default'">
      <span class="text-xs">Estimasi Total</span>
      <p class="text-[13px]">
        <span class="font-light">Rp</span>
        <span class="font-semibold">{{
          estimateTotal ? estimateTotal[0] : ""
        }}</span>
        <span class="font-light"> s.d </span>
        <span class="font-light">Rp</span>
        <span class="font-semibold">{{
          estimateTotal ? estimateTotal[1] : ""
        }}</span>
      </p>
    </div>

    <div class="flex justify-between" v-if="type === 'finish'">
      <span class="text-xs">Total</span>
      <p class="text-[13px]">
        <span class="font-light">Rp</span>
        <span class="font-semibold">{{ total }}</span>
      </p>
    </div>

    <div class="flex justify-between" v-if="type === 'default'">
      <span class="text-xs">Biaya Layanan</span>
      <p class="text-[13px]">
        <span class="font-light">Rp</span>
        <span class="font-semibold">{{ estimateService[0] }}</span>
        <span class="font-light"> s.d </span>
        <span class="font-light">Rp</span>
        <span class="font-semibold">{{ estimateService[1] }}</span>
      </p>
    </div>

    <div class="flex justify-between" v-if="type === 'finish'">
      <span class="text-xs">Biaya layanan</span>
      <p class="text-[13px]">
        <span class="font-light">Rp</span>
        <span class="font-semibold">{{ serivcePrice }}</span>
      </p>
    </div>

    <div class="flex justify-between" v-if="type === 'default'">
      <span class="text-xs">Estimasi Pendapatan</span>
      <p class="text-[13px]">
        <span class="font-light">Rp</span>
        <span class="font-semibold">{{
          estimateFinalTotal ? estimateFinalTotal[0] : ""
        }}</span>
        <span class="font-light"> s.d </span>
        <span class="font-light">Rp</span>
        <span class="font-semibold">{{
          estimateFinalTotal ? estimateFinalTotal[1] : ""
        }}</span>
      </p>
    </div>

    <div class="flex justify-between" v-if="type === 'finish'">
      <span class="text-xs">Pendapatan</span>
      <p class="text-[13px]">
        <span class="font-light">Rp</span>
        <span class="font-semibold">{{ finalTotal }}</span>
      </p>
    </div>
  </div>
</template>
