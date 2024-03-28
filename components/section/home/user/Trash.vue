<script setup lang="ts">
import { BREAKSPOINTS } from "@/constants/swiper.constants"
import axios from "axios"

const { data: user } = <any>useAuth()
const id = user.value?.user?.id

interface TrashItem {
  category: string
  weight: number
}

const trashData = ref<TrashItem[]>([])

const test = computed(() => {
  const NewData = trashData.value.find((d: any) => d.category === "Besi")
  return NewData
})

const updatedCard = computed(() => {
  const updatedCardData = [...card]
  trashData.value.forEach((trashItem) => {
    const index = updatedCardData.findIndex(
      (cardItem) => cardItem.category === trashItem.category
    )
    if (index !== -1) {
      updatedCardData[index].weight = trashItem.weight
    }
  })
  return updatedCardData
})

const newTrashData = computed(() => {
  return updatedCard.value.filter((cardItem) => cardItem.weight !== 0)
})

const card = <CARD[]>[
  {
    category: "Plastik",
    weight: 0,
    color: "brgPrimary",
    dark: false,
  },
  {
    category: "Kertas",
    weight: 0,
    color: "brgSecondary",
    dark: false,
  },
  {
    category: "Besi",
    weight: 0,
    color: "brgPrimaryDark",
    dark: false,
  },
  {
    category: "Alumunium",
    weight: 0,
    color: "brgOrange",
    dark: false,
  },
  {
    category: "Botol Kaca",
    weight: 0,
    color: "brgWhite",
    dark: true,
  },
  {
    category: "Elektronik",
    weight: 0,
    color: "brgSecondaryDark",
    dark: false,
  },
  {
    category: "Cair",
    weight: 0,
    color: "brgBrown",
    dark: false,
  },
]

interface CARD {
  category: string
  weight: number
  color: string
  dark: boolean
}

onMounted(async () => {
  try {
    const res = await axios.get(`/api/v1/dashboard/user/${id}`)
    if (res) {
      const { totalAmount, ...resData } = res.data.data
      trashData.value = resData.trash
    } else {
      console.log("failed fetch api")
    }
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <section class="ps-6 mb-10">
    <h2 class="mb-6 text-xl font-semibold text-brg-primary-dark">
      Total sampahmu
    </h2>
    <div v-if="true">
      <Swiper :breakpoints="BREAKSPOINTS" :loop="true">
        <SwiperSlide v-for="data in newTrashData">
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
