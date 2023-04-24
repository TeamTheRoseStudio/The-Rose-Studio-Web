<template>
  <li>
    <NuxtLink
    :to="blok.href">
      <div
        class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
        aria-current="page"
        v-html="renderRichText(blok.text)"
      ></div>
    </NuxtLink>
  </li>
</template>
<script setup>
defineProps({ blok: Object });
</script>
