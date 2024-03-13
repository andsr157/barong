<script setup lang="ts">
import { TRASH } from "~/constants/trash.constants"
</script>
<template>
  <section class="ps-6">
    <h2 class="mb-6 text-xl font-semibold text-brg-primary-dark">
      Total sampahmu
    </h2>
    <div>
      <Swiper :slides-per-view="1.45" :loop="true">
        <SwiperSlide v-for="data in TRASH">
          <CardTrash
            :category="data.category"
            :weight="data.weight"
            :color="data.color"
            :dark="data.dark"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
