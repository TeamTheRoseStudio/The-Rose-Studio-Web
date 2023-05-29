<template>
  <div
    v-editable="blok"
    class="rounded-2xl m-10 pt-10 pb-8"
    :class="[
      useBackgroundColor()[blok.color_palette?.value],
      useTextColor()[blok.text_palette?.value],
    ]"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center flex-col">
      <div class="mx-auto max-w-2xl text-center">
        <div
          class="text-3xl font-bold tracking-tight  sm:text-4xl"
          v-html="renderRichText(blok.title)"
        ></div>
        <div
          class="mt-2 text-lg leading-8"
          v-html="renderRichText(blok.description)"
        ></div>
      </div>
      <div
        class="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <StoryblokComponent
          v-for="blok_item in blok.cards"
          :key="blok_item._uid"
          :blok="blok_item"
        />
      </div>
      <div class="mx-auto mt-6 text-center">
        <StoryblokComponent
          v-for="blok_item in blok.buttons"
          class="m-1"
          :key="blok_item._uid"
          :blok="blok_item"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>
