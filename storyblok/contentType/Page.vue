<template>
  <div class="bg-body " v-editable="blok" :style="styleObject">
    <StoryblokComponent
      v-for="blok_item in blok.body"
      :key="blok._uid"
      :blok="blok_item"
    />
  </div>
</template>

<script setup>
const prop = defineProps({ blok: Object });

const styleObject = computed(() => {
  return {
    "--body-color": prop.blok.pageColor?.color,
  };
});
</script>
<style scoped>
body,
.bg-body {
  background-color: var(--body-color);
  
}
</style>
