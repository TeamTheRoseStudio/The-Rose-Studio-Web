<template>
  <div>
    <kbd
      class="px-2 py-1.5 text-xs font-semibold text-white bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-white dark:border-gray-500"
      >{{ blok.text }}</kbd
    >
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>
<style scoped></style>
