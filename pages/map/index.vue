<script setup lang="ts">
import type { Map as LeafletMap } from "leaflet"
definePageMeta({
  layout: "blank",
})

const map = ref<LeafletMap>()
const waypoints = [
  { lat: -7.6740764, lng: 110.7646537 },
  { lat: -7.6711456, lng: 110.8376312 },
]

onMounted(() => {
  if (process.client) {
    const nuxtApp = useNuxtApp()
    const L = nuxtApp.$leaflet as typeof import("leaflet") as any

    map.value = L.map("map").setView([-7.6740764, 110.7646537], 15)
    const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>"
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution: "Leaflet &copy; " + mapLink + ", contribution",
      maxZoom: 18,
    }).addTo(map.value)

    let marker = L.marker([-7.6740764, 110.7646537]).addTo(map.value)

    map.value?.on("click", function (e) {
      console.log(e)
      var newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map.value)
      L.Routing.control({
        waypoints: [
          L.latLng(-7.674076, 110.7646537),
          L.latLng(e.latlng.lat, e.latlng.lng),
        ],
      })
        .on("routesfound", function (e: any) {
          var routes = e.routes
          console.log(routes)

          e.routes[0].coordinates.forEach(function (coord: any, index: number) {
            setTimeout(function () {
              marker.setLatLng([coord.lat, coord.lng])
            }, 100 * index)
          })
        })
        .addTo(map.value)
    })
  }
})
</script>

<template>
  <Teleport to="body">
    <div class="absolute w-[100vw] h-[100vh]" id="map">
      <!-- <LMap ref="map" :zoom="15" :center="[47.21322, -1.559482]">
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          layer-type="base"
          name="OpenStreetMap"
        />
      </LMap> -->
    </div>
  </Teleport>
</template>
