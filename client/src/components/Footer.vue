<template>
  <footer class="footer">
    <div class="container">
      <nav id="navigation-footer">
        <NavIcons />
      </nav>
      <p class="copyright">
        <b>Copyright &copy;</b> {{ $t("footer.copyright") }} |
        {{ $t("footer.made-by") }} <b>Juan Pablo machado</b>
      </p>
    </div>
  </footer>
</template>

<script>
import NavIcons from "@/components/NavIcons.vue";
export default {
  name: "Footer",
  components: {
    NavIcons,
  },
};
</script>