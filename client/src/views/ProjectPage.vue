<template>
  <main class="project-page">
    <div class="container">
      <div class="project-main card">
        <img
          :src="require(`@/assets/images/${json.image}`)"
          alt="Project screenshot"
        />
        <article class="project-info">
          <h1 class="separator">{{ title }}</h1>
          <p>
            {{ json.description }}
          </p>
          <div v-for="item in json.content" :key="item">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </div>
      <aside class="project-aside">
        <div class="project-link card center">
          <h2 class="separator center">{{ $t("projects.information") }}</h2>
          <p>{{ json.information.text }}</p>
          <div class="project-buttons">
            <a
              v-if="json.information.page"
              :href="json.information.page"
              target="_blank"
              class="btn btn-primary"
              >{{ $t("projects.view-project") }}
            </a>
            <a
              v-if="json.information.repository"
              :href="json.information.repository"
              target="_blank"
              class="btn btn-primary"
              >{{ $t("projects.view-repository") }}
            </a>
            <a
              v-if="json.information.images"
              @click="showImages()"
              class="btn btn-primary"
              >{{ $t("projects.view-images") }}
            </a>
          </div>
        </div>
        <div class="project-features card center">
          <h2 class="separator center">{{ $t("projects.technologies") }}</h2>
          <ul class="features">
            <li
              class="features-item"
              v-for="item in json.technologies"
              :key="item"
            >
              <i :class="item.icon"></i>
              {{ item.text }}
            </li>
          </ul>
        </div>
      </aside>
    </div>
    <vue-easy-lightbox
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      @hide="this.visible = false"
    ></vue-easy-lightbox>
  </main>
</template>

<script>
import projects from "@/assets/projects.json";
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  name: "Projects",
  components: {
    VueEasyLightbox,
  },
  data: () => ({
    title: null,
    json: {},
    imgs: [],
    visible: false,
  }),
  created() {
    let title = this.$route.params.id;
    if (projects.hasOwnProperty(title)) {
      this.json = projects[title];
      this.title = title.replace("-", " ");
    } else {
      this.$router.push({ name: "404" });
    }
  },
  mounted(){
    window.scrollTo(0, 0)
  },
  methods: {
    showImages() {
      const images = this.json.information.images;
      if (images) {
        images.forEach((element) => {
          this.imgs.push(require(`@/assets/images/${this.title}/${element}`));
        });
        this.visible = true;
      } else {
        alert("No images available.");
      }
    },
  },
};
</script>