<script setup lang="ts">
definePageMeta({
  layout: "blank",
})
const router = useRouter()
const redirectToHome = () => {
  setTimeout(() => {
    router.push("/user")
  }, 2000)
}

const visible = ref(false)

onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 500)
  redirectToHome()
})
</script>

<template>
  <div
    class="w-full h-screen bg-brg-primary flex justify-center items-center px-6"
  >
    <transition name="bounceFromBottom">
      <CardTransactionSuccess
        v-if="visible"
        message="Terima kasih, sekali lagi anda berkontribusi dalam rantai daur ulang sampah"
      />
    </transition>
  </div>
</template>
<style>
@keyframes bounceFromBottom {
  0% {
    transform: translateY(100%);
  }
  60% {
    transform: translateY(-20%);
  }
  80% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0);
  }
}

.bounceFromBottom-enter-active {
  animation: bounceFromBottom 0.5s ease;
}
</style>
