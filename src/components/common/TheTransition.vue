<template>
  <transition :name="name">
    <slot />
  </transition>
</template>
<script>
import "animate.css";

export default {
  name: "TheAnimation",
  props: {
    name: {
      type: String,
      default: "fade-in",
    },
  },
};
</script>
<style lang="scss">
.fade-in-enter-active {
  animation: fadeIn 0.5s;
}
.fade-in-enter-leave {
  animation: fadeIn 0.5s;
}
.bounce-enter-active {
  animation: bounce 2s;
}
.bounce-enter-leave {
  animation: bounce 2s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
