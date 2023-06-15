<template>
  <StoryblokComponent class="pt-10" v-if="story" :blok="story.content" />
</template>
<script setup>
const story = await useAsyncStoryblok("/consultoria/", { version: "draft" });
</script>
<style scoped></style>
