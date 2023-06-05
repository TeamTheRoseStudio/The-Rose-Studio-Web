<template>
  <section
    class="bg-dark gradient_bg_orange_services mb-20 h-full"
    v-editable="blok"
  >
    <div class="gradient_bg_purple_services">
      <div
        class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 gradient_bg_orange_services_mobile"
      >
        <div class="md:grid md:grid-cols-3 md:w-full text-center mb-8 lg:mb-16">
          <div>
            <div
              class="mb-4 text-start text-5xl tracking-tight font-extrabold text-white"
              v-html="renderRichText(blok.title)"
            ></div>
            <div
              class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-[190px] mb-3"
            ></div>
          </div>
          <div
            class="md:col-span-2 md:ms-10 text-start font-light text-white dark:text-gray-400 sm:text-xl"
            v-html="renderRichText(blok.paragraph)"
          ></div>
        </div>
        <!--Services GRID -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 pl-2 pt-20 gap-y-20 md:gap-x-4 lg:gap-x-10"
        >
          <div class="space-y-4" v-for="item in blok.items" v-editable="item">
            <NuxtImg
              provider="storyblok"
              format="webp"
              :preload="true"
              :alt="item.image.alt"
              :src="item.image.filename"
            />
            <div
              class="text-white text-3xl"
              v-html="renderRichText(item.title)"
            ></div>
            <div
              class="text-white"
              v-html="renderRichText(item.paragraph)"
            ></div>
            <div
              class="md:ml-0 bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center"
            >
              <StoryblokComponent
                v-for="blok_item in item.button"
                :key="blok_item._uid"
                :blok="blok_item"
                class="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({ blok: Object });
</script>
