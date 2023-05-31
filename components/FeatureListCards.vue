<template>
  <section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div
        class="md:grid md:grid-cols-3 md:w-full text-center mb-8 lg:mb-16"
      >
        <div>
          <h2
            class="mb-4 text-start text-4xl tracking-tight font-extrabold text-gray-900"
          >
            Portfolio
          </h2>
          <div
            class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-[190px] mb-3"
          ></div>
        </div>
        <p
          class="md:col-span-2 md:ms-10 text-start font-light text-gray-500 dark:text-gray-400 sm:text-xl"
        >
          Nuestro portafolio de proyectos incluye una amplia gama de soluciones
          digitales personalizadas para diversas industrias. Desde estrategias
          de redes sociales y publicidad en línea, hasta diseño web y producción
          de contenido creativo, nuestros proyectos muestran cómo hemos ayudado
          a las marcas a alcanzar su potencial en línea y crecer su presencia en
          el mercado digital.
        </p>
      </div>
      <!--CARDS GRID -->
      <div class="grid grid-cols-1 md:grid-cols-3">
        <!--Card 1-->
        <div class="p-6">
          <img src="https://placehold.co/230x236" class="w-full" alt="" />
          <h4
            class="my-3 text-xl font-poppins font-bold dark:text-white text-terciario"
          >
            Nombre del proyecto
          </h4>
          <p class="p2-rubik font-light text-gray-500 dark:text-gray-400">
            Descubre nuestro proyecto de marketing digital personalizado,
            enfocado en impulsar tu marca y crecer tu presencia en línea
          </p>
          <div
            class="w-full mt-4 md:ml-0 bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <NuxtLink
              class="px-5 font-rubik py-3 text-sm font-medium text-center text-white"
            >
              Trabajemos algo nuevo
              <font-awesome-icon
                :icon="['fasr', 'arrow-right']"
                style="color: #ffffff"
                class="ms-2"
              />
            </NuxtLink>
          </div>
        </div>
        <!--Card 2-->
        <div class="p-6">
          <img src="https://placehold.co/230x236" class="w-full" alt="" />
          <h4
            class="my-3 text-xl font-poppins font-bold dark:text-white text-terciario"
          >
            Nombre del proyecto
          </h4>
          <p class="p2-rubik font-light text-gray-500 dark:text-gray-400">
            Descubre nuestro proyecto de marketing digital personalizado,
            enfocado en impulsar tu marca y crecer tu presencia en línea
          </p>
          <div
            class="w-full mt-4 md:ml-0 bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <NuxtLink
              class="px-5 font-rubik py-3 text-sm font-medium text-center text-white"
            >
              Trabajemos algo nuevo
              <font-awesome-icon
                :icon="['fasr', 'arrow-right']"
                style="color: #ffffff"
                class="ms-2"
              />
            </NuxtLink>
          </div>
        </div>
        <!--Card 3-->
        <div class="p-6">
          <img src="https://placehold.co/230x236" class="w-full" alt="" />
          <h4
            class="my-3 text-xl font-poppins font-bold dark:text-white text-terciario"
          >
            Nombre del proyecto
          </h4>
          <p class="p2-rubik font-light text-gray-500 dark:text-gray-400">
            Descubre nuestro proyecto de marketing digital personalizado,
            enfocado en impulsar tu marca y crecer tu presencia en línea
          </p>
          <div
            class="w-full mt-4 md:ml-0 bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <NuxtLink
              class="px-5 font-rubik py-3 text-sm font-medium text-center text-white"
            >
              Trabajemos algo nuevo
              <font-awesome-icon
                :icon="['fasr', 'arrow-right']"
                style="color: #ffffff"
                class="ms-2"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style scoped></style>
