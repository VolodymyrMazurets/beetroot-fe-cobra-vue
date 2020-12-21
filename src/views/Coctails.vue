<template>
  <div class="coctails">
    <the-title :size="30" weight="700" color="#1890ff" :level="1">Coctails</the-title>

    <a-select
      ref="categoriesRef"
      allowClear
      style="width: 200px; margin-right: 16px"
      @change="handleChange"
      placeholder="Select category"
    >
      <a-select-option
        v-for="{ strCategory } in filters.categories"
        :key="strCategory"
        :value="strCategory"
      >
        {{ strCategory }}
      </a-select-option>
    </a-select>

    <a-select
      style="width: 200px; margin-right: 16px"
      @change="handleChange"
      placeholder="Select glass"
    >
      <a-select-option
        v-for="{ strGlass } in filters.glasses"
        :key="strGlass"
        :value="strGlass"
      >
        {{ strGlass }}
      </a-select-option>
    </a-select>

    <a-select
      style="width: 200px; margin-right: 16px"
      @change="handleChange"
      placeholder="Select ingredient"
    >
      <a-select-option
        v-for="{ strIngredient1 } in filters.ingredients"
        :key="strIngredient1"
        :value="strIngredient1"
      >
        {{ strIngredient1 }}
      </a-select-option>
    </a-select>

    <a-select
      style="width: 200px;margin-right: 16px"
      @change="handleChange"
      placeholder="Select type of drink"
    >
      <a-select-option
        v-for="{ strAlcoholic } in filters.alcoholic"
        :key="strAlcoholic"
        :value="strAlcoholic"
      >
        {{ strAlcoholic }}
      </a-select-option>
    </a-select>

    <a-input
      placeholder="Or type search query"
      style="margin: 20px 0; max-width: 200px"
      v-model="searchQuery"
    />

    <div class="coctails__list">
      <div
        class="coctails__item"
        v-for="coctail in drinks"
        :key="coctail.idDrink"
      >
        <a-card
          hoverable
          @click="
            $router.push({ name: 'Coctail', params: { id: coctail.idDrink } })
          "
        >
          <img slot="cover" alt="" :src="coctail.strDrinkThumb" />
          <a-card-meta :title="coctail.strDrink">
            <template slot="description">
              {{ coctail.strInstructions }}
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
  </div>
</template>
<script>
import { httpSevice } from "../http";
import TheTitle from "../components/common/TheTitle";

export default {
  name: "Coctails",
  components: {
    TheTitle,
  },
  data() {
    return {
      selectedFilter: "",
      searchQuery: "",
      filters: {
        categories: [],
        glasses: [],
        ingredients: [],
        alcoholic: [],
      },
      drinks: [],
    };
  },
  methods: {
    handleChange(value) {
      this.selectedFilter = value;
    },
  },
  watch: {
    async searchQuery() {
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!this.searchQuery.length) {
        const { drinks: data } = await httpSevice.getSearchCoctailsByName(
          this.searchQuery
        );
        this.drinks = data;
      } else {
        this.drinks = [];
      }
    },
  },
  async created() {
    const data = await httpSevice.getCategories();
    this.filters = data;
  },
};
</script>
<style lang="scss">
.coctails {
  &__list {
    display: flex;
    align-items: stretch;
    margin: 0 -20px;
    flex-wrap: wrap;
  }
  &__item {
    flex: 1 1 25%;
    max-width: 25%;
    padding: 10px 20px;
    & > div {
      height: 100%;
    }
  }
}
</style>
