<template>
  <button data-dropdown-toggle="dropdown" type="button">
    <fontAwesomeIcon
      :icon="['fas', 'bars']"
      style="color: #ffffff"
      size="xl"
      class="cursor-pointer"
    />
  </button>
  <!-- Dropdown menu -->
  <div
    id="dropdown"
    class="z-10 hidden bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
      <li>
        <NuxtLink
          to="/"
          class="block px-4 py-2 hover:bg-gray-100/20 dark:hover:bg-gray-600/20 dark:hover:text-white"
          ><div class="prose text-white">Portfolio</div></NuxtLink
        >
        <NuxtLink
          to="/"
          class="block px-4 py-2 hover:bg-gray-100/20 dark:hover:bg-gray-600 dark:hover:text-white"
          ><div class="prose text-white">Servicios</div></NuxtLink
        >
        <NuxtLink
          to="/"
          class="block px-4 py-2 hover:bg-gray-100/20 dark:hover:bg-gray-600 dark:hover:text-white"
          ><div class="prose text-white">Testimonios</div></NuxtLink
        >
        <NuxtLink
          to="/"
          class="block px-4 py-2 hover:bg-gray-100/20 dark:hover:bg-gray-600 dark:hover:text-white"
          ><div class="prose text-white">Conversemos</div></NuxtLink
        >
        <NuxtLink
          to="/"
          class="block px-4 py-2 hover:bg-gray-100/20 dark:hover:bg-gray-600 dark:hover:text-white"
          ><div class="prose text-white">Somos The Rose</div></NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>
