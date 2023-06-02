<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  
  <FeatureListCards />
  <Services />
  <Testimonios />
</template>
<script setup>
const story = await useAsyncStoryblok("home", {
  version: "draft",
});
</script>
<style scoped></style>
