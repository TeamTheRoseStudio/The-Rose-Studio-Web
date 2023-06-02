<template>
  <section
    class="bg-dark gradient_bg_orange h-screen md:mb-20 2xl:mb-12"
    v-editable="blok"
  >
    <div class="gradient_bg_purple">
      <div
        class="w-full flex flex-col lg:flex-row-reverse md:justify-between justify-end h-screen"
      >
        <div
          class="flex-col lg:mt-0 justify-end flex md:flex pt-12 pb-4 items-end md:items-right"
        >
          <img
            src="/Recurso-2-big.png"
            class="object-cover w-[300px] h-[310px] object-left md:object-left md:w-[400px] md:h-[410px] lg:w-[800px] lg:h-[830px]"
            alt="mockup"
          />
        </div>

        <div class="px-10 md:px-20 pb-32 py-0 lg:py-40">
          <div class="flex flex-col space-y-2 md:space-y-8 pb-6 md:pb-14">
            <h1
              class="mb-4 text-4xl max-w-[300px] md:max-w-xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-white"
            >
              Tus ideas al
            </h1>
            <div class="flex space-x-3">
              <h1
                class="mb-4 text-4xl max-w-[300px] md:max-w-xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-white"
              >
                siguiente
              </h1>
              <h1
                class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#8A2387] to-[#F26021]"
              >
                nivel
              </h1>
            </div>
          </div>
          <p
            class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            En The Rose nos dedicamos a impulsar tu marca mediante soluciones
            personalizadas de estrategia, contenido creativo y diseño
            impactante, conectando con el mundo y llevándote al siguiente nivel.
          </p>
          <div
            class="mt-4 ml-10 md:ml-0 bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <a
              href="#"
              class="px-5 py-3 text-sm font-medium text-center text-white"
            >
              Despega tu proyecto
            </a>
            <font-awesome-icon
              :icon="['fas', 'arrow-right']"
              style="color: #ffffff"
            />
          </div>
        </div>
      </div>
    </div>
    <ClientOnly>
      <div class="hidden lg:flex items-center justify-center w-full bg-black">
        <NuxtLink to="#" class="flex space-x-3 cursor-pointer">
          <font-awesome-icon
            :icon="['fas', 'arrow-down']"
            style="color: #ffffff"
            class="mt-[6.5px]"
          />
          <p class="text-white text-lg">Descubre más</p>
        </NuxtLink>
      </div>
    </ClientOnly>
  </section>
</template>
<script setup>
defineProps({ blok: Object });
</script>
<style scoped></style>
