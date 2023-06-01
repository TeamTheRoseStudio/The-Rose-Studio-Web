<template>
  <div v-editable="blok">
    <div
      class="grid grid-cols-2 lg:grid-cols-3 pb-4 pt-10 lg:pt-0 place-items-center"
    >
      <div>
        <nuxtImg
          provider="storyblok"
          href="/"
          format="webp"
          width="97"
          height="50"
          :src="blok.image.filename"
          class="cursor-pointer"
          :alt="blok.image.filename.alt"
        />
      </div>
      <div class="flex lg:hidden pl-10">
        <DropdownMenu></DropdownMenu>
      </div>
      <div class="space-x-10 hidden lg:flex">
        <a href="/" class="headerLink">Somos The Rose</a>
        <a href="/" class="headerLink">Consultoría</a>
        <DropdownMenuWithText></DropdownMenuWithText>
        <a href="/" class="headerLink">Precios</a>
        <a href="/" class="headerLink">Proyectos</a>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>
