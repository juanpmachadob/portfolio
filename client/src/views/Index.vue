<template>
  <Home />
  <Experience />
  <About />
  <Projects />
  <Contact />
</template>

<script>
import Home from "@/components/Home.vue";
import Experience from "@/components/Experience/Experience.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects/Projects.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Index",
  components: {
    Home,
    Experience,
    About,
    Projects,
    Contact,
  },
};
</script>