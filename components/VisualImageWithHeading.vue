<template>
  <section class="bg-dark gradient_bg_orange h-screen">
    <div class="gradient_bg_purple">
      <div
        class="w-full flex flex-col md:flex-row-reverse md:justify-between justify-end h-screen"
      >
        <div
          class="flex-col lg:mt-0 col-span-full justify-end flex overflow-hidden relative lg:col-span-5 xs:ms-10 lg:flex pt-12 pb-4 items-end md:items-center"
        >
          <img
            src="/Recurso-2-big.png"
            class="object-cover w-[300px] h-[310px] object-left md:w-[800px] md:h-[830px]"
            alt="mockup"
          />
        </div>

        <div class="px-10 pb-32 py-0 md:py-40 md:px-40">
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
    <div class="relative hidden xl:flex">
      <ClientOnly>
        <div class="absolute left-[880px] bottom-5">
          <a href="#" class="flex space-x-3 cursor-pointer">
            <font-awesome-icon
              :icon="['fas', 'arrow-down']"
              style="color: #ffffff"
              class="mt-[6.5px]"
            />
            <p class="text-white text-lg">Descubre más</p>
          </a>
        </div>
      </ClientOnly>
    </div>
  </section>
</template>
<script setup></script>
<style scoped></style>
