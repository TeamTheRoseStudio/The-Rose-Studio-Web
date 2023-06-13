<template>
  <div
    
    class="hidden lg:grid grid-cols-3 items-center place-items-center py-3p"
  >
    <div class="flex space-x-4">
      <div>
        <font-awesome-icon
          class="mt-0.5"
          :icon="['fab', 'whatsapp']"
          size="lg"
          style="color: #ffffff"
        />
      </div>
      <NuxtLink
        v-if="blok.whatsappPhone"
        :to="`https://wa.me/${blok.whatsappPhone.url}`"
        :target="blok.whatsappPhone.target"
        class="text-white w-[90px]"
        >{{ blok.whatsappPhone.url }}</NuxtLink
      >
    </div>
    <div class="flex space-x-4 2xl:pl-16">
      <div v-for="icono in props.blok.iconsCenter">
        <NuxtLink
          :key="icono.icon._uid"
          :to="icono?.link?.url"
          :target="icono.link.target"
        >
          <font-awesome-icon
            :icon="`${icono.icon.type} ${icono.icon.icon} `"
            size="lg"
            style="color: #ffffff"
            class="cursor-pointer"
          />
        </NuxtLink>
      </div>
    </div>
    <!--Botón-->
    <StoryblokComponent
      v-for="blok_item in blok.button"
      :key="blok_item._uid"
      :blok="blok_item"
      class="text-sm font-medium text-center hidden max-w-[210px] max-h-[45pxs] md:w-full bg-gradient-to-r from-[#F78888] to-[#F91616] md:pr-5 lg:inline-flex items-center justify-center hover:bg-gray-100 text-white"
    />
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
<style scoped></style>
