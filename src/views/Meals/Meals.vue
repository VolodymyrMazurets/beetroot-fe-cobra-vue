<template>
  <div class="meals">
    <a-input-search
      class="meals__input"
      placeholder="Type something to search meals"
      enter-button
      @search="searchMeals"
    />
    <div class="meals__row">
      <div v-if="loading" class="meals__col">
        <a-skeleton />
      </div>
      <div
        v-else
        class="meals__col"
        v-for="item in meals.results"
        :key="item.id"
      >
        <a-card
          hoverable
          @click="
            $router.push({ name: 'MealsDetails', params: { id: item.id } })
          "
        >
          <img slot="cover" alt="example" :src="item.image" />
          <a-card-meta :title="item.title" />
        </a-card>
      </div>
    </div>
    <a-pagination
      show-size-changer
      :pageSizeOptions="['10', '20', '40', '50', '100']"
      @change="onPaginationChange"
      :default-current="1"
      :total="meals.totalResults"
      @showSizeChange="onShowSizeChange"
    />
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Meals',
  data() {
    return {
      query: '',
    };
  },
  computed: {
    ...mapState('meals', ['meals', 'loading']),
  },
  methods: {
    ...mapActions('meals', ['getMealsByQuery']),
    async searchMeals(e) {
      this.query = e;
      if (e) await this.getMealsByQuery({ query: e, number: 10, offset: 0 });
    },
    async onShowSizeChange(current, pageSize) {
      this.getMealsByQuery({
        query: this.query,
        number: pageSize,
        offset: (current - 1) * 10,
      });
    },
    onPaginationChange(page, pageSize) {
      this.getMealsByQuery({
        query: this.query,
        number: pageSize,
        offset: (page - 1) * pageSize,
      });
    },
  },
  async created() {
    await this.getMealsByQuery({ query: '', number: 10, offset: 0 });
  },
};
</script>
<style lang="scss">
.meals {
  &__input {
    margin-bottom: 16px;
  }
  &__row {
    @include flex(stretch, stretch, row, wrap);
    margin: 0 -15px 16px;
  }
  &__col {
    padding: 15px;
    flex-basis: 25%;
    max-width: 25%;
  }
}
</style>
