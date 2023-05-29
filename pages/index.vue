<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <div
    class="flex items-center justify-between md:justify-evenly h-[94px] md:h-[99px] w-full bg-black space-x-20 md:space-x-4"
  >
    <div class="hidden justify-self-start md:flex">
      <img
        src="Logo.png"
        class="object-contain w-[97px] h-[50px]"
        alt="The Rose Studio Logo"
      />
    </div>
    <div class="flex md:hidden w-full items-center justify-between">
      <img
        src="Logo.png"
        class="object-contain w-[97px] h-[50px] -ms-16 cursor-pointer"
        alt="The Rose Studio Logo"
      />
      <TwitterSVG class="h-5" />
      <DropdownMenu />
    </div>
    <div class="space-x-10 hidden md:flex">
      <a href="/" class="headerLink">Portfolio</a>
      <a href="/" class="headerLink">Servicios</a>
      <a href="/" class="headerLink">Testimonios</a>
      <a href="/" class="headerLink">Conversemos</a>
      <a href="/" class="headerLink">Somos The Rose</a>
    </div>
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({ blok: Object });
const story = await useAsyncStoryblok("home", {
  version: "draft",
});
</script>
