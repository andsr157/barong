<script setup lang="ts">
import { NAVIGATION } from "~/constants/navigation.constants"
</script>

<template>
  <slot></slot>
  <Navigation :navigation="NAVIGATION" />
</template>
