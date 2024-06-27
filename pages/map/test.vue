<script setup lang="ts">
import useCustomMaps from "~/composables/useMap"
const maps = useCustomMaps() as any

definePageMeta({
  layout: "blank",
})
const currentLocation = ref<any>({
  latitude: 0,
  longitude: 0,
  direction: 0,
  speed: 0,
  accuracy: 0,
})

const reqCount = ref(0)

onMounted(() => {
  const updateInterval = setInterval(async () => {
    const { lat, lng, heading, speed, accuracy } =
      await maps.getCurrentLocation()

    currentLocation.value = {
      latitude: lat,
      longitude: lng,
      direction: heading,
      speed: speed,
      accuracy: accuracy,
    }
    reqCount.value += 1
  }, 2000)

  onBeforeUnmount(() => {
    clearInterval(updateInterval)
  })
})
</script>

<template>
  <div>
    <p>Latitude: {{ currentLocation.latitude }}</p>
    <p>Longitude: {{ currentLocation.longitude }}</p>
    <p>direction: {{ currentLocation.direction }}</p>
    <p>speed: {{ currentLocation.speed }}</p>
    <p>accuracy: {{ currentLocation.accuracy }}</p>
    <p class="mt-10">req count: {{ reqCount }}</p>
  </div>
</template>
