<template>
  <div v-editable="blok">
    <!-- Modal toggle -->
    <StoryblokComponent
      v-for="blok_item in blok.trigger_button"
      :key="blok_item._uid"
      :blok="blok_item"
      type="button"
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
    />

    <!-- Main modal -->
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <div
              v-html="renderRichText(blok.title)"
              class="text-xl font-semibold text-white dark:text-white"
            ></div>
            <button
              type="button"
              class="text-white bg-transparent hover:bg-gray-200 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div
            v-html="renderRichText(blok.paragraph)"
            class="p-6 space-y-6"
          ></div>
          <!-- Modal footer -->
          <div
            class="flex items-center justify-between mx-5 p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <StoryblokComponent
              v-for="blok_item in blok.inside_buttons"
              :key="blok_item._uid"
              :blok="blok_item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>
