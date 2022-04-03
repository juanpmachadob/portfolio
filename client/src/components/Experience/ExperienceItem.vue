<template>
  <div class="experience-item">
    <h3>{{title}}</h3>
    <span>{{company}} | {{duration}}</span>
    <ul>
      <li>{{text1}}</li>
      <li>{{text2}}</li>
      <li>{{text3}}</li>
      <li>{{text4}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ExperienceItem',
  props: {
    icon: String,
    title: String,
    company: String,
    duration: String,
    text1: String,
    text2: String,
    text3: String,
    text4: String,
  }
}
</script>