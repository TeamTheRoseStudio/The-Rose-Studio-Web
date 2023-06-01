<template>
  <div
    v-editable="blok"
    class="hidden lg:flex w-full bg-black h-20 sticky top-0 items-center justify-center lg:justify-between md:z-50 px-40 space-x-10 lg:space-x-0"
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
    <div class="flex space-x-4">
      <div v-for="icono in props.blok.iconsCenter">
        <font-awesome-icon
          :key="icono.icon._uid"
          :icon="icono.icon.icon"
          size="lg"
          style="color: #ffffff"
          class="cursor-pointer"
        />
      </div>
    </div>
    <!--Botón-->
    <div
      class="hidden max-w-[210px] max-h-[45pxs] md:w-full bg-gradient-to-r from-[#8A2387] to-[#F26021] md:pr-5 xl:inline-flex items-center justify-center hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
    >
      <a href="#" class="px-5 py-3 text-sm font-medium text-center text-white">
        Agenda una cita
      </a>
      <font-awesome-icon
        :icon="['fass', 'comment-dots']"
        style="color: #ffffff"
        size="lg"
      />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
console.log(props.blok.iconsCenter[0].icon.icon)
</script>
<style scoped></style>
