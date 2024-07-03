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
const marker = ref<any>(null)
let channelPartner: RealtimeChannel | null = null
const route = useRoute()
const reqCount = ref(0)

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

const initChannels = (id: string) => {
  channelPartner = supabase.channel(`room-${id}`)
}

const updateLocation = async () => {
  const { lat, lng } = await maps.getCurrentLocation()
  currentLocation.value.lat = lat
  currentLocation.value.lng = lng
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
    marker.value = L.marker(
      [currentLocation.value.lat, currentLocation.value.lng],
      {
        icon: L.icon({
          iconUrl: "/marker-pengepul.png",
          iconSize: [25, 31],
        }),
      }
    ).addTo(map.value)
  } else {
    marker.value.setLatLng(
      [currentLocation.value.lat, currentLocation.value.lng],
      {
        icon: L.icon({
          iconUrl: "/marker-pengepul.png",
          iconSize: [25, 31],
        }),
      }
    )
  }
  map.value?.setView([newValue.lat, newValue.lng], 18)
  reqCount.value += 1
})

onMounted(() => {
  updateLocation()
  const startUpdateLocation = setInterval(() => {
    updateLocation()
  }, 1000)

  const userCoordinate = route.query?.location as string
  const [userLat, userLng] = userCoordinate.split(",")
  userLocation.value.lat = parseFloat(userLat)
  userLocation.value.lng = parseFloat(userLng)

  if (process.client) {
    const transactionId = Array.isArray(route.params.id)
      ? route.params.id[0]
      : route.params.id

    initChannels(transactionId)

    const nuxtApp = useNuxtApp()
    const L = nuxtApp.$leaflet as typeof import("leaflet") as any

    map.value = L.map("map").setView(
      [currentLocation.value.lat, currentLocation.value.lng],
      18
    )
    const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>"
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution: "Leaflet &copy; " + mapLink + ", contribution",
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
  onBeforeUnmount(() => {
    clearInterval(startUpdateLocation)
    channelPartner?.unsubscribe()
  })
})
</script>

<template>
  <Teleport to="body">
    <div
      class="absolute w-full max-w-[450px] sm:max-w-[100vw] right-1/2 translate-x-1/2 h-[100vh]"
      id="map"
    ></div>
  </Teleport>
</template>

<style>
div.leaflet-top.leaflet-right {
  display: none !important;
  width: 0px !important;
  height: 0px !important;
}
</style>
