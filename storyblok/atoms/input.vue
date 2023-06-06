<template>
  <div v-editable="blok">
    <div
      v-if="blok.type == 'text' || blok.type == 'email' || blok.type == 'tel'"
    >
      <div class="mb-6">
        <label
          for="base-input"
          class="text-white block mb-2 text-sm font-medium"
          >{{ blok.text }}</label
        >
        <input
          :type="blok.type"
          :id="`input-${blok.text}`"
          class="text-white border-[1px] border-gray-300/50 text-sm block w-full p-4 bg-black placeholder:text-gray-300/50"
          :placeholder="blok.placeholder"
          :required="blok.required"
          :name="blok.text"
        />
      </div>
    </div>
    <div v-if="blok.type == 'textarea'">
      <div class="w-full my-4">
        <label
          for="base-input"
          class="text-white block mb-2 text-sm font-medium"
          >{{ blok.text }}</label
        >
        <textarea
          id="message"
          rows="4"
          :required="blok.required"
          :name="blok.text"
          class="block px-2.5 h-48 w-full text-sm text-white bg-black border border-gray-300/50"
        ></textarea>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped></style>
