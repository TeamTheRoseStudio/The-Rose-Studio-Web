<template>
  <section class="bg-white h-full py-20 px-4 lg:px-48">
    <div>
      <h2
        v-html="renderRichText(blok.title)"
        class="mb-4 text-start text-4xl tracking-tight font-extrabold"
      ></h2>
      <div
        class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[4px] w-[280px] md:w-[220px] lg:w-[280px] mb-3"
      ></div>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 place-items-start place-content-center mt-20 gap-20"
    >
      <CardHowWeDevelopYourIdea />
      <CardHowWeDevelopYourIdea />
      <CardHowWeDevelopYourIdea />
      <CardHowWeDevelopYourIdea />
      <CardHowWeDevelopYourIdea />
      <CardHowWeDevelopYourIdea />
      <CardHowWeDevelopYourIdea />
      <CardHowWeDevelopYourIdea />
    </div>
  </section>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
