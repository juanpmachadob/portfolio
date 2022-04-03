<template>
  <header class="navbar">
    <div class="container navbar-content">
      <div class="navbar-head">
        <router-link to="/#home" class="logo" @click="menuOpen = false"
          >JUAN PABLO
          <b>MACHADO</b>
        </router-link>
        <div class="flag-mobile">
          <!-- <a v-if="this.$i18n.locale == 'es'" @click="changeLang('en')"
            ><img
              class="nav-flag"
              src="@/assets/images/lang/en.png"
              alt="Country flag"
          /></a>
          <a v-if="this.$i18n.locale == 'en'" @click="changeLang('es')"
            ><img
              class="nav-flag"
              src="@/assets/images/lang/es.png"
              alt="Country flag"
          /></a> -->
          <span class="nav-switch" @click="toggleTheme()">
            <i
              :class="[
                userTheme == 'dark-theme'
                  ? 'fa-regular fa-lightbulb'
                  : 'fa-solid fa-lightbulb',
              ]"
            ></i>
          </span>
          <div class="mobile-menu">
            <span v-on:click="menuOpen = !menuOpen">
              <i class="fas fa-bars"></i>
            </span>
          </div>
        </div>
      </div>
      <nav
        id="navigation"
        class="navigation flex-4"
        v-bind:class="{ 'mobile-menu-active': !menuOpen }"
      >
        <router-link to="/#home" @click="menuOpen = false" class="nav-item">{{ $t("navigation.home") }}</router-link>
        <router-link to="/#experience" @click="menuOpen = false" class="nav-item">{{ $t("navigation.experiences") }}</router-link>
        <router-link to="/#about" @click="menuOpen = false" class="nav-item">{{ $t("navigation.about") }}</router-link>
        <router-link to="/#projects" @click="menuOpen = false" class="nav-item">{{ $t("navigation.projects") }}</router-link>
        <router-link to="/#contact" @click="menuOpen = false" class="nav-item">{{ $t("navigation.contact") }}</router-link>
        <NavIcons @click="menuOpen = false"/>
      </nav>
    </div>
  </header>
</template>

<script>
import NavIcons from "@/components/NavIcons.vue";
export default {
  name: "Navbar",
  components: {
    NavIcons
  },
  data() {
    return {
      menuOpen: false,
      userTheme: "light-theme",
    };
  },
  mounted() {
    const initUserTheme = this.getMediaPreference();
    this.setTheme(initUserTheme);
    let lang = localStorage.getItem("user-lang");
    if (lang == "es" || lang == "en") {
      this.$i18n.locale = lang;
    }
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("user-lang", lang);
    },
    getMediaPreference() {
      let theme = localStorage.getItem("user-theme");
      if (!theme) {
        const hasDarkPreference = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (hasDarkPreference) {
          theme = "dark-theme";
        } else {
          theme = "light-theme";
        }
      }
      return theme;
    },
    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },
  },
};
</script>