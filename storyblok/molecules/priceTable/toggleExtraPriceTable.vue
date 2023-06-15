<template>
<div>
      <button
      v-html="renderRichText(blok.title)"
      type="button"
      class="flex justify-center items-center mx-auto font-medium text-white dark-text-primary-400 hover:text-primary-700"
      data-collapse-toggle="detailed-pricing"
    >
  
    </button>
</div>
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
