<template>
  <div v-editable="blok" class="w-full px-10 pt-10">
    <!--Titulo del articulo-->
    <div
      class="flex items-left md:items-center w-full flex-col"
      v-editable="blok"
    >
      <h2
        class="mb-4 text-5xl md:text-7xl tracking-tight font-extrabold text-left md:text-center text-white"
      >
        {{ blok.title }}
      </h2>
      <div
        class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-full md:w-[420px] mb-3"
      ></div>
    </div>
    <!--Contenido del Articulo-->
    <div
      class="prose pt-10 text-white max-w-4xl mx-auto"
      v-html="renderRichText(blok.content)"
    ></div>
    <!--Author-->
    <div class="text-white max-w-4xl pt-10 flex items-center space-x-4 mx-auto">
      <NuxtImg
        format="webp"
        provider="storyblok"
        class="w-10 h-10 rounded-full object-cover object"
        :src="autor.content.avatarImage.filename"
        :alt="autor.content.avatarImage.alt"
      />
      <NuxtLink>
        <div class="font-medium dark:text-white">
          <div>{{ autor.name }}</div>
          <div class="text-sm text-white">
            {{ autor.content.bio }}
          </div>
          <div class="text-sm text-slate-300">
            Se unió el {{ autor.content.joinedIn }}
          </div>
        </div>
      </NuxtLink>
    </div>
    <!--Fecha-->
    <div class="max-w-4xl mx-auto pt-10 text-slate-400">
      Publicado el {{ fechaFormateada }}
    </div>
  </div>
</template>
<script setup>
const prop = defineProps({ blok: Object });
const fechaFormateada = ref("");
const autor = ref("");

// Get author
const storyblokApi = useStoryblokApi();

 const { data } = await storyblokApi.get(`cdn/stories/`, {
   version: "draft",
   by_uuids: prop.blok.author,
 });
 autor.value = data.stories[0];
 console.log(autor.value)

// Format date
fechaFormateada.value = useFormattedDate(prop.blok.publicationDate);
autor.value.content.joinedIn = useFormattedDate(autor.value.content.joinedIn);
// SEO and META
useHead({
  titleTemplate: `${prop.blok.title} | The Rose Studio 🌹`,
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
