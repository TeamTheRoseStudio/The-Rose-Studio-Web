<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <hero></hero>
</template>
<script setup>
defineProps({ blok: Object });
const story = await useAsyncStoryblok("home", {
  version: "draft",
});
</script>
