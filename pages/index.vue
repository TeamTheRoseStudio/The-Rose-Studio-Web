<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <TawTo></TawTo>
</template>
<script setup>
const story = await useAsyncStoryblok("home", {
  version: "draft",
});
</script>
<style scoped></style>
