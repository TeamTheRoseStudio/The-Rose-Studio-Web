<script setup>
const storyHeader = await useAsyncStoryblok("layout/header", {
  version: "draft",
});

const storyFooter = await useAsyncStoryblok("layout/footer", {
  version: "draft",
});
</script>
<template>
  <StickyBanner />
  <!--STORYBLOK HEADER-->
  <StoryblokComponent :blok="storyHeader.content" />
  <!--DISPLAY CONTENT PAGE-->
  <slot />
  <!--STORYBLOK FOOTER-->
  <StoryblokComponent :blok="storyFooter.content" />
</template>
