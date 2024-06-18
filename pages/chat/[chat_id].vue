<script setup lang="ts">
import { convertToTime } from "~/composables/helpers"
import { createClient } from "@supabase/supabase-js"
import axios from "axios"
import type { ApiResponseChat, Message } from "~/types/chat.type"

const { data: user } = <any>useAuth()
const USER_INDEX = computed(() => (user.value.user.role === "user" ? 1 : 0))
const route = useRoute()
const chat_id: string = Array.isArray(route.params.chat_id)
  ? route.params.chat_id[0]
  : route.params.chat_id

const isLoading = ref(false)
const realTimeMessage = ref<Message[] | undefined>(undefined)
const chats = ref<any>()
const fetchData = async () => {
  const res = await $fetch<ApiResponseChat>(`/api/v1/chat/${chat_id}`)
  if (res && res.status === 200) {
    chats.value = res.data
    realTimeMessage.value = res.data.messages
  } else {
    if (res.status === 403) {
      useRouter().push(`/${user.value.user.role}`)
    }
  }
}

const config = useRuntimeConfig().app
const supabase = createClient(config.supabaseUrl, config.supabaseKey)

const newMessage = ref<string>("")
const scrollToBottom = async () => {
  const chatContainer = await document.querySelector(".chat-container")
  if (chatContainer) {
    chatContainer.scrollTop = chatContainer.scrollHeight
  } else {
    console.warn("element not found")
  }
}

definePageMeta({
  layout: "blank",
  middleware: ["auth"],
})

const sendChat = async () => {
  try {
    if (!newMessage.value.trim()) {
      console.warn("Message cannot be empty")
      return
    }
    const payload = {
      chats_id: chat_id,
      sender_id: user.value.user.id,
      content: newMessage.value,
    }

    const res = await axios.post("/api/v1/chat/message", payload)
    if (res.data.status == 200) {
      newMessage.value = ""
    }
    return Promise.resolve(res.data)
  } catch (error) {
    console.log(error)
  }
}

watch(
  realTimeMessage,
  () => {
    nextTick(() => {
      scrollToBottom()
    })
  },
  { deep: true }
)

let chat: any
onMounted(async () => {
  await fetchData()
  await nextTick(() => {
    scrollToBottom()
  })

  chat = supabase
    .channel("test-chat")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "messages",
        filter: `chats_id=eq.${chats.value.chats_id}`,
      },
      (payload: any) => {
        const message = {
          message_id: payload.new.id as string,
          sender_id: payload.new.sender_id as string,
          content: payload.new.content as string,
          created_at: payload.new.created_at as string,
        }

        realTimeMessage.value?.push(message)
      }
    )
    .subscribe()
})

onUnmounted(() => {
  chat.unsubscribe()
})
</script>

<template>
  <Header shadow fixed class="!z-50">
    <template #content>
      <div class="flex gap-x-3 items-center">
        <div class="w-9 h-9 rounded-full">
          <NuxtImg
            v-if="chats"
            :src="chats?.users[USER_INDEX].avatar"
            class="w-full h-full"
          />
          <div v-else class="w-9 h-9 rounded-full bg-slate-200 animate-pulse" />
        </div>
        <p class="text-sm text-brg-primary-dark font-semibold" v-if="chats">
          {{ chats?.users[USER_INDEX].name }}
        </p>
        <div
          v-else
          class="-mt-1 -ms-1 w-16 h-5 rounded-md bg-slate-200 animate-pulse"
        />
      </div>
    </template>
  </Header>

  <div class="bg-white w-full h-[70px]"></div>
  <div v-if="isLoading">lagi loading</div>
  <section
    class="h-[75vh] pt-6 pb-4 overflow-y-auto px-6 chat-container"
    v-if="chats"
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
            <span>{{ convertToTime(message.created_at) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div
    v-if="chats"
    class="w-full max-w-[450px] pb-6 fixed bottom-0 pt-2 flex justify-between px-6 items-center bg-white"
  >
    <input
      class="rounded-[20px] w-[85%] bg-[#F6F6F8] px-4 py-3 text-xs text-brg-primary-dark focus:outline-brg-light-gray focus:outline-[1px]"
      type="text"
      placeholder="Tulis Pesan..."
      v-model="newMessage"
      @keyup.enter="sendChat"
    />
    <Icon
      name="iconamoon:send-fill"
      class="text-brg-primary"
      size="32px"
      @click="sendChat"
    />
  </div>
</template>
