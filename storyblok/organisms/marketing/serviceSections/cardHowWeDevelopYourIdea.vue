<template>
  <div v-editable="blok" class="space-y-4">
    <h3
      v-html="renderRichText(blok.title)"
      class="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#8A2387] to-[#F26021]"
    ></h3>
    <div
      v-html="renderRichText(blok.title2)"
      class="text-2xl font-semibold"
    ></div>
    <div
      v-html="renderRichText(blok.paragraph)"
      class="text-lg text-gray-400"
    ></div>
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
