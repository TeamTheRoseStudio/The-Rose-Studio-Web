<script setup lang="ts">
definePageMeta({
  // disable a default layout
  layout: false,
});
const story = await useAsyncStoryblok("layout/footer", {
  version: "draft",
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
