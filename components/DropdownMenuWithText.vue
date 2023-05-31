<template>
  <button
    data-dropdown-toggle="dropdownWithText"
    class="text-white text-sm text-center inline-flex items-center"
    type="button"
  >
    <div class="text-white/80 cursor-pointer font-rubik text-[16px]">
      Servicios
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
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
      <li>
        <NuxtLink
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          ><div class="prose">Creación WEB</div></NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          ><div class="prose">Imagen de marca</div></NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          ><div class="prose">Edición de video</div></NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          ><div class="prose">Posicionamiento SEO</div></NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          ><div class="prose">Campañas publicitarias</div></NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          ><div class="prose">Copywriting</div></NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          ><div class="prose">Gestión de Redes Sociales</div></NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
<script setup></script>
