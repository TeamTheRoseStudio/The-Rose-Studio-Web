<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
<script setup>
defineProps({ blok: Object });
definePageMeta({
  layout: false, // Hace que en Storyblok no se duplique el header / footer
});
const story = await useAsyncStoryblok("layout/header", {
  version: "draft",
});
</script>
