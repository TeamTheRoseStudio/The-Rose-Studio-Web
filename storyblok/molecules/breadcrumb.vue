<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <NuxtLink
          :href="route.path"
          class="ml-2 inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
        >
          {{ route.fullPath }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>
<script setup>
defineProps({blok:Object})
const route = useRoute();
console.log(route);

</script>
