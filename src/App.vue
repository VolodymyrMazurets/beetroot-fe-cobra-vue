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
import { mapMutations, mapState } from "vuex";
import MainLayout from "./components/layout/MainLayout.vue";

export default {
  components: {
    MainLayout,
  },
  computed: {
    ...mapState({
      lightTheme: ({ lightTheme }) => lightTheme,
    }),
  },
  methods: {
    ...mapMutations(["changeTheme"]),
  },
  watch: {
    lightTheme(e) {
      localStorage.setItem("lightTheme", e);
      e
        ? document.getElementById("my-app").classList.remove("dark-theme")
        : (document.getElementById("my-app").classList = "dark-theme");
    },
  },
  mounted() {
    localStorage.getItem("lightTheme") === "false"
      ? this.changeTheme(false)
      : this.changeTheme(true);
  },
};
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  background-color: var(--bg-color);
  color: var(--text-color);
}
:root {
  --bg-color: #fafafa;
  --text-color: #262626;
}
.dark-theme:root {
  --bg-color: #262626;
  --text-color: #fafafa;
}
a {
  color: inherit;
}
</style>
