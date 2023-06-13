<template>
  <button data-dropdown-toggle="dropdown" type="button">
    <font-awesome-icon icon="bars" size="xl" style="color: #ffffff" class="cursor-pointer me-5" />
  </button>
  <!-- Dropdown menu -->
  <div
    id="dropdown"
    class="z-10 hidden bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
      <li v-for="li in prop.items">
        <NuxtLink
          :to="`${li.link.cached_url}`"
          class="block px-4 py-2 hover:bg-gray-100/20"
          ><div class="prose text-white">{{ li.text }}</div></NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
const prop = defineProps({items: Object})
</script>
