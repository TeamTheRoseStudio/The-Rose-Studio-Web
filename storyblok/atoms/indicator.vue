<template>
  <div v-editable="blok">
    <span :style="styleObject" class="color flex w-3 h-3 rounded-full"></span>
  </div>
  
</template>
<script setup>
const props = defineProps({ blok: Object });

const styleObject = computed(() => {
  return {
    "--background-color": props.blok.color?.color,
  };
});
</script>
<style scoped>
.color {
  background-color: var(--background-color);
}
</style>
