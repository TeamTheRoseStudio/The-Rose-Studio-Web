<template>
  <section class="m-2 rounded dark:bg-gray-900" v-editable="blok">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
        >
          {{ blok.title }}
        </h1>
        <div
          class="prose"
          v-html="renderRichText(blok.paragraph)"
        >
        </div>
        <StoryblokComponent
        v-for='blok_item in blok.buttons'
        :key='blok_item._uid'
        :blok='blok_item'
        class="inline-block mx-2 my-2"
        />
      </div>
      <div class="lg:mt-0 mt-2 lg:col-span-5 lg:flex">
        <img
          :src="blok.image.filename"
          :alt="blok.image.alt"
          class="rounded"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({ blok: Object });
</script>
