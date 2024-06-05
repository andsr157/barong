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
    class="fixed w-full max-w-[450px] bottom-0 h-14 px-6 py-4 shadow-[0px_-5px_20px_-10px_rgba(0,0,0,0.25)] bg-white z-[60]"
  >
    <ul class="flex justify-between">
      <li v-for="nav in navigation" :key="nav.path">
        <NuxtLink :to="nav.path" class="router-link">
          <div class="flex items-center justify-center bg-white">
            <Icon
              :name="nav.icon"
              size="28px"
              :class="
                route.path === nav.path
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
