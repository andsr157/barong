<script setup lang="ts">
import type { Map as LeafletMap } from "leaflet"
import useCustomMaps from "~/composables/useMap"

definePageMeta({
  layout: "blank",
})
const nuxtApp = useNuxtApp()
const L = nuxtApp.$leaflet as typeof import("leaflet") as any
const userData = ref<any>(null)

const maps = useCustomMaps() as any
const distance = ref(0)
const route = useRoute()

const currentLocation = ref({
  lat: 0,
  lng: 0,
})

const userLocation = ref({
  lat: 0,
  lng: 0,
})

const map = ref<LeafletMap>()

onMounted(async () => {
  const transactionId = Array.isArray(route.params.id)
    ? route.params.id[0]
    : route.params.id

  const res = (await $fetch(`/api/v1/map/user/${transactionId}`)) as any
  console.log(res)
  if (res && res.status === 200) {
    userData.value = res.data
  }

  const userCoordinate = route.query?.location as string
  const [userLat, userLng] = userCoordinate.split(",")
  userLocation.value.lat = parseFloat(userLat)
  userLocation.value.lng = parseFloat(userLng)

  if (process.client) {
    const { lat, lng } = await maps.getCurrentLocation()
    currentLocation.value.lat = lat
    currentLocation.value.lng = lng

    const nuxtApp = useNuxtApp()
    const L = nuxtApp.$leaflet as typeof import("leaflet") as any

    map.value = L.map("map").setView(
      [currentLocation.value.lat, currentLocation.value.lng],
      15
    )
    const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>"
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
    }).addTo(map.value)

    distance.value = maps.calculateDistance(
      currentLocation.value.lat,
      currentLocation.value.lng,
      userLocation.value.lat,
      userLocation.value.lng
    )

    L.Routing.control({
      waypoints: [
        L.latLng(currentLocation.value.lat, currentLocation.value.lng),
        L.latLng(userLocation.value.lat, userLocation.value.lng),
      ],
      draggableWaypoints: false,
      addWaypoints: false,
    }).addTo(map.value)
  }
})
</script>

<template>
  <Teleport to="body">
    <div
      class="absolute top-0 w-full max-w-[450px] sm:max-w-[100vw] right-1/2 translate-x-1/2 h-[70vh] sm:h-[100vh]"
      id="map"
    ></div>
  </Teleport>
  <div
    v-if="userData !== null"
    class="absolute z-[100] drop-shadow-2xl py-4 px-6 rounded-xl w-full max-w-[450px] h-[30vh] sm:right-1/2 sm:translate-x-1/2 bg-white bottom-0 sm:bottom-5"
  >
    <div class="flex justify-between items-center">
      <div class="text-4xl font-bold text-brg-primary-dark">
        {{ distance }}<span class="text-base">km</span>
      </div>
    </div>
    <div class="mt-4 text-base font-medium text-brg-primary-dark">
      <div class="text-xl font-bold mb-1">{{ userData.user.name }}</div>
      <p>
        {{ userData.address.address_name }}
        <span>({{ userData.address.detail }})</span>
      </p>
    </div>
  </div>
  <SkeletonMapCard v-else />
</template>

<style>
div.leaflet-top.leaflet-right {
  display: none !important;
  width: 0px !important;
  height: 0px !important;
}
</style>
