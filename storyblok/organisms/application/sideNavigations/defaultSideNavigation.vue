<template>
  <div v-editable="blok">
    <!-- drawer init and show -->
    <div class="text-center">
      <button
        class="text-white bg-gray-100 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="button"
        data-drawer-target="drawer-navigation"
        data-drawer-show="drawer-navigation"
        aria-controls="drawer-navigation"
      >
        Show navigation
      </button>
    </div>

    <!-- drawer component -->
    <div
      id="drawer-navigation"
      class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
      tabindex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <div
        id="drawer-navigation-label"
        class="prose"
        v-html="renderRichText(blok.title)"
      ></div>
      <button
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        class="text-white bg-transparent hover:bg-gray-200 hover:text-white rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
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
        <span class="sr-only">Close menu</span>
      </button>
      <div class="py-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li v-for="li in blok.item">
            <a
              href="#"
              class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div v-if="li.icon.icon">
                <FontAwesomeIcon :icon="li.icon.icon"></FontAwesomeIcon>
              </div>

              <span class="ml-3">{{ li.text }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
defineProps({ blok: Object });
</script>
<style scoped></style>
