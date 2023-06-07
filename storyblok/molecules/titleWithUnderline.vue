<template>
  <div
    class="flex items-left md:items-center w-full flex-col"
    v-editable="blok"
  >
    <h2
      v-html="renderRichText(blok.title)"
      class="mb-4 text-5xl md:text-7xl tracking-tight font-extrabold text-left md:text-center text-white"
    ></h2>
    <div
      class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-full md:w-[420px] mb-3"
    ></div>
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
