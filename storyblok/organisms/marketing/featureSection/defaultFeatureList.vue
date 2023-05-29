<template>
  <section class="bg-white dark:bg-gray-900" v-editable="blok">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16">
        <div
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          {{ blok.title }}
        </div>
        <p class="text-gray-500 sm:text-xl dark:text-gray-400">
          {{ blok.paragraph }}
        </p>
      </div>
      <StoryblokComponent
      v-for='blok_item in blok.grid'
      :key='blok_item._uid'
      :blok='blok_item' />
    </div>
  </section>
</template>
<script setup>
defineProps({ blok: Object });
</script>
