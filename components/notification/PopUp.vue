<script setup>
const notificationStore = useNotificationStore()

const { notifications } = storeToRefs(notificationStore)
</script>
<template>
  <Teleport to="body">
    <div
      v-if="notifications.length"
      class="fixed z-[99] right-1/2 translate-x-1/2 top-5 w-full max-w-80 grid grid-cols-6 items-center px-2 py-3 rounded-md bg-white border-[1px] border-brg-light-gray"
    >
      <div>
        <img
          src="/icons/icon_64x64.png"
          width="32px"
          height="32px"
          alt=""
          class="object-contain"
        />
      </div>
      <div class="col-span-5">
        <p class="font-semibold">{{ notifications[0].title }}</p>
        <p class="font-medium text-sm">{{ notifications[0].description }}</p>
      </div>
    </div>
  </Teleport>
</template>
