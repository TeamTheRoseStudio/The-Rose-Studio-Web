<template>
  <div class="w-full mt-10 flex flex-col items-center justify-center">
    <div class="">
      <NuxtImg
        provider="storyblok"
        format="webp"
        class="rounded-full h-64 w-64 object-cover object-top"
        :src="blok.avatarImage.filename"
        :alt="blok.avatarImage.alt"
      />
    </div>
    <div class="text-white grid col-span-1">
      <div
        class="flex items-left md:items-center w-full flex-col"
        v-editable="blok"
      >
        <h2
          class="mb-4 ms-3 mt-5 text-5xl md:text-7xl tracking-tight font-extrabold text-left md:text-center text-white"
        >
          {{ blok.name }}
        </h2>
        <div class="ms-3 text-slate-400">
          {{ blok.role }}
        </div>
        <div
          class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-full md:w-[420px] mb-3"
        ></div>
      </div>
      <div
        class="max-w-2xl mt-5 mx-auto prose text-white"
        v-html="renderRichText(blok.bioLarga)"
      ></div>
      <div class="max-w-2xl mx-auto mt-10">
        Se unió el {{ useFormattedDate(blok.joinedIn) }}
      </div>
    </div>
  </div>
</template>
<script setup>
const prop = defineProps({ blok: Object });

// SEO and META
useHead({
  titleTemplate: `${prop.blok.name} | The Rose Studio 🌹`,
});

useSeoMeta({
  description: prop.blok.metatags?.description,
  og_description: prop.blok.metatags?.og_description,
  og_image: prop.blok.metatags?.og_image,
  og_title: prop.blok.metatags?.og_title,
  title: prop.blok.metatags?.title,
  twitter_description: prop.blok.metatags?.twitter_description,
  twitter_image: prop.blok.metatags?.twitter_image,
  twitter_title: prop.blok.metatags?.twitter_title,
});
</script>
<style scoped></style>
