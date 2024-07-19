<script setup lang="ts">
import type { Map as LeafletMap } from "leaflet"
import useCustomMaps from "~/composables/useMap"
import { RealtimeChannel } from "@supabase/supabase-js"

definePageMeta({
  layout: "blank",
})
const nuxtApp = useNuxtApp()
const L = nuxtApp.$leaflet as typeof import("leaflet") as any
const userData = ref<any>(null)

const maps = useCustomMaps() as any
const distance = ref(0)
const marker = ref<any>(null)
let channelPartner: RealtimeChannel | null = null
const route = useRoute()
const reqCount = ref(0)
let chatNotifCount = ref(0)

const currentLocation = ref({
  lat: 0,
  lng: 0,
})

const userLocation = ref({
  lat: 0,
  lng: 0,
})

const map = ref<LeafletMap>()
const supabase = useNuxtApp().$supabase as any

const lastLocation = { lat: 0, lng: 0 }

const initChannels = (id: string) => {
  channelPartner = supabase.channel(`room-${id}`)
}

const updateLocation = async () => {
  const { lat, lng } = await maps.getCurrentLocation()
  const distanceMoved = maps.calculateDistance(
    lastLocation.lat,
    lastLocation.lng,
    lat,
    lng
  )

  if (distanceMoved < 0.01) {
    return
  }
  currentLocation.value.lat = lat
  currentLocation.value.lng = lng

  if (!marker.value) {
    marker.value = L.marker(
      [currentLocation.value.lat, currentLocation.value.lng],
      {
        icon: L.icon({
          iconUrl: "/marker-pengepul.png",
          iconSize: [32, 38],
        }),
      }
    ).addTo(map.value)
  } else {
    marker.value.setLatLng(
      [currentLocation.value.lat, currentLocation.value.lng],
      {
        icon: L.icon({
          iconUrl: "/marker-pengepul.png",
          iconSize: [32, 38],
        }),
      }
    )
  }

  channelPartner?.send({
    type: "broadcast",
    event: "updatePartnerLocation",
    payload: { data: currentLocation.value },
  })
  if (channelPartner) {
    supabase.removeChannel(channelPartner)
  }
  console.log("coordinate", lat, lng)
}

watch(currentLocation.value, (newValue, oldValue) => {
  if (!reqCount.value) {
    distance.value = maps.calculateDistance(
      currentLocation.value.lat,
      currentLocation.value.lng,
      userLocation.value.lat,
      userLocation.value.lng
    )
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
  map.value?.setView([currentLocation.value.lat, currentLocation.value.lng], 18)
  reqCount.value += 1
})

let startUpdateLocation: NodeJS.Timeout
let chats: any
onMounted(async () => {
  const transactionId = Array.isArray(route.params.id)
    ? route.params.id[0]
    : route.params.id

  const res = (await $fetch(`/api/v1/map/user/${transactionId}`)) as any

  if (res && res.status === 200) {
    userData.value = res.data
    chats = supabase
      .channel("take-chat")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `chats_id=eq.${res.data.chats_id}`,
        },
        (payload: any) => {
          console.log(payload)
          chatNotifCount.value += 1
        }
      )
      .subscribe()
  }

  updateLocation()
  startUpdateLocation = setInterval(() => {
    updateLocation()
  }, 3000)

  const userCoordinate = route.query?.location as string
  const [userLat, userLng] = userCoordinate.split(",")
  userLocation.value.lat = parseFloat(userLat)
  userLocation.value.lng = parseFloat(userLng)

  if (process.client) {
    initChannels(transactionId)

    const nuxtApp = useNuxtApp()
    const L = nuxtApp.$leaflet as typeof import("leaflet") as any

    map.value = L.map("map", {
      rotate: true,
      rotateControl: {
        closeOnZeroBearing: false,
        position: "topleft",
      },
      bearing: 0,
      shiftKeyRotate: true,
      touchRotate: true,
    }).setView([currentLocation.value.lat, currentLocation.value.lng], 18)
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
    //           marker.setLatLng([coord.lat, coord.lng])
    //           map.value?.setView([coord.lat, coord.lng], 18)
    //         }, 100 * index)
    //       })
    //     })
    //     .addTo(map.value)
    // })
  }
})

onBeforeUnmount(() => {
  clearInterval(startUpdateLocation)
  channelPartner?.unsubscribe()
  chats?.unsubscribe()
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
      <NuxtLink :to="`/chat/${userData.chats_id}`">
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
