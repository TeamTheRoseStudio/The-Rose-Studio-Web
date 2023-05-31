<script setup>
const storyHeader = await useAsyncStoryblok("layout/header", {
  version: "draft",
});

const storyFooter = await useAsyncStoryblok("layout/footer", {
  version: "draft",
});
</script>
<template>
  <div>
    <!--HEADER-->
    <!-- <StoryblokComponent :blok="storyHeader.content" /> -->
    <slot />
    <!--FOOTER-->
    <!-- <StoryblokComponent :blok="storyFooter.content" /> -->
  </div>
</template>
