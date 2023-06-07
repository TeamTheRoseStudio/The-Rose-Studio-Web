<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
<script setup>
const { slug } = useRoute().params;

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? "servicios/" + slug.join("/") : "home",
  { version: "draft" }
);

console.log(slug.join("/servicios"))
</script>
<style scoped></style>
