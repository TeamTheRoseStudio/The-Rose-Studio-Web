<template>
  <section class="bg-dark h-screen gradient_bg_orange_services">
    <div class="gradient_bg_purple_services">
      <div
        class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 gradient_bg_orange_services_mobile"
      >
        <div class="md:grid md:grid-cols-3 md:w-full text-center mb-8 lg:mb-16">
          <div>
            <h2
              class="mb-4 text-start text-5xl tracking-tight font-extrabold text-white"
            >
              Servicios
            </h2>
            <div
              class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-[190px] mb-3"
            ></div>
          </div>
          <p
            class="md:col-span-2 md:ms-10 text-start font-light text-white dark:text-gray-400 sm:text-xl"
          >
            Nuestro portafolio de proyectos incluye una amplia gama de
            soluciones digitales personalizadas para diversas industrias. Desde
            estrategias de redes sociales y publicidad en línea, hasta diseño
            web y producción de contenido creativo, nuestros proyectos muestran
            cómo hemos ayudado a las marcas a alcanzar su potencial en línea y
            crecer su presencia en el mercado digital.
          </p>
        </div>
        <!--Services GRID -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 pl-2 pt-20 gap-y-20 md:gap-x-4 lg:gap-x-10"
        >
          <div class="space-y-4">
            <img src="/Icono-movil.png" />
            <h3 class="text-white text-3xl">Gestión de redes sociales</h3>
            <p class="text-white">
              Creamos y gestionamos perfiles en redes sociales, generación de
              contenido relevante, interacción con seguidores y análisis de
              resultados para aumentar tu presencia en linea
            </p>
            <div
              class="md:ml-0 bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center"
            >
              <a
                href="#"
                class="px-5 py-3 text-sm font-medium text-center text-white"
              >
                Conoce más
              </a>
              <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                style="color: #ffffff"
              />
            </div>
          </div>
          <div class="space-y-4">
            <img src="/Icono-pantalla.png" />
            <h3 class="text-white text-3xl">Diseño y desarrollo web</h3>
            <p class="text-white">
              Creamos y gestionamos perfiles en redes sociales, generación de
              contenido relevante, interacción con seguidores y análisis de
              resultados para aumentar tu presencia en linea
            </p>
            <div
              class="md:ml-0 bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center"
            >
              <a
                href="#"
                class="px-5 py-3 text-sm font-medium text-center text-white"
              >
                Conoce más
              </a>
              <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                style="color: #ffffff"
              />
            </div>
          </div>
          <div class="space-y-4">
            <img src="/Icono-sobre.png" />
            <h3 class="text-white text-3xl">Email marketing</h3>
            <p class="text-white">
              Creamos y gestionamos campañas de correo electrónico
              personalizadas y automatizadas para fomentar la fidelización,
              promover ofertas especiales y mantener a los clientes informados.
            </p>
            <div
              class="md:ml-0 bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center"
            >
              <a
                href="#"
                class="px-5 py-3 text-sm font-medium text-center text-white"
              >
                Conoce más
              </a>
              <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                style="color: #ffffff"
              />
            </div>
          </div>
          <div class="space-y-4">
            <img src="/Icono-pincel.png" />
            <h3 class="text-white text-3xl">Branding y diseño gráfico</h3>
            <p class="text-white">
              Desarrollamos tu identidad visual corporativa, diseño de
              logotipos, materiales promocionales y empaques para fortalecer la
              imagen de marca y generar reconocimiento.
            </p>
            <div
              class="md:ml-0 bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center"
            >
              <a
                href="#"
                class="px-5 py-3 text-sm font-medium text-center text-white"
              >
                Conoce más
              </a>
              <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                style="color: #ffffff"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style scoped></style>
