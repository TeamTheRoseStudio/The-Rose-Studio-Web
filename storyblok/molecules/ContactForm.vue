<template>
  <section class="bg-dark mb-20 h-full gradient_bg_red_contactForm">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:px-10">
      <!-- TODO: poner padding-top a la sección de testimonios y checkear todos los paddings de la homepage. -->
      <div class="flex items-left md:items-center w-full flex-col mt-20">
        <div
          class="mb-4 text-4xl md:text-7xl tracking-tight font-extrabold text-left md:text-center text-white"
          v-html="renderRichText(blok.title)"
        ></div>
        <div
          class="bg-gradient-to-r from-[#F78888] to-[#F91616] h-[2.81px] w-[280px] md:w-[420px] mb-3"
        ></div>
      </div>
      <div
        class="w-full grid grid-cols-1 place-items-center place-content-center pt-14 pb-20"
      >
        <div
          v-html="renderRichText(blok.paragraph)"
          class="prose text-white text-3xl font-rubik leading-10 max-w-3xl text-center"
        ></div>
      </div>
      <form
        :action="`https://formsubmit.co/${blok.onSubmit.email}`"
        enctype="multipart/form-data"
        method="post"
      >
        <div class="grid grid-cols-2 grid-rows-2 gap-x-10">
          <StoryblokComponent
            v-for="blok_item in blok.inputs"
            :key="blok_item._uid"
            :blok="blok_item"
            :class="blok_item.allWidth ? 'col-span-2' : ''"
          />
        </div>
        <div class="flex flex-col items-start mb-6">
          <div class="flex items-start mb-8 mt-4">
            <div class="flex items-center h-5">
              <!--Inputs de Storyblok-->
              <input
                id="terms"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                required
                :v-model="terms"
                @click="terms = !terms"
              />
              <!--Inputs para configurar formsubmit-->
              <input
                type="hidden"
                name="_autoresponse"
                value="Gracias por contactar con The Rose Studio. En breve nos pondremos en contacto contigo."
              />
              <input type="hidden" name="_next" value="https://localhost:3010/gracias" />
              <!--TODO: Cambiar la pagina a done será redirigido-->
            </div>
            <label for="terms" class="ml-2 text-sm font-medium text-white/50"
              >Al enviar este formulario, confirmas que has leído y aceptas los
              <a href="#" class="text-white">Términos de Servicio.</a></label
            >
          </div>
          <button
            v-if="terms"
            type="submit"
            class="bg-gradient-to-r from-[#F78888] to-[#F91616] pr-5 inline-flex items-center justify-center"
          >
            <button
              type="submit"
              class="px-5 py-3 text-sm font-medium text-center text-white"
            >
              Enviar mensaje
            </button>
            <font-awesome-icon
              :icon="['fas', 'arrow-right']"
              style="color: #ffffff"
            />
          </button>
        </div>
      </form>
      <div>
        <div class="flex items-left md:items-center w-full flex-col mt-20">
          <div
            v-html="renderRichText(blok.downHeading)"
            class="mb-4 text-5xl tracking-tight font-extrabold text-center text-white"
          ></div>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center pt-20 gap-y-10 md:gap-y-0"
        >
          <div
            class="grid grid-cols-1 place-items-center"
            v-for="card in blok.contactCards"
            v-editable="card"
          >
            <font-awesome-icon
            
              :icon="card.icon.icon"
              style="color: #ffffff"
              class="bg-gradient-to-r from-[#F78888] to-[#F91616] p-4 text-2xl w-[50px] h-[50px]"
            />
            <div class="my-4">
              <div
                v-html="renderRichText(card.title)"
                class="text-white font-rubik text-center"
              ></div>
              <div
                v-html="renderRichText(card.subtitle)"
                class="text-white font-rubik text-center"
              ></div>
              <div
                v-html="renderRichText(card.text)"
                class="font-rubik text-center mt-10 text-red-500"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({ blok: Object });
const terms = ref(false);
</script>
<style scoped></style>
