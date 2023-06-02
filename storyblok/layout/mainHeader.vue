<template>
  <div v-editable="blok">
    <div
      class="grid grid-cols-2 lg:grid-cols-3 pb-4 pt-10 lg:pt-0 place-items-center"
    >
      <div class="lg:ms-10 lg:place-self-start">
        <nuxtImg
          provider="storyblok"
          href="/"
          format="webp"
          width="97"
          height="50"
          :src="blok.image.filename"
          class="cursor-pointer pe-3"
          :alt="blok.image.filename.alt"
        />
      </div>
      <div class="flex lg:hidden pl-14">
        <DropdownMenu :items="blok.headerItem"></DropdownMenu>
      </div>
      <div class="space-x-10 hidden lg:flex">
        <div v-for="item in blok.headerItem" class="headerLink">
          <NuxtLink :to="item.link.cached_url">
            {{ item.text }}
          </NuxtLink>
        </div>
        <StoryblokComponent
          v-for="blok_item in blok.dropdown"
          :key="blok_item._uid"
          :blok="blok_item"
        />
        <!-- <DropdownMenuWithText></DropdownMenuWithText> -->
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
