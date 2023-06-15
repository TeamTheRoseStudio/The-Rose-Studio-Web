<template>
  <div>
  <button
    v-html="renderRichText(blok.title)"
    type="button"
    class="flex justify-center items-center mx-auto font-medium text-white dark-text-primary-400 hover:text-primary-700"
    data-collapse-toggle="detailed-pricing"
  >

  </button>
  <div>
    <!-- TODO añadir icono de flechita para abajo y q la flecha mire parriba cuando este abierto.-->
  </div>
</div>
</template>
<script setup>
const props = defineProps({ blok: Object });
</script>
