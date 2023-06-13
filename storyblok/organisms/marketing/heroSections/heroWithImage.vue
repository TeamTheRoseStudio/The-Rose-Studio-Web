<template>
  <div v-editable="blok" class="relative isolate overflow-hidden bg-white">
    <div
      class="mx-auto max-w-7xl px-6 py-10 sm:pb-32 lg:flex lg:py-12 lg:px-8 justify-center items-center"
    >
      <div
        class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"
      >
        <img
          class="h-15"
          :src="blok.logotipo.filename"
          :title="blok.logotipo.title"
          :alt="blok.logotipo.alt"
        />
        <div class="mt-14">
          <a href="#" class="inline-flex space-x-6">
            <span
              class="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10"
              v-html="renderRichText(blok.badge)"
            ></span>
          </a>
        </div>
        <div
          class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl"
          v-html="renderRichText(blok.title)"
        ></div>
        <div
          class="mt-6 text-lg leading-8 text-white"
          v-html="renderRichText(blok.description)"
        ></div>
        <div class="mt-10 flex items-center gap-x-6">
          <StoryblokComponent
            v-for="blok_item in blok.buttons"
            class="m-1"
            :key="blok_item._uid"
            :blok="blok_item"
          />
        </div>
      </div>
      <div
        class="mx-auto mt-10 max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none xl:ml-32"
      >
        <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <div
            class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
          >
            <img
              :src="blok.image.filename"
              :title="blok.image.title"
              :alt="blok.image.alt"
              width="2432"
              height="1442"
              class="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>
