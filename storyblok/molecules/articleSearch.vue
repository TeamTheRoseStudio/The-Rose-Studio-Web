<template>
  <div class="mx-3 mt-3 md:mx-24 md:my-10" v-editable="blok">
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >Search</label
    >
    <div class="relative">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        @keypress="search()"
        id="default-search"
        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-t-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :class="searchInput != '' ? '' : 'rounded-b-lg'"
        :placeholder="blok.placeholder"
        required
        v-model="searchInput"
      />
      <StoryblokComponent
        v-for="blok_item in blok.button"
        :key="blok_item._uid"
        :blok="blok_item"
        class="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        @click="search()"
      />
    </div>
    <div v-if="searchInput != ''" class="bg-white rounded-b">
      <div class="text-center" v-for="result in res">
        <NuxtLink :to="`/${result.full_slug}`">
          <h1>{{ result.content.title }}</h1>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
const searchInput = ref("");
const storyblokApi = useStoryblokApi();
const res = ref();
async function search() {
  const { data } = await storyblokApi.get("cdn/stories", {
    version: "draft",
    starts_with: "blog/",
    is_startpage: false,
    resolve_relations: "article.author",
    per_page: 5,
    search_term: searchInput.value,
  });
  res.value = data.stories;
}

</script>
<style scoped></style>
