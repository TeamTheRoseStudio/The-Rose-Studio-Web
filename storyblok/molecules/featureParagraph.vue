<template>
  <div v-editable="blok" class=" bg-white">
    <div class="ms-4 sm:text-center">
      <div class="prose sm:mx-auto pt-10" v-html="renderRichText(blok.title)"></div>
      <div
        class="mb-10 sm:mx-auto bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-[190px]"
      ></div>
    </div>

    <div class="prose mx-4 h-screen text-center max-w-none" :class="blok.paragraph == '' ? 'h-screen' : ''" v-html="renderRichText(blok.paragraph)"></div>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>
<style scoped></style>
