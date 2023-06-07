<template>
  <div class="space-y-4">
    <h3
      v-html="renderRichText(blok.title)"
      class="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#8A2387] to-[#F26021]"
    ></h3>
    <h4 v-html="renderRichText(blok.title)" class="text-2xl font-semibold"></h4>
    <p
      v-html="renderRichText(blok.paragraph)"
      class="text-lg text-gray-400"
    ></p>
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
