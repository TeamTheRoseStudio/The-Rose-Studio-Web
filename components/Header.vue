<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <div>
    <div
      class="flex items-center justify-between h-[94px] w-full bg-black md:justify-evenly md:space-x-96 space-x-20 lg:space-x-10 px-10 md:px-0 mt-4 xl:space-x-[75px] lg:justify-center 2xl:justify-center 2xl:space-x-[345px]"
    >
      <div>
        <img
          src="Logo.png"
          class="object-contain w-[97px] h-[50px] cursor-pointer"
          alt="The Rose Studio Logo"
        />
      </div>
      <div class="flex lg:hidden">
        <DropdownMenu></DropdownMenu>
      </div>
      <div class="space-x-10 hidden lg:flex lg:pl-10 2xl:pl-0">
        <a href="/" class="headerLink">Somos The Rose</a>
        <a href="/" class="headerLink">Consultoría</a>
        <DropdownMenuWithText></DropdownMenuWithText>
        <a href="/" class="headerLink">Precios</a>
        <a href="/" class="headerLink">Proyectos</a>
      </div>
      <div class="hidden lg:flex w-0 xl:w-[240px] 2xl:w-[200px]"></div>
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
