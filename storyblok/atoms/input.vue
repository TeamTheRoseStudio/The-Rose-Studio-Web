<template>
  <div class="grid gap-6 mb-6" :class="blok.button != '' ? 'md:grid-cols-2' : ''" v-editable="blok">
    <div>
      <div
        for="first_name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        v-html="renderRichText(blok.text)"
      ></div>
      <input
        :type="blok.type"
        id="first_name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :placeholder="blok.placeholder"
        required
      />

    </div>
    <StoryblokComponent
        v-for="blok_item in blok.button"
        :key="blok_item._uid"
        :blok="blok_item"
        class="self-end"
      />
  </div>
</template>
<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped></style>
