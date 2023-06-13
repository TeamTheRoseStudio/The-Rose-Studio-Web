<template>
  <div
    v-editable="blok"
    class="py-10 bg-white border border-black/50 shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div
      class="text-center pb-6 text-terciario font-semibold text-lg"
      v-html="renderRichText(blok.title)"
    ></div>
    <div>
      <div
        class="mb-2 text-center"
        v-html="renderRichText(blok.subtitle)"
      ></div>
    </div>
    <div
      class="mb-3 prose-xl max-w-none text-center font-bold"
      v-html="renderRichText(blok.person)"
    ></div>
    <div class="text-center" v-html="renderRichText(blok.text)"></div>
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>

<style scoped></style>
