<script setup>
const storyHeader = await useAsyncStoryblok("layout/header", {
  version: "draft",
});

const storyFooter = await useAsyncStoryblok("layout/footer", {
  version: "draft",
});
const stickyBanner = await useAsyncStoryblok("layout/sticky-banner", {
  version: "draft",
});
</script>
<template>
  <!--STICKY BANNER-->
  <StoryblokComponent :blok="stickyBanner.content" />
  <!--STORYBLOK HEADER-->
  <StoryblokComponent :blok="storyHeader.content" />
  <!--DISPLAY CONTENT PAGE-->
  <slot />
  <!--STORYBLOK FOOTER-->
  <StoryblokComponent :blok="storyFooter.content" />
</template>
