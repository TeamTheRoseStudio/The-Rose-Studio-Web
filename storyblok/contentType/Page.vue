<template>
  <div class="bg-body" v-editable="blok" :style="styleObject">
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

useHead({
  titleTemplate: `${prop.blok.pageName} - The Rose Studio`
})

definePageMeta({
  name: "description",
  description: prop.blok.metatags?.description,
  og_description: prop.blok.metatags?.og_description,
  og_image: prop.blok.metatags?.og_image,
  og_title: prop.blok.metatags?.og_title,
  title: prop.blok.metatags?.title,
  twitter_description: prop.blok.metatags?.twitter_description,
  twitter_image: prop.blok.metatags?.twitter_image,
  twitter_title: prop.blok.metatags?.twitter_title,
});
</script>
<style scoped>
body,
.bg-body {
  background-color: var(--body-color);
}
</style>
