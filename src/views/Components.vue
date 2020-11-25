<template>
  <div class="components">
    <h1>Components</h1>
    <the-button type="secondary" @click="handleClick" class="components__btn"
      >Test button secondary</the-button
    >
    <the-button icon="search" @click="handleClick" class="components__btn"
      >Test button primary</the-button
    >
    <the-button
      spin
      icon="dingding"
      type="danger"
      @click="handleClick"
      class="components__btn"
      >Test button primary</the-button
    >
  </div>
</template>
<script>

export default {
  name: "Components",
  methods: {
    handleClick() {
      console.log("button clicked");
    },
  },
};
</script>
<style lang="scss">
.components {
  &__btn {
    margin-bottom: 16px;
  }
}
</style>
