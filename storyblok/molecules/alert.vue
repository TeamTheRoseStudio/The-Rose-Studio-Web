<template>
  <div
    v-editable="blok"
    id="alert-1"
    class="flex justify-between p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
    role="alert"
  >
    <div class="flex">
      <div v-if="blok.icon.icon" class="self-center">
        <font-awesome-icon :icon="blok.icon.icon" />
      </div>
      <span class="sr-only">Info</span>
      <div class="ml-3 prose" v-html="renderRichText(blok.title)"></div>
    </div>
    <div class="self-center ml-auto mr-2">
      <StoryblokComponent
        v-for="blok_item in blok.buttons"
        :key="blok_item._uid"
        :blok="blok_item"
        class="inline-block mx-2"
      />
    </div>
    <button
      type="button"
      class="self-center -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
      data-dismiss-target="#alert-1"
      aria-label="Close"
    >
      <span class="sr-only">Close</span>
      <svg
        aria-hidden="true"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
defineProps({ blok: Object });
</script>
