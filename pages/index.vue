<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <VisualImageWithHeading></VisualImageWithHeading>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({ blok: Object });
const story = await useAsyncStoryblok("home", {
  version: "draft",
});
</script>
