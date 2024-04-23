<template>
  <div class="fixed w-full max-w-[450px] bottom-[10%] z-50">
    <NuxtLink to="/user/transaction/add">
      <div
        class="absolute bottom-[12%] z-50 right-4 w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-brg-primary"
      >
        <Icon
          name="heroicons:plus-16-solid"
          size="35px"
          class="text-white text-center"
        />
      </div>
    </NuxtLink>
  </div>
</template>
