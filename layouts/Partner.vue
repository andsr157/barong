<script setup lang="ts">
import { NAVIGATION_PENGEPUL } from "~/constants/navigation.constants"
</script>

<template>
  <slot></slot>
  <Navigation :navigation="NAVIGATION_PENGEPUL" />
</template>
