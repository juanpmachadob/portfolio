<template>
  <main class="page-not-found">
    <div class="container center">
      <div class="error-404">
        <h1 class="glitch" data-text="404">404</h1>
      </div>
      <h2 class="separator center">Oops!</h2>
      <p>{{ $t("page-404.not-found") }}</p>
      <p>{{ $t("page-404.please-home") }}</p>
      <router-link
        :to="{
          name: 'Index',
        }"
        class="btn btn-primary"
        >{{ $t("page-404.home-page") }}</router-link
      >
    </div>
  </main>
</template>
<script>
import "@/assets/css/animations.css";
export default {
  name: "PageNotFound",
};
</script>