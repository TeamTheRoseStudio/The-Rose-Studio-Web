<template>
  <div v-editable="blok">
    <NuxtLink :to="blok.link">
      <button
        v-if="blok.type == 'normal'"
        type="button"
        :style="styleObject"
        class="background-color shadow-lg hover-color text-color text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        :class="blok.size_button"
      >
        <div v-if="blok.left_icon.icon" class="inline-block ">
          <font-awesome-icon :icon="blok.left_icon.icon" />
        </div>

        <div class="inline-block mx-1.5">
          {{ blok.title }}
        </div>
        <div v-if="blok.right_icon.icon" class="inline-block ">
          <font-awesome-icon :icon="blok.right_icon.icon" />
        </div>
      </button>
      <button
        v-if="blok.type == 'bottomNav'"
        type="button"
        :style="styleObject"
        class="background-color shadow-lg hover-color text-color text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        :class="blok.size_button"
      >
        <div v-if="blok.left_icon.icon" class="">
          <font-awesome-icon :icon="blok.left_icon.icon" />
        </div>

        <div class="inline-block mx-1.5">
          {{ blok.title }}
        </div>
        <div v-if="blok.right_icon.icon" class="inline-block ">
          <font-awesome-icon :icon="blok.right_icon.icon" />
        </div>
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const props = defineProps({ blok: Object });

const styleObject = computed(() => {
  return {
    "--hover-color": props.blok.hover_palette.value,
    "--background-color": props.blok.color_palette.value,
    "--text-color": props.blok.text_palette.value,
  };
});
</script>

<style scoped>
.background-color {
  background-color: var(--background-color);
}
.hover-color:hover {
  background-color: var(--hover-color);
}
.text-color {
  color: var(--text-color);
}
</style>
