<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
<script setup>
defineProps({ blok: Object });
const story = await useAsyncStoryblok("layout/header", {
  version: "draft",
});
</script>
