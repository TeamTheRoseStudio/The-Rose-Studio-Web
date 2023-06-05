<template>
  <section class="bg-dark mb-20 h-full" v-editable="blok">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:px-10">
      <!-- TODO: poner padding-top a la sección de testimonios y checkear todos los paddings de la homepage. -->
      <div class="flex items-left md:items-center w-full flex-col mt-20">
        <div
          class="mb-4 prose text-5xl md:text-7xl tracking-tight font-extrabold text-left md:text-center text-white"
          v-html="renderRichText(blok?.title)"
        ></div>
        <div
          class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-full md:w-[420px] mb-3"
        ></div>
      </div>
      <div
        class="w-full grid grid-cols-1 place-items-center place-content-center pt-14 pb-20"
      >
        <div
          class="text-white prose text-3xl font-rubik leading-10 max-w-3xl text-center"
          v-html="renderRichText(blok?.paragraph)"
        ></div>
      </div>
      <form
        method="post"
        enctype="multipart/form-data"
        :action="`https://formsubmit.co/${blok?.onSubmit.email}`"
      >
        <div class="grid grid-cols-2 grid-rows-2 gap-x-10">
          <StoryblokComponent
            v-for="blok_item in blok?.inputs"
            :key="blok_item._uid"
            :blok="blok_item"
            :class="blok_item.allWidth ? 'col-span-2' : ''"
          />
        </div>
        <div class="flex flex-col items-start mb-6">
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
          <button type="reset">
            <StoryblokComponent
              v-for="blok_item in blok?.button"
              :key="blok_item._uid"
              :blok="blok_item"
              class="bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center text-white"
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
    <!--TODO:EL FORMULARIO NO FUNCIONA-->
  </section>
</template>
<script setup>
import field from "vee-validate";
const props = defineProps({ blok: Object });
</script>
<style scoped></style>
