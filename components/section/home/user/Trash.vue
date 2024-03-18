<script setup lang="ts">
import { TRASH_CARD } from "~/constants/trash.constants"

const breakpoint = {
  320: {
    slidesPerView: 1.25,
  },
  360: {
    slidesPerView: 1.45,
  },
  375: {
    slidesPerView: 1.5,
  },
  425: {
    slidesPerView: 1.7,
  },
  440: {
    slidesPerView: 1.8,
  },
}
</script>
<template>
  <section class="ps-6 mb-10">
    <h2 class="mb-6 text-xl font-semibold text-brg-primary-dark">
      Total sampahmu
    </h2>
    <div v-if="true">
      <Swiper :breakpoints="breakpoint" :loop="true">
        <SwiperSlide v-for="data in TRASH_CARD">
          <CardTrash
            :category="data.category"
            :weight="data.weight"
            :color="data.color"
            :dark="data.dark"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="w-full pe-6" v-if="false">
      <p
        class="text-xs font-medium text-brg-primary-dark text-opacity-70 text-center"
      >
        Kamu belum pernah menjual sampahmu
      </p>
    </div>
  </section>
</template>
