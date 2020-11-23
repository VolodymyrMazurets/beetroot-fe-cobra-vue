<template>
  <div class="home">
    <a-card hoverable style="width: 240px">
      <img slot="cover" alt="" :src="randomCoctail.strDrinkThumb" />
      <a-card-meta :title="randomCoctail.strDrink">
        <template slot="description">
          {{ randomCoctail.strInstructions }}
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
import { httpSevice } from "../http/httpSevice";

export default {
  name: "Home",
  data() {
    return {
      randomCoctail: [],
    };
  },
  async created() {
    const data = await httpSevice.getRandomCoctail();
    this.randomCoctail = data.drinks[0];
  },
};
</script>
<style lang="scss">
// .home {
// }
</style>
