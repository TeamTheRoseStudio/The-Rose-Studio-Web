<template>
  <section class="bg-dark gradient_bg_orange_hero h-full" v-editable="blok">
    <div class="gradient_bg_purple_hero">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="px-10 md:px-20 pb-32 py-0 lg:py-40 order-2 lg:order-first">
          <div
            class="flex items-end space-x-3 lg:space-x-0 lg:items-center lg:space-y-8 pb-6 xl:space-x-4 md:pb-14"
          >
            <div
              v-html="renderRichText(blok.title)"
              class="leading-[50px] mb-1 lg:mb-4 inline-block text-3xl max-w-[300px] md:max-w-xl lg:min-w-[270px] font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white text-white"
            ></div>
            <h1
              class="xl:mr-0 mb-3 md:mb-0 lg:pt-2 xl:pt-5 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#8A2387] to-[#F26021]"
            >
              {{ blok.featuredTitleText }}
            </h1>
          </div>
          <div
            class="prose max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            v-html="renderRichText(blok.paragraph)"
          ></div>
          <div
            class="mt-4 bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <StoryblokComponent
              v-for="blok_item in blok.button"
              :key="blok_item._uid"
              :blok="blok_item"
              class="text-white"
            />
          </div>
        </div>
        <div
          class="flex-col lg:mt-0 justify-end flex md:flex pt-12 pb-4 items-end md:items-right order-1 lg:order-last"
        >
          <NuxtImg
            provider="storyblok"
            :preload="true"
            format="webp"
            :src="blok.image.filename"
            class="object-cover w-[300px] h-[310px] object-left md:object-left md:w-[400px] md:h-[410px] lg:w-[800px] lg:h-[830px]"
            :alt="blok.image.alt"
          />
        </div>
      </div>
      <div class="lg:flex hidden items-center justify-center w-full">
        <NuxtLink to="#" class="flex space-x-3 cursor-pointer mb-6">
          <font-awesome-icon
            :icon="['fas', 'arrow-down']"
            style="color: #ffffff"
            class="mt-[6.5px]"
          />
          <p class="text-white text-lg">Descubre más</p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
<style scoped></style>
