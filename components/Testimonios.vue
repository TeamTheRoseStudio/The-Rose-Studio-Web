<template>
  <section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 my-10">
      <div class="md:grid md:grid-cols-3 md:w-full text-center mb-8 lg:mb-16">
        <div>
          <h2
            class="mb-4 text-start text-5xl md:text-4xl lg:text-5xl tracking-tight font-extrabold"
          >
            Testimonios
          </h2>
          <div
            class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-[280px] md:w-[220px] lg:w-[280px] mb-3"
          ></div>
        </div>
        <p
          class="md:col-span-2 md:ms-10 text-start font-light dark:text-gray-400 sm:text-xl"
        >
          Nuestros clientes satisfechos hablan por sí mismos. Descubre cómo
          nuestras estrategias de marketing han transformado sus negocios,
          aumentando su visibilidad, generando leads de calidad y alcanzando el
          éxito deseado. ¡Conócelos hoy!
        </p>
      </div>
      <!--Services GRID -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-x-8 gap-y-14"
      >
        <CardTest />
        <CardTest />
        <CardTest />
        <CardTest />
      </div>
      <div class="flex w-full justify-center mt-14">
        <div
          class="bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center"
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
      <div class="flex items-left md:items-center w-full flex-col mt-20">
        <h2
          class="mb-4 text-5xl md:text-7xl tracking-tight font-extrabold text-left md:text-center"
        >
          Ellos confiaron en nosotros
        </h2>
        <div
          class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-[420px] mb-3"
        ></div>
      </div>
      <div
        class="grid grid-cols-3 grid-rows-3 place-content-center place-items-center gap-y-16 mt-14"
      >
        <img src="/Ted.png" />
        <img src="/Ted.png" />
        <img src="/Ted.png" />
        <img src="/Ted.png" />
        <img src="/Ted.png" />
        <img src="/Ted.png" />
        <img src="/Ted.png" />
        <img src="/Ted.png" />
        <img src="/Ted.png" />
      </div>
      <div class="flex w-full justify-center mt-20 mb-10 lg:mb-0">
        <div
          class="bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center"
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
  </section>
</template>
<script setup></script>
<style scoped></style>
