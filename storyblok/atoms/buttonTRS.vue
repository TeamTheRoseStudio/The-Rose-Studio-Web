<template>
  <NuxtLink v-editable="blok" :to="blok.link.cached_url">
    <button
      type="button"
      class="bg-gradient-to-r from-[#F78888] to-[#F91616] pr-5 inline-flex items-center justify-center"
    >
      <div class="px-5 py-3 text-sm font-medium text-center text-white">
        {{ blok.title }}
      </div>
    </button>
  </NuxtLink>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
