<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="blok_item in blok.body"
      :key="blok._uid"
      :blok="blok_item"
    />
  </div>
  <div>
  </div>
</template>

<script setup>
const prop = defineProps({ blok: Object });
</script>
