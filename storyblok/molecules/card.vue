<template>
  <div
    v-editable="blok"
    class="opacity-75 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
      <div v-if="blok.heading_icon?.icon" class=" text-center" :class="blok.heading_icon_size">
        <font-awesome-icon :icon="blok.heading_icon.icon" />
      </div>
    <a :href="blok.link.url" v-if="blok.image.filename && !blok.heading_icon.icon">
      <img
        class="rounded-t-lg w-full object-none h-1/2 object-center"
        :src="blok.image.filename"
        :alt="blok.image.alt"
      />
    </a>
    <div class="p-5 w-full">
      <a :href="blok.link.url" class="w-full">
        <div class="mb-2 prose max-w-fit text-center" v-html="renderRichText(blok.title)"></div>
      </a>
      <div class="mb-3 prose-xl max-w-none text-center" v-html="renderRichText(blok.paragraph)"></div>
      <div class="inline-flex w-full justify-between">
        <StoryblokComponent
          v-for="blok_item in blok.buttons"
          :key="blok_item._uid"
          :blok="blok_item"
          class="my-auto self-center"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
defineProps({ blok: Object });
</script>


<style scoped>
.prose{

}
</style>