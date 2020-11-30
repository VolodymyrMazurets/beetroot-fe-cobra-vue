<template>
  <div class="app">
    <main-layout>
      <the-transition>
        <router-view />
      </the-transition>
    </main-layout>
  </div>
</template>
<script>
import MainLayout from "./components/layout/MainLayout.vue";

export default {
  components: {
    MainLayout,
  },
};
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  display: flex;
}
</style>
