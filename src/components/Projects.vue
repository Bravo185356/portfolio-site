<template>
  <section class="projects">
    <div class="block-container">
      <div class="section-title-wrapper center">
        <h3 class="title">Портфолио</h3>
      </div>
      <div class="row justify-center">
        <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ProjectCard from './ProjectCard.vue';

const projects = ref([
  {
    title: 'Социальная сеть',
    images: ['user-page', 'search-page', 'chat-page'],
    technologies: ['HTML', 'SCSS', 'Vue.js', 'Vue-Router', 'Pinia', 'Vuelidate'],
    description:
      'Небольшая социальная сеть с базовым функционалом, таким как авторизация, просмотр страниц пользователей, чат, добавление в друзья, создание/удаление постов и комментариев к ним',
  },
]);
</script>

<style lang="scss" scoped>
.projects {
  background-color: black;
  padding: 120px 0px;
}

@media (max-width: 650px) {
  .projects {
    padding: 60px 0px;
  }
}
</style>
