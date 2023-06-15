<template>
  <div>
    <div
      v-html="renderRichText(blok.paragraph)"
      class="md:col-span-2 prose max-w-none md:ms-10 text-start font-light text-white sm:text-xl"
    ></div>
  </div>
  <StoryblokComponent
    v-for="blok_item in blok.button"
    :key="blok_item._uid"
    :blok="blok_item"
    class="text-sm font-medium text-center hidden max-w-[210px] max-h-[45pxs] md:w-full bg-gradient-to-r from-[#F78888] to-[#F91616] md:pr-5 lg:inline-flex items-center justify-center hover:bg-gray-100 text-white"
  />
  <div class="calendly-inline-widget" data-url="https://calendly.com/therosestudio/consulting" style="min-width:320px;height:700px;"></div>

  <!-- <ContactForm></ContactForm> -->
</template>
<script setup>
const props = defineProps({ blok: Object });
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
</script>
