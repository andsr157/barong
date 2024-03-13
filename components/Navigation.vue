<script setup lang="ts">
const route = useRoute()

interface Props {
  navigation: {
    name: string
    icon: string
    path: string
  }[]
}

defineProps<Props>()
</script>

<template>
  <nav
    class="fixed w-full max-w-[375px] bottom-0 h-14 px-6 py-4 shadow-[0px_-5px_20px_-10px_rgba(0,0,0,0.25)] bg-white"
  >
    <ul class="flex justify-between">
      <li v-for="nav in navigation" :key="nav.path">
        <NuxtLink :to="nav.path" class="router-link">
          <div
            class="flex items-center justify-center"
            :class="
              nav.name === 'transaction'
                ? 'bg-brg-primary rounded-full w-14 h-14 relative -top-3/4'
                : 'bg-white'
            "
          >
            <Icon
              :name="nav.icon"
              :size="nav.name === 'transaction' ? '35px' : '28px'"
              :class="
                nav.name === 'transaction'
                  ? 'text-white'
                  : route.path === nav.path
                  ? 'text-brg-primary'
                  : 'text-brg-light-gray'
              "
            />
          </div>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
