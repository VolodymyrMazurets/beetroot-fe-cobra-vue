<template>
  <div class="home">
    <a-card hoverable style="width: 240px">
      <img
        slot="cover"
        alt=""
        :src="randomCoctail.strDrinkThumb"
      />
      <a-card-meta :title="randomCoctail.strDrink">
        <template slot="description">
          {{randomCoctail.strInstructions}}
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
import { coctailsUrls } from "../http";

export default {
  name: "Home",
  data() {
    return {
      randomCoctail: [],
    };
  },
  methods: {
    async getRandomCoctail() {
      try {
        const res = await fetch(coctailsUrls.random);
        const parsedRes = await res.json();
        return parsedRes;
      } catch (error) {
        console.error(error);
      }
    },
  },
  async created() {
    const data = await this.getRandomCoctail();
    this.randomCoctail = data.drinks[0];
  },
};
</script>
<style lang="scss">
// .home {
// }
</style>
