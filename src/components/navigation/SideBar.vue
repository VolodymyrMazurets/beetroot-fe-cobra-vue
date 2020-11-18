<template>
  <ul class="side-bar">
    <li class="side-bar__item" v-for="route in routes" :key="route.name">
      <router-link
        active-class="_active"
        exact
        class="side-bar__item-link"
        :to="route.path"
        >{{ route.name }}</router-link
      >
    </li>
  </ul>
</template>
<script>
export default {
  name: "SideBar",
  data() {
    return {
      routes: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Coctails",
          path: "/coctails",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.side-bar {
  &__item:not(:last-child) {
    margin-bottom: 8px;
  }
  &__item-link {
    display: flex;
    width: 100%;
    border-radius: 8px;
    background-color: transparent;
    text-decoration: none;
    padding: 8px 24px;
    transition: 0.2s ease;
    transition-property: background-color, color, border-color;
    color: black;
    border: 1px solid transparent;
    &:hover {
      border-color: rgb(255, 164, 45);
    }
    &._active {
      background-color: rgb(255, 164, 45);
    }
  }
}
</style>
