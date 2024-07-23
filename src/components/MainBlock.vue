<template>
  <div class="background-image">
    <img src="@/assets/images/main-background.jpg" alt="Темный фон" />
  </div>
  <div class="main-container">
    <div class="welcome-block">
      <Transition name="text">
        <div class="welcome-text">
          <div>Привет! Меня зовут <span class="red-text">Олег</span></div>
          <div>Занимаюсь Frontend</div>
          <div>разработкой с 2021 года</div>
        </div>
      </Transition>
      <div class="welcome-image">
        <img src="@/assets/images/photo.png" alt="Фото" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import url(@/assets/styles/MainBlock.scss);
</style>
