<template>
  <div
    class="grid grid-cols-5 gap-x-16 p-4 text-sm font-medium text-white bg-black border-t border-b border-gray-200"
  >
    <!-- detailed plan comparison title -->
    <div v-html="renderRichText(blok.title)" class="flex items-center"></div>
    <!-- detailed plan comparison levels -->
    <div v-html="renderRichText(blok.level)"></div>
    <div v-html="renderRichText(blok.level2)"></div>
    <div v-html="renderRichText(blok.level3)"></div>
    <div v-html="renderRichText(blok.level4)"></div>
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
