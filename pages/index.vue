<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
<script setup>
defineProps({ blok: Object });
const story = await useStoryblok("home", {
  version: "draft",
});
</script>
