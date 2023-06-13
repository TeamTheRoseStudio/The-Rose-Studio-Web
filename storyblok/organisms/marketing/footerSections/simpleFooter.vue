<template>
  
  <footer
    class="bg-white rounded-lg shadow m-4 dark:bg-gray-800"
    v-editable="blok"
  >
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span class="text-sm text-white sm:text-center dark:text-white"
        >© {{ thisYear }}
        <NuxtLink
          v-for="text in blok.texts"
          v-editable="text"
          href="/"
          class="hover:underline"
        >
          {{ text.text }}
        </NuxtLink>
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0"
      >
        <li v-for="li in blok.items" class="md:mr-6 mr-4" v-editable="li">
          <NuxtLink :href="li.link" class=" hover:underline "><div class="prose" v-html="renderRichText(li.text)"></div></NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script setup>
defineProps({ blok: Object });
let thisYear = new Date().getFullYear();
</script>
