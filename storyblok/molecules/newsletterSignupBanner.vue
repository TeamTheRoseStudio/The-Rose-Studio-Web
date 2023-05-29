<template>
  <div v-editable="blok"
    id="newsletter-banner"
    tabindex="-1"
    :class="blok.position"
    class="fixed left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
  >
    <div class="flex items-center flex-shrink-0 w-full mx-auto sm:w-auto">
      <form action="#" class="flex flex-col items-center w-full md:flex-row">
        <div
          for="email"
          class="flex-shrink-0 mb-2 mr-auto text-sm font-medium text-gray-500 md:mb-0 md:mr-4 dark:text-gray-400 md:m-0"
          v-html="renderRichText(blok.text)"></div
        >
        <input
          type="email"
          id="email"
          :placeholder="blok.placeholder"
          class="bg-white border border-gray-300 text-gray-900 md:w-64 mb-2 md:mb-0 md:mr-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      <StoryblokComponent
      v-for='blok_item in blok.button'
      :key='blok_item._uid'
      :blok='blok_item' />
      </form>
    </div>
    <div
      class="flex items-center absolute top-2.5 right-2.5 md:relative md:top-auto md:right-auto"
    >
      <button
        data-dismiss-target="#newsletter-banner"
        type="button"
        class="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          class="w-4 h-4"
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
        <span class="sr-only">Close banner</span>
      </button>
    </div>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>
