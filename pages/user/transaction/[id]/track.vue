<script setup lang="ts">
import type { Map as LeafletMap } from "leaflet"
import useCustomMaps from "~/composables/useMap"
import { RealtimeChannel } from "@supabase/supabase-js"

definePageMeta({
  layout: "blank",
})
const nuxtApp = useNuxtApp()
const L = nuxtApp.$leaflet as typeof import("leaflet") as any
const maps = useCustomMaps() as any
const partnerData = ref<any>(null)
let channelUser: RealtimeChannel | null = null
const route = useRoute()
const userLocation = ref({
  lat: 0,
  lng: 0,
})
const currentPartnerLocation = ref({
  lat: 0,
  lng: 0,
})

const reqCount = ref(0)
const chatNotifCount = ref(0)
const map = ref<LeafletMap>()
const marker = ref<any>(null)
const supabase = useNuxtApp().$supabase as any

const initChannels = (id: string) => {
  channelUser = supabase.channel(`room-${id}`)
  channelUser
    ?.on("broadcast", { event: "updatePartnerLocation" }, (payload: any) =>
      updateLocation(payload.payload.data)
    )
    .subscribe()
}

const updateLocation = (payload: any) => {
  console.log("update:", payload)
  currentPartnerLocation.value.lat = payload.lat
  currentPartnerLocation.value.lng = payload.lng
}

watch(currentPartnerLocation.value, (newValue, oldValue) => {
  if (!reqCount.value) {
    L.Routing.control({
      waypoints: [
        L.latLng(newValue.lat, newValue.lng),
        L.latLng(userLocation.value.lat, userLocation.value.lng),
      ],
      draggableWaypoints: false,
      addWaypoints: false,
      createMarker: (i: number, waypoint: any, n: number) => {
        return L.marker(waypoint.latLng, {
          icon: L.icon({
            iconUrl: "/marker-icon.png",
            iconSize: [25, 31],
          }),
        })
      },
    }).addTo(map.value)
  }
  if (!marker.value) {
    marker.value = L.marker([newValue.lat, newValue.lng], {
      icon: L.icon({
        iconUrl: "/marker-pengepul.png",
        iconSize: [32, 38],
      }),
    }).addTo(map.value)
  } else {
    marker.value.setLatLng([newValue.lat, newValue.lng], {
      icon: L.icon({
        iconUrl: "/marker-pengepul.png",
        iconSize: [32, 38],
      }),
    })
  }
  map.value?.setView([newValue.lat, newValue.lng], 18)
  reqCount.value += 1
})
let chats: any

onMounted(async () => {
  const transactionId = Array.isArray(route.params.id)
    ? route.params.id[0]
    : route.params.id

  const res = (await $fetch(`/api/v1/map/partner/${transactionId}`)) as any
  console.log(res)
  if (res && res.status === 200) {
    console.log(res.data)
    partnerData.value = res.data

    chats = supabase
      .channel("chat-track")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `chats_id=eq.${res.data.chats_id}`,
        },
        (payload: any) => {
          chatNotifCount.value += 1
        }
      )
      .subscribe()
  }

  if (process.client) {
    console.log(currentPartnerLocation.value)
    const userCoordinate = route.query?.location as string
    const [userLat, userLng] = userCoordinate.split(",")
    userLocation.value.lat = parseFloat(userLat)
    userLocation.value.lng = parseFloat(userLng)

    console.log(userLocation.value)

    initChannels(transactionId)

    map.value = L.map("map").setView(
      [userLocation.value.lat, userLocation.value.lng],
      15
    )
    const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>"
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
    }).addTo(map.value)

    // map.value?.on("click", function (e) {
    //   console.log(e)
    //   L.Routing.control({
    //     waypoints: [
    //       L.latLng(-7.674076, 110.7646537),
    //       L.latLng(e.latlng.lat, e.latlng.lng),
    //     ],
    //   })
    //     .on("routesfound", function (e: any) {
    //       var routes = e.routes
    //       console.log(routes)

    //       e.routes[0].coordinates.forEach(function (coord: any, index: number) {
    //         setTimeout(function () {
    //           currentPartnerLocation.value.lat = coord.lat
    //           currentPartnerLocation.value.lng = coord.lng
    //         }, 100 * index)
    //       })
    //     })
    //     .addTo(map.value)
    // })
  }
})

onBeforeUnmount(() => {
  channelUser?.unsubscribe()
  chats?.unsubscribe()
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="
        currentPartnerLocation.lat === 0 && currentPartnerLocation.lng === 0
      "
      class="shadow-xl rounded-xl hover:transform hover:scale-110 duration-200 z-50 bg-white absolute flex flex-col justify-center items-center px-2 sm:px-6 h-28 w-[80vw] max-w-[320px] right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2"
    >
      <h1 class="text-base sm:text-lg font-semibold text-center">
        Pengepul belum mulai jalan
      </h1>
      <h1 class="text-base sm:text-lg font-semibold text-center">
        tunggu sebentar... :)
      </h1>
    </div>
    <div
      class="absolute top-0 right-1/2 translate-x-1/2 border-1 border-brg-primary w-full max-w-[450px] sm:max-w-[100vw] h-[80vh] sm:h-[100vh]"
      id="map"
    ></div>
  </Teleport>
  <div
    v-if="
      partnerData !== null &&
      currentPartnerLocation.lat !== 0 &&
      currentPartnerLocation.lng !== 0
    "
    class="absolute z-[999] drop-shadow-2xl py-4 px-6 rounded-xl w-full max-w-[450px] h-[20vh] sm:right-1/2 sm:translate-x-1/2 bg-white bottom-0 sm:bottom-5"
  >
    <div class="flex justify-between items-center px-5 mt-5">
      <div class="flex gap-x-2">
        <div class="w-16 h-16 rounded-full bg-black overflow-hidden">
          <NuxtImg
            :src="partnerData.partner.avatar"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="text-brg-primary-dark">
          <h1 class="text-xl font-bold">{{ partnerData.partner.name }}</h1>
          <div class="flex items-center ps-2">
            <p class="font-bold text-lg">
              {{ partnerData.rate }}
            </p>
            <Icon
              name="ic:round-star"
              size="24px"
              class="text-brg-primary-dark"
            />
          </div>
        </div>
      </div>

      <NuxtLink :to="`/chat/${partnerData.chats_id}`">
        <div class="relative">
          <Icon
            name="mdi:chat-bubble"
            class="text-brg-primary-dark"
            size="36px"
          />
          <div
            class="absolute -top-1 -right-1 rounded-full text-center bg-brg-primary text-white w-6 h-6"
          >
            {{ chatNotifCount }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
  <SkeletonMapCard
    v-else-if="
      partnerData === null &&
      currentPartnerLocation.lat !== 0 &&
      currentPartnerLocation.lng !== 0
    "
  />
</template>

<style>
div.leaflet-top.leaflet-right {
  display: none !important;
  width: 0px !important;
  height: 0px !important;
}
</style>
