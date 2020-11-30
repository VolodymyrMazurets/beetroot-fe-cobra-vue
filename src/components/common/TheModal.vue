<template>
  <the-transition>
    <div class="the-modal" v-if="visible">
      <div class="the-modal__mask"></div>
      <div class="the-modal__body" :style="{ width: `${width}px` }">
        <header class="the-modal__header">
          <h4 class="the-modal__title">{{ title }}</h4>
          <a-icon type="close" class="the-modal__icon" @click="handleCancel" />
        </header>
        <div class="the-modal__content">
          <slot />
        </div>
        <footer class="the-modal__footer">
          <the-button
            @click="handleCancel"
            class="the-modal__footer-btn"
            type="secondary"
            >Cancel</the-button
          >
          <the-button @click="handleOk">Ok</the-button>
        </footer>
      </div>
    </div>
  </the-transition>
</template>
<script>
export default {
  name: "TheModal",
  data() {
    return {
      bodyVisibility: false,
    };
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: "Modal default title",
    },
    width: {
      type: Number,
      default: 520,
    },
  },
  methods: {
    handleOk() {
      this.$emit("handle-ok");
    },
    handleCancel() {
      this.$emit("handle-cancel");
    },
  },
};
</script>
<style lang="scss">
.the-modal {
  position: fixed;
  @include position;
  @include flex(center, center);

  &__mask {
    z-index: 99;
    position: fixed;
    @include position;
    background-color: rgba(0, 0, 0, 0.534);
  }
  &__body {
    z-index: 100;
    position: relative;
    background-color: #fff;
    border-radius: 8px;
  }
  &__header {
    position: relative;
    padding: 16px 24px;
    border-bottom: 1px solid #c3c3c3;
  }
  &__title {
    font-size: 20px;
    font-weight: 600;
    position: relative;
  }
  &__icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  &__content {
    padding: 30px 24px;
  }
  &__footer {
    padding: 16px 24px;
    border-top: 1px solid #c3c3c3;
    @include flex(flex-end, center);
  }
  &__text {
    font-size: 16px;
    line-height: 1.5;
  }
  &__footer-btn {
    margin-right: 16px;
  }
}
</style>
