<template>
  <div>
    <a-card style="max-width: 300px">
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
import { httpSevice } from "../http";

export default {
  name: "Coctail",
  data() {
    return {
      coctail: {},
    };
  },
  async created() {
    const { drinks } = await httpSevice.getCoctilById(this.$route.params.id);
    this.coctail = drinks[0];
  },
};
</script>
