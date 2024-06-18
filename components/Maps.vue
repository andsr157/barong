<script setup lang="ts">
import { useAddressStore } from "~/stores/Address.store"
const addresStore = useAddressStore()

interface Props {
  center: {
    lat: number
    lng: number
  }
}
const { mapRef, formAdress, center, generatedAddress } =
  storeToRefs(addresStore)
const props = defineProps<Props>()

const emit = defineEmits()

const saveNewLocation = () => {
  formAdress.value.latitude = center.value.lat.toString()
  formAdress.value.longitude = center.value.lng.toString()
  formAdress.value.address_name = generatedAddress.value

  emit("closeMap")
}

async function getCoordinate(event: any) {
  addresStore.getLocationAdress(event.lat, event.lng)
  center.value = {
    lat: event.lat,
    lng: event.lng,
  }
}
</script>

<template>
  <div class="fixed top-o bottom-0 w-full max-w-[450px] h-full z-50">
    <div class="absolute w-full h-full z-10">
      <LMap
        ref="mapRef"
        :zoom="1000"
        :center="[props.center.lat, props.center.lng]"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
        />
        <LMarker
          :lat-lng="[props.center.lat, props.center.lng]"
          @update:lat-lng="getCoordinate"
          draggable
        >
        </LMarker>
      </LMap>
    </div>

    <div
      class="absolute flex flex-col z-50 bottom-0 w-full h-48 rounded-tl-[36px] rounded-tr-[36px] pt-6 px-6 bg-white"
    >
      <p class="text-sm font-medium">
        {{ addresStore.generatedAddress }}
      </p>

      <div class="flex gap-x-1 justify-between mt-4">
        <button
          @click="saveNewLocation"
          class="w-[40%] text-sm p-2 text-white bg-brg-primary rounded-xl mt-6"
        >
          Simpan
        </button>
        <button
          @click="emit('closeMap')"
          class="w-[40%] text-sm p-2 text-white bg-brg-light-gray rounded-xl mt-6"
        >
          Batal
        </button>
      </div>
    </div>

    <div
      class="rounded-full w-12 h-12 bg-white absolute z-50 bottom-[35%] right-6 flex justify-center items-center"
      @click="addresStore.getCurrentLocation"
    >
      <Icon name="bx:target-lock" size="30px" class="mx-auto text-black" />
    </div>
  </div>
</template>
