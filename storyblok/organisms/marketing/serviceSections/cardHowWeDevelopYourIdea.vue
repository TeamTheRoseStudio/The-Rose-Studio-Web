<template>
  <div v-editable="blok" class="space-y-4">
    <div
      v-html="renderRichText(blok.title)"
      class="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#F78888] to-[#F91616]"
    ></div>
    <div
      v-html="renderRichText(blok.title2)"
      class="text-2xl font-semibold"
    ></div>
    <div
      v-html="renderRichText(blok.paragraph)"
      class="text-lg text-white"
    ></div>
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
