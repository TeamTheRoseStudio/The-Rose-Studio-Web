<template>
  <div
    class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600"
  >
    <div
      class="grid prop-grid-cols place-items-center align-middle max-w-lg mx-auto font-medium"
      :style="styleObject"
    >
      <StoryblokComponent
        v-for="blok_item in blok.buttons"
        :key="blok_item._uid"
        :blok="blok_item"
      />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });

const styleObject = computed(() => {
  return {
    "--grid-cols": props.blok.buttons.length,
    "--background-bottomNavigation": props.blok.background.color
  };
});
</script>

<style>
.background-bottomNavigation {
  background-color: var(--background-bottomNavigation);
}
.prop-grid-cols {
  grid-template-columns: repeat(var(--grid-cols), minmax(0, 1fr));
}
</style>
