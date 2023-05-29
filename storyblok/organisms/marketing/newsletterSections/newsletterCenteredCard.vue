<template>
  <div class="bg-white">
    <div class="">
      <div
        class="relative isolate overflow-hidden px-6 py-12 shadow-2xl  sm:px-24 xl:py-18"
        :class="[
          useBackgroundColor()[blok.color_palette?.value],
          useTextColor()[blok.text_palette?.value],
        ]"
      >
        <div class="flex justify-center flex-col">
          <div
            class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl"
            v-html="renderRichText(blok.title)"
          ></div>
          <div
            class="mx-auto mt-2 max-w-xl text-center text-lg leading-8"
            v-html="renderRichText(blok.description)"
          ></div>
          <form
            action="https://formsubmit.co/nbrito@guimar.es"
            method="POST"
            class="mx-auto mt-6 flex max-w-md gap-x-4"
          >
            <input
              v-model="name"
              name="nombre"
              type="text"
              required
              class="min-w-0 flex-auto rounded-md text-black border-0 bg-white/50 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Su nombre"
            />
            <input
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="min-w-0 flex-auto rounded-md text-black border-0 bg-white/50 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Su email"
            />
            <button
              v-if="!hayCamposVacios"
              type="submit"
              @click="submit()"
              class="flex-none rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-black-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Enviar
            </button>
            <button
              v-else
              type="button"
              class="flex-none rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-black-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              disabled
            >
              Enviar
            </button>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" :value="'https://juventudguimar.org' + route.fullPath" />
          </form>
          <p class="mx-auto text-xs mt-6">
            {{ message }}
          </p>
        </div>
        <!-- <svg
          viewBox="0 0 1024 1024"
          class="absolute top-54 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/4"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fill-opacity="0.7"
          />
          <defs>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({ blok: Object });

const name = ref("");
const email = ref("");
const route = useRoute();

const message = ref(props.blok.message);

const hayCamposVacios = computed(() => {
  if (email.value == "" || name.value == "") return true;
  else return false;
});

const submit = () => {
  alert(`${props.blok.submission_message} ${email.value}`);
  message.value = `${props.blok.submission_message} ${email.value}`;
  setTimeout(() => {
    message.value = props.blok.message;
  }, 3000);
  name = ref("");
  email = ref("");
};
</script>
