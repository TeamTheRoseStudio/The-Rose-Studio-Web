<template>
      <div v-editable="blok">
        <div v-if="blok.right_icon.icon" class="inline-block ">
        <font-awesome-icon :icon="blok.icon" />
        </div>
        <div 
        :style="styleObject" 
        v-html="renderRichText(blok.paragraph)" 
        class="p-4 mb-4 text-sm text-color rounded-lg background-color border border-color  font-medium " role="alert">
        </div>
      </div>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const props = defineProps({ blok: Object });
const styleObject = computed(() => {
  return {
    "--background-color": props.blok.color_palette.value,
    "--text-color": props.blok.text_palette.value,
    "--border": props.blok.border.value,
    "--border-color": props.blok.border_palette.value,
  };
});
</script>
<style scoped>
.border {
  border: var(--border);
  border-color: var(--border-color);
}
.background-color {
  background-color: var(--background-color);
}
.text-color {
  color: var(--text-color);
}
</style>
