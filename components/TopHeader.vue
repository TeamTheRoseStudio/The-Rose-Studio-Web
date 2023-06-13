<template>
  <div
    class="hidden lg:flex w-full bg-black h-20 sticky top-0 items-center justify-center lg:justify-between px-40 space-x-10 lg:space-x-0"
  >
    <ClientOnly>
      <div class="flex space-x-4">
        <font-awesome-icon
          class="mt-0.5"
          :icon="['fab', 'whatsapp']"
          size="lg"
          style="color: #ffffff"
        />
        <p class="text-white w-[90px]">655 555 555</p>
      </div>
    </ClientOnly>
    <div class="flex space-x-4">
      <font-awesome-icon
        :icon="['fab', 'facebook']"
        size="lg"
        style="color: #ffffff"
        class="cursor-pointer"
      />
      <font-awesome-icon
        :icon="['fab', 'twitter']"
        size="lg"
        style="color: #ffffff"
        class="cursor-pointer"
      />
      <font-awesome-icon
        :icon="['fab', 'instagram']"
        size="lg"
        style="color: #ffffff"
        class="cursor-pointer"
      />
      <font-awesome-icon
        :icon="['fab', 'linkedin']"
        size="lg"
        style="color: #ffffff"
        class="cursor-pointer"
      />
    </div>
    <div
      class="hidden max-w-[210px] max-h-[45pxs] md:w-full bg-gradient-to-r from-[#F78888] to-[#F91616] md:pr-5 xl:inline-flex items-center justify-center hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
    >
      <a href="#" class="px-5 py-3 text-sm font-medium text-center text-white">
        Agenda una cita
      </a>
      <font-awesome-icon
        :icon="['fass', 'comment-dots']"
        style="color: #ffffff"
        size="lg"
        class=""
      />
    </div>
  </div>
</template>
<script setup></script>
