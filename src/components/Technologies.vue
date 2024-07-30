<template>
  <section class="technologies">
    <div class="technologies-container">
      <div class="section-title-wrapper center">
        <h3 class="title">Используемые технологии</h3>
      </div>
      <ul class="technologies-list">
        <li v-for="technology in technologiesList" :key="technology.url" class="technology">
          <a class="link" :href="technology.url">
            <img class="img" :src="`/src/assets/images/${technology.img}`" :alt="technology.description" />
            <span class="name">{{ technology.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const technologiesList = ref([
  {
    img: 'html.svg',
    url: 'https://ru.wikipedia.org/wiki/HTML',
    name: 'HTML',
    description: 'html icon',
  },
  {
    img: 'css.svg',
    url: 'https://ru.wikipedia.org/wiki/CSS',
    name: 'CSS',
    description: 'css icon',
  },
  {
    img: 'sass.svg',
    url: 'https://sass-lang.com/',
    name: 'SASS',
    description: 'sass icon',
  },
  {
    img: 'js.svg',
    url: 'https://ru.wikipedia.org/wiki/JavaScript',
    name: 'JavaScript',
    description: 'js icon',
  },
  {
    img: 'typescript.svg',
    url: 'https://www.typescriptlang.org/',
    name: 'Typescript',
    description: 'typescript icon',
  },
  {
    img: 'vue.svg',
    url: 'https://vuejs.org/',
    name: 'Vue.js 3',
    description: 'vue icon',
  },
  {
    img: 'pinia.svg',
    url: 'https://pinia.vuejs.org/',
    name: 'Pinia',
    description: 'pinia icon',
  },
  {
    img: 'quasar.svg',
    url: 'https://quasar.dev/',
    name: 'Quasar',
    description: 'quasar icon',
  },
  {
    img: 'vite.svg',
    url: 'https://vitejs.dev/',
    name: 'Vite',
    description: 'vite icon',
  },
  {
    img: 'figma.svg',
    url: 'https://www.figma.com/',
    name: 'Figma',
    description: 'figma icon',
  },
  {
    img: 'git.svg',
    url: 'https://git-scm.com/',
    name: 'Git',
    description: 'git icon',
  }
]);
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/Technologies.scss);
</style>
