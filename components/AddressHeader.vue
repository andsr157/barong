<script setup lang="ts">
defineProps<{
  title?: string
  shadow?: boolean
  fixed?: boolean
}>()
const router = useRouter()
const goBack = () => {
  const previousValidUrl = localStorage.getItem("previousValidRoute") as string
  if (window.history.state.back !== null) {
    router.push(previousValidUrl)
  } else {
    const { data: user } = <any>useAuth()
    const role = user.value?.user?.role
    if (role === "user") {
      useRouter().push("/user")
    } else if (role === "partner") {
      useRouter().push("/partner")
    }
  }
}
</script>

<template>
  <header>
    <div
      class="grid grid-cols-5 px-6 py-4 items-center max-w-[450px] bg-white"
      :class="`${shadow ? 'shadow-lg' : ''} ${
        fixed ? 'fixed top-0 w-full' : ''
      }`"
    >
      <Icon
        name="mdi:arrow-back"
        size="24px"
        class="text-brg-primary-dark"
        @click="goBack()"
      />
      <h1
        v-if="title"
        class="text-brg-primary-dark font-semibold text-[20px] text-center col-span-3"
      >
        {{ title }}
      </h1>
      <div v-if="!title" class="col-span-3">
        <slot name="content" />
      </div>
      <slot />
    </div>
  </header>
</template>
