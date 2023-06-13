<template>
  <section class="bg-black gradient_bg_orange_testimonios" v-editable="blok">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 my-10">
      <div class="md:grid md:grid-cols-3 md:w-full text-center mb-8 lg:mb-16">
        <div>
          <div
            v-html="renderRichText(blok.title)"
            class="mb-4 text-start text-white text-5xl md:text-4xl lg:text-5xl tracking-tight font-extrabold"
          ></div>
          <div
            class="bg-gradient-to-r from-[#F78888] to-[#F91616] h-[2.81px] w-[280px] md:w-[220px] lg:w-[280px] mb-3"
          ></div>
        </div>
        <div
          v-html="renderRichText(blok.paragraph)"
          class="md:col-span-2 prose max-w-none md:ms-10 text-start font-light text-white sm:text-xl"
        ></div>
      </div>
      <!--Services GRID -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-x-8 gap-y-14"
      >
        <StoryblokComponent
          v-for="blok_item in blok.testimonialCards"
          :key="blok_item._uid"
          :blok="blok_item"
        />
      </div>

      <div class="flex items-left md:items-center w-full flex-col mt-20">
        <div
          v-html="renderRichText(blok.subtitle)"
          class="mb-4 text-5xl md:text-7xl tracking-tight font-extrabold text-left md:text-center"
        ></div>
        <div
          class="bg-gradient-to-r from-[#F78888] to-[#F91616] h-[2.81px] w-full md:w-[420px] mb-3"
        ></div>
      </div>
      <div
        class="grid grid-cols-3 grid-rows-3 place-content-center place-items-center gap-y-16 mt-14"
      >
        <div v-for="image in blok.images">
          <NuxtImg
            provider="storyblok"
            format="webp"
            :preload="true"
            :src="image.filename"
            :alt="image.alt"
          />
        </div>
      </div>
      <div class="flex w-full justify-center mt-20 mb-10 lg:mb-0">
        <div
          class="bg-gradient-to-r from-[#F78888] to-[#F91616] text-white pr-5 inline-flex items-center justify-center"
        >
          <StoryblokComponent
            v-for="blok_item in blok.button"
            :key="blok_item._uid"
            :blok="blok_item"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
<style scoped></style>
