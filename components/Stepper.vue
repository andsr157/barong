<script setup lang="ts">
interface Step {
  icon: string
  name: string
  status: string
  label: string
}

const props = defineProps<{
  status: {
    label: string
    name: string
    status: string
  }
}>()

const steps = ref<Step[]>([
  {
    icon: "tabler:user-search",
    name: "searching",
    status: "default",
    label: "mencari pengepul",
  },
  {
    icon: "ri:takeaway-fill",
    name: "taking",
    status: "default",
    label: "diambil",
  },
  {
    icon: "fa6-solid:handshake-simple",
    name: "finish",
    status: "default",
    label: "selesai",
  },
])

const stepLineClass = [
  "absolute right-1/2 -translate-x-[15%]",
  "absolute left-1/2 translate-x-[15%]",
]

watchEffect(() => {
  const currentStepIndex = steps.value.findIndex(
    (step) => step.name === props.status.name
  )
  if (currentStepIndex !== -1) {
    steps.value[currentStepIndex].status = props.status.status

    for (let i = 0; i < currentStepIndex; i++) {
      steps.value[i].status = "success"
    }

    for (let i = currentStepIndex + 1; i < steps.value.length; i++) {
      steps.value[i].status = "default"
    }
  }
})
</script>

<template>
  <div class="h-20">
    <ol class="flex justify-between items-start relative w-full">
      <li v-for="(step, index) in steps" :key="index">
        <div class="flex items-center">
          <div class="px-2">
            <div
              class="w-10 h-10 flex justify-center items-center rounded-[10px]"
              :class="[
                step.status === 'success'
                  ? 'bg-brg-primary'
                  : '' + step.status === 'active'
                  ? 'bg-white border-[2px] border-brg-primary'
                  : 'bg-white border-[2px] border-brg-light-gray',
              ]"
            >
              <Icon
                v-if="step.status === 'success'"
                name="bi:check"
                size="22px"
                class="text-white"
              />
              <Icon
                v-else
                :name="step.icon"
                size="22px"
                :class="[
                  step.status === 'success'
                    ? 'text-white'
                    : '' + step.status === 'active'
                    ? 'text-brg-primary'
                    : 'text-brg-light-gray',
                ]"
              />
            </div>
          </div>

          <div
            v-if="index <= 1 && step.status === 'success'"
            class="w-1/3 h-[2px] bg-brg-primary mx-auto -z-10"
            :class="`${index === 0 ? stepLineClass[0] : stepLineClass[1]}`"
          />
          <div
            v-else-if="
              (step.status === 'default' && index <= 1) ||
              (step.status === 'active' && index <= 1)
            "
            class="w-1/3 h-[2px] bg-brg-light-gray mx-auto -z-10"
            :class="`${index === 0 ? stepLineClass[0] : stepLineClass[1]}`"
          />
        </div>
        <div
          class="w-12 ms-1 mt-1 text-center text-[10px] text-brg-primary-dark font-semibold"
        >
          {{ step.label }}
        </div>
      </li>
    </ol>
  </div>
</template>
