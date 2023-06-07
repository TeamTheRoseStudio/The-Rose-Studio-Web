<template>
  <div class="gradient_bg_purple_footer bg-black w-full">
    <div
      class="grid grid-cols-1 place-items-center place-content-center py-20 gap-y-6 gradient_bg_orange_footer px-4"
    >
      <NuxtImg
        :src="blok.image.filename"
        alt="The Rose Studio Logo"
        class="mb-4"
      />
      <div class="grid grid-cols-3 place-items-center place-content-center">
        <NuxtLink
          v-for="(item, index) in blok.links"
          v-editable="item"
          :key="item._uid"
          :to="`/${item.link.cached_url}`"
        >
          <div
            v-html="renderRichText(item.text)"
            class="text-white"
            :class="index == 1 ? 'w-full text-center md:text-start' : ''"
          ></div>
        </NuxtLink>
      </div>
      <p class="text-white/50 text-lg">
        © {{ date }} {{ blok.text }}
      </p>
    </div>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
const date = new Date().getFullYear();
</script>
