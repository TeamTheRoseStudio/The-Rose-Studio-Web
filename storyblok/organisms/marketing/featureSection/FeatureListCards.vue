<template>
  <section class="bg-white" v-editable="blok">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="md:grid md:grid-cols-3 md:w-full text-center mb-8 lg:mb-16">
        <div>
          <div
            :id="blok.id"
            class="mb-4 text-start text-5xl tracking-tight font-extrabold text-gray-900"
            v-html="renderRichText(blok.title)"
          ></div>
          <div
            class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-[190px] mb-3"
          ></div>
        </div>
        <div
          class="md:col-span-2 md:ms-10 text-start font-light text-gray-500 dark:text-gray-400 sm:text-xl"
          v-html="renderRichText(blok.paragraph)"
        ></div>
      </div>
      <!--CARDS GRID -->
      <div class="grid grid-cols-1 md:grid-cols-3">
        <!--Card 1-->
        <StoryblokComponent
          v-for="blok_item in blok.cards"
          :key="blok_item._uid"
          :blok="blok_item"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
<style scoped></style>
