<template>
  <div class="p-6 bg-white m-1 shadow-slate-400 shadow-lg" v-editable="blok">
    <NuxtImg
      provider="storyblok"
      format="webp"
      :preload="true"
      :src="image.filename"
      class="w-full shadow-xl"
      :alt="image.alt"
    />
    <NuxtLink :to="`/${full_slug}`">
      <div
        class="my-3 text-xl font-poppins font-bold dark:text-white text-terciario"
      >
        {{ title }}
      </div>
      <div class="p2-rubik font-light prose text-gray-500 dark:text-gray-400">
        {{ description }}
      </div>
    </NuxtLink>
    <div class="font-light text-slate-400 dark:text-gray-400">
      Publicado el {{ date }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: Object,
  full_slug: String,
  author: Object,
  date: String,
});
</script>
