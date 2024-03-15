<script setup lang="ts">
defineProps<{
  title: string;
}>();
const router = useRouter();
const goBack = () => {
  if (window.history.state.back !== null) {
    router.back();
  } else {
    router.push("/user");
  }
};
</script>

<template>
  <header>
    <div class="grid grid-cols-5 px-6 py-4 items-center">
      <Icon
        name="mdi:arrow-back"
        size="24px"
        class="text-brg-primary-dark"
        @click="goBack()"
      />
      <h1
        class="text-brg-primary-dark font-semibold text-[20px] text-center col-span-3"
      >
        {{ title }}
      </h1>
      <slot />
    </div>
  </header>
</template>
