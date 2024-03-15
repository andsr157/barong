<script setup lang="ts">
const data = ref("")
</script>

<template>
  <section>
    <div class="flex gap-x-1 items-center mb-4">
      <h2 class="text-brg-primary-dark font-semibold">Catatan</h2>
      <div
        class="text-[10px] rounded-[20px] bg-brg-light-gray px-[10px] py-1 text-white"
      >
        <span>opsional</span>
      </div>
    </div>
    <textarea
      cols="10"
      rows="8"
      class="border-[1px] border-brg-light-gray w-full rounded-[20px] text-[11px] text-brg-primary-dark focus:outline-none py-3 px-4 font-medium"
      placeholder="isi catatan"
      v-model="data"
    >
    </textarea>
  </section>
</template>
