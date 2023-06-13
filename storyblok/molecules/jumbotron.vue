<template>
  <section :style="styleObject" v-editable="blok"
    class="background bg-center bg-no-repeat bg-gray-600 bg-blend-multiply"
  >
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1
        class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
      >
        {{ blok.title }}
      </h1>
      <p
        class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48"
      >
        {{ blok.paragraph }}
      </p>
      <div
        class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
      >
        <StoryblokComponent
          v-for="blok_item in blok.buttons"
          :key="blok_item._uid"
          :blok="blok_item"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({ blok: Object });

const styleObject = computed(() => {
  return {
    "--background-image": `url(${props.blok.background.filename})`,
  };
});
</script>
<style scoped>
.background {
  background-image: var(--background-image);
  background-size: cover;
}
</style>
