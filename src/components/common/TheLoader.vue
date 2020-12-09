<template>
  <a-spin :spinning="loading" size="large">
    <icon-placeholder slot="indicator" class="home__spinner" />
    <slot />
  </a-spin>
</template>
<script>
import IconPlaceholder from "../icons/IconPlaceholder";
export default {
  name: "TheLoader",
  components: {
    IconPlaceholder,
  },
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
