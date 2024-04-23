<script setup lang="ts">
import { RealtimeChannel } from "@supabase/supabase-js"
import { createClient } from "@supabase/supabase-js"
const config = useRuntimeConfig().app
const supabase = createClient(config.supabaseUrl, config.supabaseKey)

const route = useRoute()
const roomId = ref()
// const channelA = supabase.channel(`room-${roomId.value}`)
// const channelB = supabase.channel(`room-${roomId.value}`)
const message = ref("")
const chat = ref<any>([])
let channelA: RealtimeChannel | null = null
let channelB: RealtimeChannel | null = null

function initChannels() {
  if (roomId.value) {
    channelA = supabase.channel(`room-${roomId.value}`)
    channelB = supabase.channel(`room-${roomId.value}`)
    channelA
      ?.on("broadcast", { event: "test" }, (payload: any) =>
        receiveMessage(payload)
      )
      .subscribe()
  }
}

function receiveMessage(payload: any) {
  console.log("realtime data:", payload.payload)
  chat.value.push(payload.payload.message)
}

// channelB.subscribe((status) => {
//   if (status !== "SUBSCRIBED") {
//     return "not success"
//   }

//   channelB.send({
//     type: "broadcast",
//     event: "test",
//     payload: { message: "hello, world" },
//   })
// })

const sendMessage = () => {
  console.log(channelA)
  console.log(channelB)
  if (message.value) {
    channelB
      ?.send({
        type: "broadcast",
        event: "test",
        payload: { message: message.value },
      })
      .then((res) => console.log(res))
    message.value = ""
    if (channelB) {
      supabase.removeChannel(channelB)
    }
  }
}
definePageMeta({
  layout: "blank",
})

watch(
  () => route.params.id,
  (newValue, oldValue) => {
    roomId.value = Array.isArray(newValue) ? newValue[0] : newValue
    initChannels()
  }
)

onMounted(() => {
  const id = Array.isArray(route.params.id)
    ? route.params.id[0]
    : route.params.id
  roomId.value = id
  console.log(roomId.value)
  initChannels()
  // channelA.value = supabase.channel(`room-${id}`, {
  //   config: {
  //     broadcast: { self: true },
  //   },
  // })
  // channelB.value = supabase.channel(`room-${id}`)
})
</script>

<template>
  <div class="w-full h-full pt-16 px-6 flex flex-col gap-y-3">
    <div
      v-for="data in chat"
      class="w-3/4 bg-black text-white text-center py-2 truncate"
    >
      {{ data }}
    </div>
  </div>
  <div
    class="grid grid-cols-7 gap-x-2 justify-between pb-16 fixed bottom-0 w-full px-6"
  >
    <input
      type="text"
      @keyup.enter="sendMessage"
      v-model="message"
      class="w-full h-10 border-[1px] border-black col-span-5 rounded-xl px-2"
    />
    <button
      @click="sendMessage"
      class="w-full col-span-2 h-10 bg-black text-white rounded-xl"
    >
      Kirim
    </button>
  </div>
</template>
