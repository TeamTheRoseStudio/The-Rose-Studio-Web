<template>
  <div v-editable="blok" class="bg-white">
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div
        class="relative isolate overflow-hidden px-6 pt-16 shadow-2xl mx-2 rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
        :class="[
          useBackgroundColor()[blok.color_palette.value],
          useTextColor()[blok.text_palette.value],
        ]"
      >
        <svg
          viewBox="0 0 1024 1024"
          class="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fill-opacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div
          class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
        >
          <div
            class="text-3xl font-bold tracking-tight sm:text-4xl"
            v-html="renderRichText(blok.title)"
          ></div>
          <div
            class="mt-6 text-lg leading-8"
            v-html="renderRichText(blok.description)"
          ></div>
          <div
            class="my-10 flex items-center justify-center gap-x-6 lg:justify-start"
          >
            <StoryblokComponent
              v-for="blok_item in blok.buttons"
              class="m-1"
              :key="blok_item._uid"
              :blok="blok_item"
            />
          </div>
        </div>
        <div class="relative mt-16  w-[34rem] h-20 lg:mt-20 hidden sm:block">
          <img
            class=" rounded-md bg-white/5 ring-1 ring-white/10"
            :src="blok.image.filename"
            :title="blok.image.title"
            :alt="blok.image.alt"

          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
