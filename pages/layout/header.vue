<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
<script setup>
definePageMeta({
  layout: false, // Hace que en Storyblok no se duplique el header / footer
});
const story = await useAsyncStoryblok("layout/header", {
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
