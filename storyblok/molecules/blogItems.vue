<template>
  <div
    v-editable="projects"
    class="text-white grid grid-cols-1 gap-3 md:grid-cols-3 items-start justify-center"
  >
    <!--DROPDOWN FILTER-->
    <div class="ps-10 md:col-span-3">
      <div class="inline-block me-4">Categorías:</div>
      <button
        id="dropdownCheckboxButton"
        data-dropdown-toggle="dropdownDefaultCheckbox"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Tags
        <svg
          class="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        id="dropdownDefaultCheckbox"
        class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownCheckboxButton"
        >
          <li v-for="project in projects">
            <div class="flex items-center" v-for="tag in project.tag_list">
              <input
                :id="tag"
                type="checkbox"
                :value="tag"
                @change="updateTags(tag)"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >{{ tag }}</label
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
    <ArticleCard
      class="m-3 min-h-full min-w-fit"
      v-for="project in projects"
      :title="project.content.title"
      :description="project.content.description"
      :image="project.content.presentationImage"
      :full_slug="project.full_slug"
      :date="useFormattedDate(project.content.publicationDate)"
      :tags="project.tag_list"
    />
  </div>
</template>
<script setup>
const projects = ref(null);
const tags = ref([]);
const storyblokApi = useStoryblokApi();
//Fetch articles
const {
  data: { stories },
} = await storyblokApi.get("cdn/stories/", {
  version: "draft",
  resolve_relations: "article.author",
  starts_with: "blog",
});
console.log(stories);
projects.value = stories.filter(
  (story) => story.is_startpage !== true && !story.full_slug.includes("/author")
);

// TAGS FUNCTIONS & LOGIC
function updateTags(tag) {
  if (!tags.value.includes(tag)) {
    tags.value.push(tag);
  }
}
console.log(tags.value);
</script>
<style scoped></style>
