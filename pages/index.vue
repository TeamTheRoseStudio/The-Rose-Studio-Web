<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <VisualImageWithHeading></VisualImageWithHeading>
</template>
<script setup>
defineProps({ blok: Object });
const story = await useAsyncStoryblok("home", {
  version: "draft",
});
</script>
