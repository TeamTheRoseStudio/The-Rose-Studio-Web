<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
<script setup>
const { slug } = useRoute().params;

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? "servicios/" + slug : "home",
  { version: "draft" }
);
</script>
<style scoped></style>
