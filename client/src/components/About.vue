<template>
  <section id="about" class="about">
    <div class="container">
      <div>
        <img src="@/assets/images/personal-image.jpg" alt="Personal image" />
      </div>
      <div class="about-desc">
        <h2 class="separator">{{ $t("navigation.about") }}</h2>
        <p>
          {{ $t("about.text-1") }}
        </p>
        <br />
        <p>
          {{ $t("about.text-2") }}
        </p>
        <br />
        <p>
          {{ $t("about.text-3") }}
        </p>
        <ul class="technologies">
          <li>Node.js, Express.js, Vue.js</li>
          <li>MongoDB, MySQL</li>
          <li>Metodologías ágiles, Git</li>
          <li>Afán de superación</li>
          <li>Aprendizaje rápido autodidacta</li>
          <li>Atención al detalle</li>
          <li>Capacidad de adaptación</li>
          <li>Comunicación eficaz</li>
          <li>Proactividad</li>
          <li>Trabajo en equipo</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>