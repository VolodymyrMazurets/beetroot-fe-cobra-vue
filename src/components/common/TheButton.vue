<template>
  <button class="the-button" :class="[type]" @click="$emit('click')">
    <a-icon v-if="icon" :type="icon" class="the-button__icon" :spin="spin" />
    <span class="the-button__text">
      <slot />
    </span>
  </button>
</template>
<script>
export default {
  name: "TheButton",
  props: {
    type: {
      validator(value) {
        return ["primary", "secondary", "danger"].indexOf(value) !== -1;
      },
      default: "primary",
    },
    icon: {
      type: String,
    },
    spin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
.the-button {
  @include flex(center, center);
  background-color: orange;
  color: white;
  border: none;
  outline: none;
  height: 46px;
  border-radius: 24px;
  padding: 0 24px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &.secondary {
    background-color: #c3c3c3;
    &:hover {
      background-color: lighten($color: #c3c3c3, $amount: 10%);
    }
    &:active {
      background-color: darken($color: #c3c3c3, $amount: 10%);
    }
  }
  &.danger {
    background-color: rgba(255, 0, 0, 0.699);
    &:hover {
      background-color: lighten($color: rgba(255, 0, 0, 0.699), $amount: 10%);
    }
    &:active {
      background-color: darken($color: rgba(255, 0, 0, 0.699), $amount: 10%);
    }
  }
  &:hover {
    background-color: lighten($color: orange, $amount: 10%);
  }
  &:active {
    background-color: darken($color: orange, $amount: 10%);
  }
  &__icon {
    margin-right: 8px;
  }
}
</style>
