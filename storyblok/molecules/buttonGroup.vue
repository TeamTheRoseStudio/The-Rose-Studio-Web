<template>
  <div class="inline-flex rounded-md shadow-sm" role="group">
    <button
      v-for="(button, index) in blok.buttons"
      type="button"
      :class="[
        index === 0 ? 'border rounded-l-lg' : 'border-t border-b',
        index === blok.buttons.length - 1 ? 'rounded-r-md' : '',
      ]"
      class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
    >
      <div v-html="renderRichText(button.text)"></div>
    </button>
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
function getLength() {
  return props.blok.buttons.length;
}
console.log(getLength());
</script>
<style scoped></style>
