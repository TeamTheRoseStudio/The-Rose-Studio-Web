<template>
  <div
    class="grid grid-cols-5 gap-x-16 py-5 px-4 text-sm text-white border-b border-gray-200 dark:border-gray-700"
  >
    <!-- detailed plan comparison items -->
    <div v-html="renderRichText(blok.title)" class="text-white"></div>
    <!-- detailed plan comparison check icons -->
    <FontAwesomeIcon :icon="blok.ListItemPriceIcon.icon" />
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const props = defineProps({ blok: Object });
</script>
