<template>
  <div
    v-editable="employees.value"
    class="max-w-4xl gap-4 mx-auto grid grid-cols-1 md:grid-cols-3"
  >
    <div class="p-6" v-for="employee in employees">
      <NuxtLink :to="`/${employee.full_slug}`">
        <NuxtImg
          provider="storyblok"
          format="webp"
          :preload="true"
          :src="employee.content.avatarImage.filename"
          class="w-full object-cover h-full max-h-[20rem]"
          :alt="employee.content.avatarImage.alt"
        />

        <div
          class="my-3 text-xl font-poppins font-bold dark:text-white text-terciario"
        >
          {{ employee.content.name }}
        </div>
        <div class="font-light text-slate-400 -mt-4 mb-2">
          {{ employee.content.role }}
        </div>
      </NuxtLink>
      <div class="text-white">
        {{ employee.content.bio }}
      </div>
    </div>
  </div>
</template>
<script setup>
//Buscar todos los empleados y mostrarlos
const employees = ref();
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get(`cdn/stories`, {
  version: "draft",
  starts_with: "blog/authors",
});

employees.value = data.stories;
console.log(employees.value);
</script>
<style scoped></style>
