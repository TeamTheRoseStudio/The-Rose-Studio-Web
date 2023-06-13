<template>
  <div
    v-editable="blok"
    class="flex flex-col p-4 lg:p-6 max-w-lg text-center text-white bg-dark border border-white shadow-sm xl:p-8"
  >
    <!-- h3 title -->
    <div
      v-html="renderRichText(blok.title)"
      class="mb-4 text-2xl font-semibold"
    ></div>
    <!-- 29$ price -->
    <div class="flex justify-center items-baseline my-8">
      <div
        v-html="renderRichText(blok.price)"
        class="mr-2 text-5xl font-extrabold"
      ></div>
    </div>

    <div class="flex items-center justify-center space-x-2 cursor-pointer">
      <div
        v-html="renderRichText(blok.paragraph)"
        class="text-blue-500 text-light sm:text-lg"
      ></div>
      <font-awesome-icon
        :icon="['fas', 'arrow-right']"
        style="color: #3482f6"
        class="mt-1"
      />
    </div>
    <!-- <ButtonTRS /> -->
    <!-- List Items-->
    <ul role="list" class="mb-8 space-y-4 text-left mt-10">
      <StoryblokComponent
        v-for="blok_item in blok.ListItemsPriceTable"
        :key="blok_item._uid"
        :blok="blok_item"
      />
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
