<template>
  <section id="experiences" class="experiences bg-splash-gray">
    <div class="container">
      <h2 class="separator center">{{ $t("navigation.experiences") }}</h2>
      <p class="center">
        {{ $t("experiences.text") }}
      </p>
      <div class="experiences-list">
        <ExperienceItem
          :title="$t('experiences.1.title')"
          :company="$t('experiences.1.company')"
          :duration="$t('experiences.1.duration')"
          :text1="$t('experiences.1.text1')"
          :text2="$t('experiences.1.text2')"
          :text3="$t('experiences.1.text3')"
          :text4="$t('experiences.1.text4')"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ExperienceItem from "./ExperienceItem.vue";

export default {
  name: "Experience",
  components: {
    ExperienceItem,
  },
};
</script>