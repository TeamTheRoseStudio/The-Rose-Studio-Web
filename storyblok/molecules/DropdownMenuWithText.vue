<template>
  <button
    data-dropdown-toggle="dropdownWithText"
    class="text-white text-sm text-center inline-flex items-center"
    type="button"
  >
    <div class="text-white/80 cursor-pointer font-rubik text-[16px]">
      {{ blok.title }}
    </div>
    <svg
      class="w-4 h-4 ml-2"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  </button>
  <!-- Dropdown menu -->
  <div
    id="dropdownWithText"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
  >
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
      <li v-for="li in blok.dropdownItem">
        <NuxtLink
          :to="`/${li.link.cached_url}`"
          :replace="true"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          ><div class="prose cursor-pointer">{{ li.name }}</div></NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>
