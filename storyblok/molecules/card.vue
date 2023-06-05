<template>
  <div class="p-6" v-editable="blok">
    <NuxtImg
      provider="storyblok"
      format="webp"
      :preload="true"
      :src="blok.image.filename"
      class="w-full"
      :alt="blok.image.alt"
    />
    <div
      class="my-3 text-xl font-poppins font-bold dark:text-white text-terciario"
      v-html="renderRichText(blok.title)"
    ></div>
    <div
      class="p2-rubik font-light prose text-gray-500 dark:text-gray-400"
      v-html="renderRichText(blok.paragraph)"
    ></div>
    <StoryblokComponent
      v-for="blok_item in blok.buttons"
      :key="blok_item._uid"
      :blok="blok_item"
      class="bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 text-center text-sm text-white"
    />
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>

<style scoped>
</style>
