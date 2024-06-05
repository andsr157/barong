<template>
  <div
    class="flex flex-col bg-slate-200 gap-y-6 w-full min-h-[145px] px-[14px] py-3 rounded-[10px]"
  >
    <div class="flex justify-between">
      <h3 class="w-32 bg-slate-300 h-7 rounded-md animate-pulse"></h3>
      <span class="w-12 h-5 bg-slate-300 rounded-md animate-pulse"></span>
    </div>
    <div>
      <div class="flex gap-x-2 items-center mb-5">
        <div class="rounded-full w-11 h-11 bg-slate-300 animate-pulse"></div>
        <span class="w-40 h-7 bg-slate-300 rounded-md animate-pulse"></span>
      </div>
      <div class="flex justify-between items-end">
        <p class="w-16 h-5 rounded-md bg-slate-300 animate-pulse"></p>
        <div class="w-20 h-8 rounded-md bg-slate-300 animate-pulse"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fast-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-fast-pulse {
  animation: fast-pulse 1.5s infinite;
}
</style>
