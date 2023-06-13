<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <NuxtLink
          :href="route.path"
          class="ml-2 inline-flex items-center text-sm font-medium text-white hover:text-blue-600 dark:text-white dark:hover:text-white"
        >
          {{ route.fullPath }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>
<script setup>
defineProps({blok:Object})



</script>
