<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <div>
    <div
      class="hidden lg:flex w-full bg-black h-20 sticky top-0 items-center justify-center lg:justify-between px-40 space-x-10 lg:space-x-0"
    >
      <div class="flex space-x-4">
        <font-awesome-icon
          class="mt-0.5"
          :icon="['fab', 'whatsapp']"
          size="lg"
          style="color: #ffffff"
        />
        <p class="text-white w-[90px]">655 555 555</p>
      </div>
      <div class="flex space-x-4">
        <font-awesome-icon
          :icon="['fab', 'facebook']"
          size="lg"
          style="color: #ffffff"
          class="cursor-pointer"
        />
        <font-awesome-icon
          :icon="['fab', 'twitter']"
          size="lg"
          style="color: #ffffff"
          class="cursor-pointer"
        />
        <font-awesome-icon
          :icon="['fab', 'instagram']"
          size="lg"
          style="color: #ffffff"
          class="cursor-pointer"
        />
        <font-awesome-icon
          :icon="['fab', 'linkedin']"
          size="lg"
          style="color: #ffffff"
          class="cursor-pointer"
        />
      </div>
      <div
        class="hidden max-w-[210px] max-h-[45pxs] md:w-full bg-gradient-to-r from-[#8A2387] to-[#F26021] md:pr-5 xl:inline-flex items-center justify-center hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        <a
          href="#"
          class="px-5 py-3 text-sm font-medium text-center text-white"
        >
          Agenda una cita
        </a>
        <font-awesome-icon
          :icon="['fass', 'comment-dots']"
          style="color: #ffffff"
          size="lg"
          class=""
        />
      </div>
    </div>
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
