<template>
  <section class="bg-dark mb-20 h-full">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:px-10">
      <!-- TODO: poner padding-top a la sección de testimonios y checkear todos los paddings de la homepage. -->
      <div class="flex items-left md:items-center w-full flex-col mt-20">
        <h2
          class="mb-4 text-5xl md:text-7xl tracking-tight font-extrabold text-left md:text-center text-white"
        >
          Démosle vida a tu idea
        </h2>
        <div
          class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-full md:w-[420px] mb-3"
        ></div>
      </div>
      <div
        class="w-full grid grid-cols-1 place-items-center place-content-center pt-14 pb-20"
      >
        <h2
          class="text-white text-3xl font-rubik leading-10 max-w-3xl text-center"
        >
          ¡Estamos aquí para ayudarte! Contáctanos hoy mismo y descubre cómo
          podemos impulsar tu negocio.
        </h2>
      </div>
      <form class="">
        <div class="grid grid-cols-2 grid-rows-2 gap-x-10">
          <div class="mb-6">
            <label
              for="base-input"
              class="text-white block mb-2 text-sm font-medium"
              >Nombre</label
            >
            <input
              type="text"
              id="base-input"
              class="text-white border-[1px] border-gray-300/50 text-sm block w-full p-4 bg-black placeholder:text-gray-300/50"
              placeholder="Bonnie"
            />
          </div>
          <div class="mb-6">
            <label
              for="base-input"
              class="text-white block mb-2 text-sm font-medium"
              >Apellido</label
            >
            <input
              type="text"
              id="base-input"
              class="text-white border-[1px] border-gray-300/50 text-sm block w-full p-4 bg-black placeholder:text-gray-300/50"
              placeholder="Green"
            />
          </div>
          <div class="mb-6">
            <label
              for="base-input"
              class="text-white block mb-2 text-sm font-medium"
              >Email</label
            >
            <input
              type="email"
              id="base-input"
              class="text-white border-[1px] border-gray-300/50 text-sm block w-full p-4 bg-black placeholder:text-gray-300/50"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-6">
            <label
              for="base-input"
              class="text-white block mb-2 text-sm font-medium"
              >Teléfono</label
            >
            <input
              type="number"
              id="base-input"
              class="text-white border-[1px] border-gray-300/50 text-sm block w-full p-4 bg-black placeholder:text-gray-300/50"
              placeholder="+(12) 345 6789"
            />
          </div>
        </div>
        <!-- RICH TEXT -->

        <div class="flex flex-col items-start mb-6">
          <div class="w-full my-4">
            <label
              for="base-input"
              class="text-white block mb-2 text-sm font-medium"
              >Cuéntanos tu idea</label
            >
            <textarea
              id="message"
              rows="4"
              class="block px-2.5 h-48 w-full text-sm text-white bg-black border border-gray-300/50"
            ></textarea>
          </div>
          <div class="flex items-start mb-8 mt-4">
            <div class="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                required
              />
            </div>
            <label for="terms" class="ml-2 text-sm font-medium text-white/50"
              >Al enviar este formulario, confirmas que has leído y aceptas los
              <a href="#" class="text-white">Términos de Servicio.</a></label
            >
          </div>
          <button
            type="submit"
            class="bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center"
          >
            <a
              href="#"
              class="px-5 py-3 text-sm font-medium text-center text-white"
            >
              Enviar mensaje
            </a>
            <font-awesome-icon
              :icon="['fas', 'arrow-right']"
              style="color: #ffffff"
            />
          </button>
        </div>
      </form>
      <div>
        <div class="flex items-left md:items-center w-full flex-col mt-20">
          <h2
            class="mb-4 text-5xl tracking-tight font-extrabold text-center text-white"
          >
            o si prefieres
          </h2>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center pt-20 gap-y-10 md:gap-y-0"
        >
          <div class="grid grid-cols-1 place-items-center">
            <font-awesome-icon
              :icon="['fas', 'envelope']"
              style="color: #ffffff"
              class="bg-gradient-to-r from-[#8A2387] to-[#F26021] p-4 text-2xl"
              size="w-[50px] h-[50px]"
            />
            <div class="my-4">
              <p class="text-white font-rubik text-center">Escríbenos</p>
              <p class="text-white font-rubik text-center">
                Envíanos un correo para colaborar con nosotros.
              </p>
              <p class="font-rubik text-center mt-10 text-red-500">
                xxxxxx@xxxxxxx.com
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 place-items-center">
            <font-awesome-icon
              :icon="['fas', 'phone']"
              style="color: #ffffff"
              class="bg-gradient-to-r from-[#8A2387] to-[#F26021] p-4 text-2xl"
              size="w-[50px] h-[50px]"
            />
            <div class="my-4">
              <p class="text-white font-rubik text-center">Llámanos</p>
              <p class="text-white font-rubik text-center">
                Un miembro de nuestro equipo, estará feliz de conversar contigo
              </p>
              <p class="font-rubik text-center mt-10 text-red-500">
                +1 (646) 786-5060
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style scoped></style>
