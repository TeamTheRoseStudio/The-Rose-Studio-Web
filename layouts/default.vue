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
    <ClientOnly> <Header /></ClientOnly>
    <slot />
    <!--FOOTER-->
    <!-- <StoryblokComponent :blok="storyFooter.content" /> -->
  </div>
</template>
