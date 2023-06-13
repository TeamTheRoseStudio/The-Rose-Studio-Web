<template>
  <section class="h-full py-20 px-4 lg:px-48" v-editable="blok">
    <div>
      <h2
        v-html="renderRichText(blok.title)"
        class="mb-4 text-white text-start text-4xl tracking-tight font-extrabold"
      ></h2>
      <div
        class="bg-gradient-to-r from-[#F78888] to-[#F91616] h-[4px] w-[280px] md:w-[220px] lg:w-[280px] mb-3"
      ></div>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 place-items-start place-content-center mt-20 gap-20"
    >
      <StoryblokComponent
        v-for="blok_item in blok.cardHowWeDevelopYourIdea"
        :key="blok_item._uid"
        :blok="blok_item"
      />
    </div>
  </section>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
