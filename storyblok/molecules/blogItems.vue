<template>
  <div
   v-editable="projects"
    class="text-white grid grid-cols-1 gap-3 md:grid-cols-3 items-start justify-center"
  >
    <ArticleCard
    
      class="m-3 min-h-full min-w-fit"
      v-for="project in projects"
      :title="project.content.title"
      :description="project.content.description"
      :image="project.content.presentationImage"
      :full_slug="project.full_slug"
      :date="useFormattedDate(project.content.publicationDate)"
    />
  </div>
</template>
<script setup>
const projects = ref(null);
const storyblokApi = useStoryblokApi();
//Fetch articles
const {
  data: { stories },
} = await storyblokApi.get("cdn/stories/", {
  version: "draft",
  resolve_relations: "article.author",
  starts_with: "blog",
});

projects.value = stories.filter(
  (story) => story.is_startpage !== true && !story.full_slug.includes("/author")
);

console.log(projects);
</script>
<style scoped></style>
