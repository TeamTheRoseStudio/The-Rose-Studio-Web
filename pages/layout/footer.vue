<script setup lang="ts">
definePageMeta({
  layout: false, // Hace que en Storyblok no se duplique el header / footer
});
const story = await useAsyncStoryblok("layout/footer", {
  version: "draft",
});

useHead({
  meta: [
    {
      name: "robots",
      content: "noindex",
    },
  ],
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
