<template>
  <StoryblokComponent
      v-for="blok_item in blok.ButtonToggleDetailedComparisonPriceTable"
      :key="blok_item._uid"
      :blok="blok_item"
    />
  <div id="detailed-pricing" class="hidden overflow-x-auto mt-8 w-full">
    <StoryblokComponent
      v-for="blok_item in blok.ComparisonDetailedPriceTable"
      :key="blok_item._uid"
      :blok="blok_item"
    />
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
