<template>
  <div class="home">
    <a-card hoverable style="width: 240px">
      <img slot="cover" alt="" :src="coctail.strDrinkThumb" />
      <a-card-meta :title="coctail.strDrink">
        <template slot="description">
          {{ coctail.strInstructions }}
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState("randomCoctail", ["coctail"]),
  },
  methods: {
    ...mapActions("randomCoctail", ["fetchRandomCoctail"]),
  },
  async created() {
    await this.fetchRandomCoctail();
  },
};
</script>
