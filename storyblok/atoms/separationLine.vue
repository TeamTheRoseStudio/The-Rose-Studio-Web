<template>
  <div class="w-full flex justify-center">
    <hr
      v-editable="blok"
      :class="blok.size"
      :style="styleObject"
      class="h-px my-8 w-full border-0 dark:bg-gray-700 background_color"
    />
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
const styleObject = computed(() => {
  return {
    "--separationLine_background-color": props.blok.color.value,
  };
});
</script>
<style scoped>
.background_color {
  background-color: var(--separationLine_background-color);
}
</style>
