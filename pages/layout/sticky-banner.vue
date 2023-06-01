<template>
  <StoryblokComponent v-if="stickyBanner" :blok="stickyBanner.content" />
</template>
<script setup>
defineProps({ blok: Object });
definePageMeta({
  layout: false, // Hace que en Storyblok no se duplique el header / footer
});
const stickyBanner = await useAsyncStoryblok("layout/sticky-banner", {
  version: "draft",
});
</script>
