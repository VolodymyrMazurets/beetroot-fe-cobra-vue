<template>
  <div>
    <h1
      v-if="level === 1"
      class="the-title"
      :style="{ fontSize: `${size}px`, fontWeight: `${weight}`, color }"
    >
      <slot />
    </h1>
    <h2
      v-if="level === 2"
      class="the-title"
      :style="{ fontSize: `${size}px`, fontWeight: `${weight}`, color }"
    >
      <slot />
    </h2>
    <h3
      v-if="level === 3"
      class="the-title"
      :style="{ fontSize: `${size}px`, fontWeight: `${weight}`, color }"
    >
      <slot />
    </h3>
    <h4
      v-if="level === 4"
      class="the-title"
      :style="{ fontSize: `${size}px`, fontWeight: `${weight}`, color }"
    >
      <slot />
    </h4>
    <h5
      v-if="level === 5"
      class="the-title"
      :style="{ fontSize: `${size}px`, fontWeight: `${weight}`, color }"
    >
      <slot />
    </h5>
    <h6
      v-if="level === 6"
      class="the-title"
      :style="{ fontSize: `${size}px`, fontWeight: `${weight}`, color }"
    >
      <slot />
    </h6>
  </div>
</template>
<script>
export default {
  name: "TheTitle",
  props: {
    size: {
      type: [Number, String],
      default: 22,
    },
    weight: {
      type: [Number, String],
      default: 600,
    },
    color: {
      type: String,
      default: "var(--text-color)",
    },
    level: {
      type: Number,
      default: 2,
    },
  }
};
</script>
