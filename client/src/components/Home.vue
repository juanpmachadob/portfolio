<template>
  <main id="home" class="home">
    <div class="container">
      <div>
        <img src="@/assets/images/personal-image.png" alt="Personal image" />
      </div>
      <div>
        <span class="subheading">{{ $t("home.subheading.1") }}</span>
        <h1 class="separator">Juan Pablo <b>Machado</b></h1>
        <p>
          {{ $t("home.text") }}
        </p>
        <a href="https://drive.google.com/u/2/uc?id=1KRMIzpcVxVHOgJbOIJg-P-UY5n16RmKv&export=download" target="_blank" class="btn btn-primary">{{ $t("home.download") }}</a>
        <a href="#contact" class="btn btn-primary">{{ $t("home.contact") }}</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home'
}
</script>