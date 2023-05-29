<template>
  <div v-editable="blok" class="bg-white">
    <div class="sm:mx-64 max-w-7xl sm:my-16 sm:px-6 lg:px-8">
      <div
        class="relative isolate overflow-hidden px-6 py-14 text-center shadow-2xl sm:rounded-3xl sm:px-16"
        :class="[
          useBackgroundColor()[blok.color_palette.value],
          useTextColor()[blok.text_palette.value],
        ]"
      >
        <div
          class="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl"
          v-html="renderRichText(blok.title)"
        ></div>
        <div
          class="mx-auto mt-6 max-w-xl text-lg leading-8"
          v-html="renderRichText(blok.description)"
        ></div>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <StoryblokComponent
            v-for="blok_item in blok.buttons"
            class="m-1"
            :key="blok_item._uid"
            :blok="blok_item"
          />
        </div>
        <svg
          viewBox="0 0 1024 1024"
          class="absolute top-44 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fill-opacity="0.7"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
