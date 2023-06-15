<template>
  <section
    ref="divPadre"
    v-editable="blok"
    class="gradient_bg_purple_
    ero h-full py-20 px-6"
  >
    <StoryblokComponent
      v-for="blok_item in blok.titleWithUnderline"
      :key="blok_item._uid"
      :blok="blok_item"
    />
    <div
      class="grid grid-cols-1 md:grid-cols-2 w-full place-content-center place-items-center mt-20 gap-y-10"
    >
      <div class="order-2 md:order-1">
        <div
          v-html="renderRichText(blok.paragraph)"
          class="max-w-xl mb-6 font-rubik text-white lg:mb-8 md:text-lg lg:text-xl"
        ></div>
        <StoryblokComponent
          v-for="blok_item in blok.button"
          :key="blok_item._uid"
          :blok="blok_item"
        />
      </div>
      <div class="order-1 md:order-2">
        <NuxtImg
          provider="storyblok"
          :preload="true"
          format="webp"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
      </div>
    </div>
    <div
      class="lg:flex hidden items-center justify-center w-full mt-24"
      @click="irADiv"
    >
      <NuxtLink class="flex space-x-3 cursor-pointer mb-6">
        <font-awesome-icon
          :icon="['fas', 'arrow-down']"
          style="color: #ffffff"
          class="mt-[6.5px]"
        />
        <div
          v-html="renderRichText(blok.paragraph2)"
          class="text-white text-lg"
        ></div>
      </NuxtLink>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({ blok: Object });
const divPadre = ref(null);
const irADiv = () => {
  const divDestino = divPadre.value.nextElementSibling;
  if (divDestino) {
    divDestino.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
