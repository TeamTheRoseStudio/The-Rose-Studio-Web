<template>
  <section v-editable="blok" class="bg-black px-2 lg:px-20">
    <div class="py-8 px-4 lg:py-16 lg:px-6">
      <!--Title W underline-->
      <!-- <StoryblokComponent
        v-for="blok_item in blok.titleWithUnderline"
        :key="blok_item._uid"
        :blok="blok_item"
      /> -->
      <div
        class="grid gap-8 mb-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-20"
      >
        <!--CardPlansPrice-->
        <StoryblokComponent
          v-for="blok_item in blok.cardsPlansPriceTable"
          :key="blok_item._uid"
          :blok="blok_item"
        />

        <!-- Comparison Table -->
      </div>
      <StoryblokComponent
        v-for="blok_item in blok.toggleExtraPriceTable"
        :key="blok_item._uid"
        :blok="blok_item"
      />
    </div>
  </section>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
