<template>
  <section id="projects" class="projects bg-splash-gray">
    <div class="container">
      <div class="projects-desc">
        <h2 class="separator">{{ $t("navigation.projects") }}</h2>
        <p>
          {{ $t("projects.text") }}
        </p>
      </div>
      <div class="projects-list">
        <router-link
          v-for="(item, key) in json"
          :key="key"
          :to="{
            name: 'ProjectPage',
            params: {
              id: key,
            },
          }"
          class="projects-list-item"
        >
          <ProjectItem
            :img="item.image"
            :title="key"
            :description="item.short_description"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import projects from "@/assets/projects.json";
import ProjectItem from "./ProjectItem.vue";

export default {
  name: "Projects",
  data: () => ({
    json: projects,
  }),
  components: {
    ProjectItem,
  },
};
</script>
