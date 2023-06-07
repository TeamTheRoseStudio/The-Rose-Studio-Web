<template>
  <NuxtLink :to="blok.link">
    <button
      v-if="blok.type == 'normal'"
      type="button"
      :style="styleObject"
      :class="blok.size_button"
      class="bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center"
    >
      <div class="px-5 py-3 text-sm font-medium text-center text-white">
        {{ blok.title }}
      </div>
      <font-awesome-icon :icon="blok.right_icon.icon" />
    </button>
  </NuxtLink>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
