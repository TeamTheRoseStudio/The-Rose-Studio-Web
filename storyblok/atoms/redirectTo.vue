<template>
  <div>
    <div class="h-screen bg-white w-full text-center ">
      <div v-html="renderRichText(blok.title)" class="pt-14 text-3xl mb-1"></div>
      <div class="text-xl mb-1">Serás redirigido en {{ contador }}</div>
      <div
        class="mb-10 sm:mx-auto bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-[190px]"
      ></div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });

const contador = ref(props.blok.seconds); // Inicializar el contador en 5 segundos
const router = useRouter();

onMounted(() => {
  const timer = setInterval(() => {
    contador.value -= 1; // Actualizar el contador
    if (contador.value === 0) {
      clearInterval(timer); // Detener el intervalo
      router.push(
        props.blok.to.cached_url == "home" ? "/" : props.blok.to.cached_url
      ); // Redirigir al usuario a una nueva ruta
    }
  }, 1000); // Actualizar el contador cada segundo (1000 ms)
});
</script>
<style scoped></style>
