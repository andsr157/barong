<script setup lang="ts">
import { timeAgo } from "~/composables/helpers"
definePageMeta({
  layout: "blank",
  middleware: ["auth", "role"],
})

const { data: user } = useAuth() as any

const data = ref<any>({
  data: [],
  pagination: {},
})
const isLoading = ref(false)
const router = useRouter()
const cursor = ref(0)
const pageFlag = ref(0)

const fetchData = async () => {
  try {
    isLoading.value = true
    const res = (await $fetch(
      `/api/v1/notification?cursor=${cursor.value}&limit=1`
    )) as any
    if (res && res.status == 200) {
      console.log(res)
      res.data.map((i: any) => {
        data.value.data.push({ ...i, showActions: false })
      })
      console.log("jalan")
      data.value.pagination = res.pagination
      cursor.value = res.data[res.data.length - 1].createdAt
      pageFlag.value += 1
    }
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
    console.log(error)
  }
}

const readAll = async () => {
  try {
    const res = await $fetch("/api/v1/notification", {
      method: "PUT",
    })
    if (res && res.status == 200) {
      if (data.value && data.value.data.length) {
        data.value.data = data.value.data.map((i: any) => {
          return { ...i, isRead: true }
        })
      }
    }
  } catch (error) {
    console.log()
  }
}

const deleteNotif = async (id: string) => {
  try {
    if (
      data.value.data.length === 1 &&
      pageFlag.value < data.value.pagination.total_pages
    ) {
      if (pageFlag.value % 2 === 0) {
        pageFlag.value -= 1
      }
      await fetchData()
    }
    const findIndex = data.value.data.findIndex((i: any) => i.id === id)
    if (
      findIndex === data.value.data.length - 1 &&
      data.value.data.length > 1
    ) {
      cursor.value = data.value.data[findIndex - 1].createdAt
    }
    const res = (await $fetch(`/api/v1/notification/${id}`, {
      method: "DELETE",
    })) as any
    if (res && res.status == 200) {
      console.log(res)
      if (data.value && data.value.data.length) {
        data.value.data = data.value.data.filter((i: any) => i.id !== id)
      }
    }
  } catch (error) {
    console.log(error)
  }
}

const resetData = () => {
  pageFlag.value = 0
  cursor.value = 0
  data.value = {
    data: [],
    pagination: {},
  }
}

const deleteAll = async () => {
  try {
    const res = await $fetch("/api/v1/notification", {
      method: "DELETE",
    })
    if (res && res.status === 200) {
      data.value.data = []
    }
  } catch (error) {
    console.log(error)
  }
}
let NotificationData: any
onMounted(() => {
  fetchData()
  NotificationData = useNuxtApp()
    .$supabase.channel("notification")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "user_notification",
        filter: `user_id=eq.${user?.value?.user?.id}`,
      },
      async (payload: any) => {
        resetData()
        fetchData()
      }
    )
    .subscribe()
})

onUnmounted(() => {
  NotificationData.unsubscribe()
})
</script>

<template>
  <Header title="Notifikasi" />

  <section class="mt-[30px] px-6 pb-24">
    <div class="flex justify-beetween gap-x-4">
      <div class="text-right flex justify-end" @click="deleteAll">
        <span
          class="bg-brg-white text-brg-gray border-[1px] rounded-md p-2 mb-5"
        >
          <Icon name="mdi:playlist-remove" size="24px" /> Hapus Semua</span
        >
      </div>
      <div class="text-right flex justify-end" @click="readAll">
        <span class="bg-brg-secondary text-white rounded-md p-2 mb-5">
          <Icon name="ri:list-check-3" size="24px" /> Baca Semua</span
        >
      </div>
    </div>
    <div v-if="isLoading"><SkeletonNotification /></div>
    <p v-else-if="!data.data.length && !isLoading">Tidak ada notifikasi</p>
    <div v-else v-for="(notif, index) in data.data" :key="index">
      <div
        :class="`${
          notif.isRead
            ? 'bg-brg-white text-gray-500 border-gray-200'
            : 'bg-brg-secondary text-white border-brg-secondary'
        }`"
        @click="notif.showActions = !notif.showActions"
        class="w-full grid grid-cols-6 border-[2px] rounded-xl shadow-xl px-3 py-3 mb-5 relative z-10"
      >
        <div class="col-span-5">
          <h3 class="font-semibold text-lg">{{ notif.notification.title }}</h3>
          <p class="w-full mb-2">
            {{ notif.notification.description }}
          </p>
          <span class="text-xs">{{ timeAgo(notif.createdAt) }}</span>
        </div>
      </div>
      <Transition name="slide">
        <div
          class="flex gap-x-6 font-semibold text-brg-gray bg-gray-100 rounded-bl-2xl rounded-br-xl relative -top-8 pt-6 px-3 pb-2 mx-auto w-full overflow-hidden"
          v-show="notif.showActions"
        >
          <button @click="deleteNotif(notif.id)">
            <Icon
              name="material-symbols:delete-forever"
              size="24px"
              class="text-brg-gray"
            />
            Hapus
          </button>
          <button @click="router.push('/user/history')" class="cursor-pointer">
            <Icon
              name="ic:outline-remove-red-eye"
              size="24px"
              class="text-brg-gray"
            />
            Lihat
          </button>
        </div>
      </Transition>
    </div>

    <button
      v-if="data.data.length && pageFlag < data.pagination.total_pages"
      @click="fetchData"
      class="border-2 border-brg-secondary mt-2 text-brg-secondary text-sm font-medium py-2 px-4 rounded-3xl relative left-1/2 -translate-x-1/2"
    >
      Load More
    </button>
  </section>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
