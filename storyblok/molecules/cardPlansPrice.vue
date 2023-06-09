<template>
  <div
    class="flex flex-col p-4 lg:p-6 max-w-lg text-center text-white bg-dark border border-white shadow-sm xl:p-8"
  >
    <h3
      v-html="renderRichText(blok.title)"
      class="mb-4 text-2xl font-semibold"
    ></h3>
    <div class="flex justify-center items-baseline my-8">
      <span
        v-html="renderRichText(blok.paragraph)"
        class="mr-2 text-5xl font-extrabold"
      ></span>
    </div>
    <p
      v-html="renderRichText(blok.paragraph2)"
      class="text-gray-500 text-light sm:text-lg"
    ></p>
    <div class="flex items-center justify-center space-x-2 cursor-pointer">
      <p
        v-html="renderRichText(blok.paragraph3)"
        class="text-blue-500 text-light sm:text-lg"
      ></p>
      <font-awesome-icon
        :icon="['fas', 'arrow-right']"
        style="color: #3482f6"
        class="mt-1"
      />
    </div>
    <ButtonTRS />
    <!-- List -->
    <ul role="list" class="mb-8 space-y-4 text-left mt-10">
      <li class="flex items-center space-x-3">
        <!-- Icon -->
        <svg
          class="flex-shrink-0 w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span v-html="renderRichText(blok.paragraph)"></span>
      </li>
      <li class="flex items-center space-x-3">
        <!-- Icon -->
        <svg
          class="flex-shrink-0 w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span v-html="renderRichText(blok.paragraph4)"></span>
      </li>
      <li class="flex items-center space-x-3">
        <!-- Icon -->
        <svg
          class="flex-shrink-0 w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span v-html="renderRichText(blok.paragraph5)"></span>
        <span
          v-html="renderRichText(blok.paragraph6)"
          class="font-semibold"
        ></span>
      </li>
      <li class="flex items-center space-x-3">
        <!-- Icon -->
        <svg
          class="flex-shrink-0 w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span v-html="renderRichText(blok.paragraph7)"> </span>
      </li>
      <li class="flex items-center space-x-3">
        <!-- Icon -->
        <svg
          class="flex-shrink-0 w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span
          class="line-through text-white/50"
          v-html="renderRichText(blok.paragraph8)"
        >
        </span>
      </li>
      <li class="flex items-center space-x-3">
        <!-- Icon -->
        <svg
          class="flex-shrink-0 w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span
          class="line-through text-white/50"
          v-html="renderRichText(blok.paragraph9)"
        >
        </span>
      </li>
      <li class="flex items-center space-x-3">
        <!-- Icon -->
        <svg
          class="flex-shrink-0 w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span
          class="line-through text-white/50"
          v-html="renderRichText(blok.paragraph10)"
        ></span>
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
