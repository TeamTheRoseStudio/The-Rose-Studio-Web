<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <div
    class="flex items-center justify-evenly h-[94px] md:h-[99px] w-full bg-black space-x-4 gradient__bg"
  >
    <div class="flex">
      <img
        src="Logo.png"
        class="object-contain w-[97px] h-[50px]"
        alt="The Rose Studio Logo"
      />
      <!-- <fontAwesomeIcon
          :icon="['fas', 'bars']"
          style="color: #ffffff"
          size="xl"
          class="flex md:hidden"
        /> -->
    </div>
    <div class="space-x-10 hidden md:flex">
      <a class="headerLink">Portfolio</a>
      <a class="headerLink">Servicios</a>
      <a class="headerLink">Testimonios</a>
      <a class="headerLink">Conversemos</a>
      <a class="headerLink">Somos The Rose</a>
    </div>
    <div class="flex space-x-4">
      <fontAwesomeIcon
        :icon="['fas', 'bars']"
        style="color: #ffffff"
        size="xl"
        class="hidden md:flex"
      />
      <fontAwesomeIcon
        :icon="['fas', 'bars']"
        style="color: #ffffff"
        size="xl"
        class="hidden md:flex"
      />
      <fontAwesomeIcon
        :icon="['fas', 'bars']"
        style="color: #ffffff"
        size="xl"
        class="hidden md:flex"
      />
      <fontAwesomeIcon
        :icon="['fas', 'bars']"
        style="color: #ffffff"
        size="xl"
        class="hidden md:flex"
      />
    </div>
  </div>
  <!-- <div className="flex items-center space-x-4 text-sm font-light">
      <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
      <p className="hidden lg:inline">Kids</p>
      <BellIcon className="h-6 w-6" />
      <Link href="/account">
        <img
          src="https://rb.gy/g1pwyx"
          alt=""
          className="cursor-pointer rounded"
        />
      </Link>
    </div> -->
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({ blok: Object });
const story = await useAsyncStoryblok("home", {
  version: "draft",
});
</script>
