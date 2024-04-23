<script setup lang="ts">
import axios from "axios"
import { convertToTime } from "~/composables/helpers"
import type { ApiResponseChat, Message } from "~/types/chat.type"

import { createClient } from "@supabase/supabase-js"
const { data: user } = <any>useAuth()
const USER_INDEX = computed(() => (user.value.user.role === "user" ? 0 : 1))
const route = useRoute()
const chat_id: string = route.params.chat_id[0]

const realTimeMessage = ref<Message[] | undefined>(undefined)
const headers = useRequestHeaders(["cookie"]) as HeadersInit
const {
  data: messages,
  pending,
  status,
} = await useFetch<ApiResponseChat>(`/api/v1/chat/${chat_id}`, {
  headers,
})
realTimeMessage.value = messages.value?.data.messages

const config = useRuntimeConfig().app
const supabase = createClient(config.supabaseUrl, config.supabaseKey)

// const socket = ref<Socket>()
const newMessage = ref<string>("")

const scrollToBottom = () => {
  const chatContainer = document.querySelector(".chat-container")
  if (chatContainer) {
    chatContainer.scrollTop = chatContainer.scrollHeight
  }
}

// const sendMessage = () => {
//   console.log("clicked")

//   if (!newMessage.value.trim()) {
//     console.warn("Message cannot be empty")
//     return
//   }
//   const conversation = messages.value[0]
//   if (conversation && conversation.messages instanceof Array) {
//     conversation.messages.push({
//       message_id:
//         messages.value[0].messages[messages.value[0].messages.length - 1]
//           .message_id + 1,
//       content: newMessage.value,
//       sender: AUTH_USER_ID,
//       timestamp: "2024-04-20T12:31:00Z",
//       unread: true,
//     })
//     newMessage.value = ""
//     nextTick(() => {
//       scrollToBottom()
//     })
//   } else {
//     console.error(
//       "Unable to send message: Invalid conversation or messages array"
//     )
//   }
// }

definePageMeta({
  layout: "blank",
})

const sendChat = async (id: number) => {
  try {
    if (!newMessage.value.trim()) {
      console.warn("Message cannot be empty")
      return
    }
    console.log(newMessage.value)
    const payload = {
      chats_id: parseInt(chat_id),
      sender_id: user.value.user.id,
      content: newMessage.value,
    }

    const res = await axios.post("/api/v1/chat/message", payload)
    if (res.data.status == 200) {
      newMessage.value = ""
    }
  } catch (error) {
    console.log(error)
  }
}

const chat = supabase
  .channel("test-chat")
  .on(
    "postgres_changes",
    { event: "*", schema: "public", table: "messages" },
    (payload: any) => {
      console.log(payload.new)
      const message = {
        message_id: payload.new.id as number,
        sender_id: payload.new.sender_id as number,
        content: payload.new.content as string,
        date_created: payload.new.date_created as string,
      }

      realTimeMessage.value?.push(message)
    }
  )
  .subscribe()

// watch(realTimeMessage?.value, () => {
//   nextTick(() => {
//     scrollToBottom()
//   })
// })
</script>

<template>
  <Header shadow fixed>
    <template #content>
      <div class="flex gap-x-3 items-center">
        <div class="w-9 h-9 rounded-full">
          <NuxtImg
            :src="messages?.data.users[USER_INDEX].avatar"
            class="w-full h-full"
          />
        </div>
        <p class="text-sm text-brg-primary-dark font-semibold">
          {{ messages?.data.users[USER_INDEX].name }}
        </p>
      </div>
    </template>
  </Header>

  <section
    class="h-[75vh] pt-[30px] mt-[70px] overflow-y-auto px-6 chat-container"
  >
    <div class="flex flex-col gap-y-5">
      <div
        v-for="message in realTimeMessage"
        v-if="realTimeMessage !== undefined"
        class="w-full flex"
        :class="`${
          message.sender_id === user.user.id ? 'justify-end' : 'justify-start'
        }`"
      >
        <div
          class="p-3 rounded-[10px] text-[11px] relative"
          :class="`${
            message.sender_id === user.user.id
              ? 'rounded-br-none text-white bg-brg-primary'
              : 'rounded-bl-none text-brg-primary-dark bg-[#F6F6F8] '
          }`"
        >
          <p class="mb-2">{{ message.content }}</p>
          <div class="absolute bottom-1 right-1 text-[9px]">
            <span>{{ convertToTime(message.date_created) }}</span>
          </div>
        </div>
      </div>

      <!-- <div v-for="data in realTimeMessage">
        {{ data.content }}
      </div> -->
    </div>
  </section>

  <div
    class="w-full max-w-[450px] pb-6 fixed bottom-0 pt-2 flex justify-between px-6 items-center bg-white"
  >
    <input
      class="rounded-[20px] w-[85%] bg-[#F6F6F8] px-4 py-3 text-xs text-brg-primary-dark focus:outline-brg-light-gray focus:outline-[1px]"
      type="text"
      placeholder="Tulis Pesan..."
      v-model="newMessage"
    />
    <Icon
      name="iconamoon:send-fill"
      class="text-brg-primary"
      size="32px"
      @click="sendChat"
    />
  </div>
</template>
