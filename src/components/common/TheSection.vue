<template>
  <div class="the-section">
    <div class="the-section__head"><slot name="header">HTML</slot></div>
    <slot>Text example</slot>
    <footer class="the-section__footer" v-if="$slots && $slots.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>
<script>
export default {
  name: "TheSection",
};
</script>
<style lang="scss">
.the-section {
  background-color: #c3c3c3;
  border-radius: 10px;
  padding: 32px;
  &__head {
    @include flex-row(flex-end, center);
    margin-bottom: 20px;
  }
  &__footer {
    @include flex-row(flex-end, center);
    padding-top: 20px;
    border-top: 1px solid black;
  }
}
</style>
