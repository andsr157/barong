<script setup lang="ts">
const AUTH_USER_ROLE: string = "partner"
const USER_INDEX = computed(() => (AUTH_USER_ROLE === "user" ? 0 : 1))
import { CHAT_DATA } from "~/constants/chat.constants"

const router = useRouter()
</script>

<template>
  <Header title="Pesan" />
  <section class="px-6 mt-[30px]">
    <div class="flex flex-col gap-y-5">
      <div
        v-for="chat in CHAT_DATA.conversations"
        :key="chat.conversation_id"
        class="flex w-full items-center justify-between"
        @click="router.push(`/chat/${chat.conversation_id}`)"
      >
        <div class="flex items-center">
          <div class="rounded-full w-10 h-10 overflow-hidden">
            <NuxtImg
              :src="chat.user[USER_INDEX].avatar"
              class="w-full h-full"
            />
          </div>
          <div class="flex flex-col text-start justify-between ps-2">
            <p class="text-[11px] text-brg-primary-dark font-semibold">
              {{ chat.user[USER_INDEX].nama }}
            </p>
            <p class="text-[11px] text-brg-gray">
              {{ chat.last_message }}
            </p>
          </div>
        </div>

        <div
          class="text-white bg-brg-primary rounded-full w-5 h-5 flex items-center text-center"
        >
          <p class="text-[10px] font-semibold mx-auto">
            {{ chat.unread_messages_count }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
