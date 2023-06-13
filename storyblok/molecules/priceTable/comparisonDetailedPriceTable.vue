<template>
  <div class="overflow-hidden min-w-max">
    <StoryblokComponent
      v-for="blok_item in blok.comparisonDetailedPriceTableTitleAndLevels"
      :key="blok_item._uid"
      :blok="blok_item"
    />
    <StoryblokComponent
      v-for="blok_item in blok.comparisonDetailedPriceTableSubsections"
      :key="blok_item._uid"
      :blok="blok_item"
    />
  </div>
  <div class="grid grid-cols-5 gap-x-16 py-5 px-4 text-sm text-white">
    <div class="text-white dark:text-white"></div>
    <!--ButtonTRS-->
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
