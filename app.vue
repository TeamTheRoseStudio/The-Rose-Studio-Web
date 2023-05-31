<template>
  <StoryblokComponent :blok="stickyBanner.content" class="sticky top-0 z-10" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { initFlowbite } from "flowbite";
onMounted(() => {
  initFlowbite();
});
const stickyBanner = await useAsyncStoryblok("layout/sticky-banner", {
  version: "draft",
});
</script>
