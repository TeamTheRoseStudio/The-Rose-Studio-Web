<template>
  <div class="flex items-center space-x-4" v-editable="blok">
    <div
      id="avatar-image"
      role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      v-html="renderRichText(blok.name)"
    >
    </div>
    <img
      v-if="blok.image.filename"
      data-tooltip-target="avatar-image"
      :class="[blok.size, blok.style]"
      :src="blok.image.filename"
      :alt="blok.image.alt"
    />

    <div
      v-else
      class="relative overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
    >
      <svg
        class="absolute text-white -left-1"
        :class="blok.size"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
    <div class="font-medium dark:text-white">
      <div class="prose" v-html="renderRichText(blok.name)"></div>
    </div>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>
