<template>
  <div class="project-item">
    <img :src="require(`@/assets/images/${img}`)" alt="Project image" />
    <div class="project-info center">
      <b class="center">{{ formattedTitle }}</b>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  data: () => ({
    formattedTitle: null,
  }),
  props: {
    img: String,
    title: String,
    description: String,
  },
  created() {
    let title = this.title;
    this.formattedTitle = title.replace("-", " ");
  },
};
</script>