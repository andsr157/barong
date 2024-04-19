<script setup lang="ts">
import { io, Socket } from "socket.io-client"
import { CHAT_DATA } from "~/constants/chat.constants"
const AUTH_USER_ID = 201
const AUTH_USER_ROLE: string = "partner"
const USER_INDEX = computed(() => (AUTH_USER_ROLE === "user" ? 0 : 1))
const route = useRoute()
const chat_id: string = route.params.chat_id[0]
const messages = computed(() => {
  return CHAT_DATA.conversations.filter((data: any) => {
    return data.conversation_id === parseInt(chat_id)
  })
})

const socket = ref<Socket>()
const newMessage = ref<string>("")

const scrollToBottom = () => {
  const chatContainer = document.querySelector(".chat-container")
  if (chatContainer) {
    chatContainer.scrollTop = chatContainer.scrollHeight
  }
}

const sendMessage = () => {
  console.log("clicked")

  if (!newMessage.value.trim()) {
    console.warn("Message cannot be empty")
    return
  }
  const conversation = messages.value[0]
  if (conversation && conversation.messages instanceof Array) {
    conversation.messages.push({
      message_id:
        messages.value[0].messages[messages.value[0].messages.length - 1]
          .message_id + 1,
      content: newMessage.value,
      sender: AUTH_USER_ID,
      timestamp: "2024-04-20T12:31:00Z",
      unread: true,
    })
    newMessage.value = ""
    nextTick(() => {
      scrollToBottom()
    })
  } else {
    console.error(
      "Unable to send message: Invalid conversation or messages array"
    )
  }
}

definePageMeta({
  layout: "blank",
})
const testSocket = (id: number) => {
  console.log("emit jalan")
  console.log(socket.value)
  socket.value?.emit("testChat", id)
}

const connected = ref(false)
const indexx = ref()
onMounted(async () => {
  socket.value = io("/chat", {
    path: "/api/socket-chat",
  })

  socket.value.on("message", (response: any) => {
    connected.value = true
    indexx.value = response
    setTimeout(() => {
      connected.value = false
    }, 1000)
  })
})
</script>

<template>
  <Header shadow fixed>
    <template #content>
      <div class="flex gap-x-3 items-center">
        <div class="w-9 h-9 rounded-full">
          <NuxtImg
            :src="messages[0].user[USER_INDEX].avatar"
            class="w-full h-full"
          />
        </div>
        <p class="text-sm text-brg-primary-dark font-semibold">
          {{ messages[0].user[USER_INDEX].nama }}
        </p>
      </div>
    </template>
  </Header>

  <section
    class="h-[75vh] pt-[30px] mt-[70px] overflow-y-auto px-6 chat-container"
  >
    <div v-if="connected">{{ indexx }} joined</div>
    <div class="flex flex-col gap-y-5">
      <div
        v-for="message in messages[0].messages"
        class="w-full flex"
        :class="`${
          message.sender === AUTH_USER_ID ? 'justify-end' : 'justify-start'
        }`"
      >
        <div
          class="p-3 rounded-[10px] text-[11px]"
          :class="`${
            message.sender === AUTH_USER_ID
              ? 'rounded-br-none text-white bg-brg-primary'
              : 'rounded-bl-none text-brg-primary-dark bg-[#F6F6F8] '
          }`"
        >
          <p>{{ message.content }}</p>
        </div>
      </div>
    </div>
  </section>

  <div
    class="w-full pb-6 fixed bottom-0 pt-2 flex justify-between px-6 items-center bg-white"
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
      @click="testSocket(USER_INDEX)"
    />
  </div>
</template>
