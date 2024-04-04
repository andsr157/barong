<script setup lang="ts">
definePageMeta({
  layout: "blank",
  middleware: "auth",
})

onBeforeMount(() => {
  const { data: user } = <any>useAuth()
  const role = user.value?.user?.role
  if (role === "user") {
    useRouter().push("/user")
  } else if (role === "partner") {
    useRouter().push("/partner")
  }
})
</script>
<template></template>
