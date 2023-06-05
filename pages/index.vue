<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <Testimonios />
  <ContactForm />
  <MainFooter />
</template>
<script setup>
const story = await useAsyncStoryblok("home", {
  version: "draft",
});
</script>
<style scoped></style>
