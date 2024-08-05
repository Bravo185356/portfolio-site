<template>
  <article class="project-card">
    <q-carousel
      class="rounded-borders slider"
      transition-prev="slide-right"
      transition-next="slide-left"
      v-model="currentSlide"
      animated
      swipeable
      navigation
      control-color="red"
    >
      <q-carousel-slide v-for="img in project.images" :key="img" class="slide" :name="img" :img-src="getFullPathImg(img)" />
    </q-carousel>
    <div class="project-about">
      <h5 class="project-title">{{ project.title }}</h5>
      <div class="used-technologies">
        <div v-for="technology in props.project.technologies" :key="technology" class="tag">{{ technology }}</div>
      </div>
      <div>
        {{ project.description }}
      </div>
      <div class="project-controls">
        <q-btn href="https://bravo185356.github.io/social-vue/" class="button" padding="5px 20px" size="18px" color="red" label="Live" />
        <q-btn href="https://github.com/Bravo185356/social-vue" class="button" padding="5px 20px" size="18px" color="red" label="Github" />
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  project: Object,
});

const currentSlide = ref(props.project.images[0]);

function getFullPathImg(img) {
  return `/src/assets/images/${img}.png`;
}
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/ProjectCard.scss);
</style>
