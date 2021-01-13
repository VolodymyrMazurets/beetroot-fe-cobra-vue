<template>
  <div>
    <a-comment class="meals-details">
      <template slot="actions">
        <span key="comment-basic-like">
          <a-tooltip title="Like">
            <a-icon type="like" theme="filled" />
          </a-tooltip>
          <span style="padding-left: '8px';cursor: 'auto'">
            {{ recipe.aggregateLikes }}
          </span>
        </span>
      </template>
      <span slot="author">{{ recipe.creditsText }}</span>
      <a-avatar
        class="meals-details__avatar"
        slot="avatar"
        :src="recipe.image"
        :size="150"
        alt="Han Solo"
      />
      <p
        class="meals-details__details"
        slot="content"
        v-html="recipe.instructions"
      ></p>
    </a-comment>
    <ul>
      <li
        v-for="item in recipe.extendedIngredients"
        :key="item.id + item.originalString"
        style="margin-bottom: 10px"
      >
        <a-avatar
          class="meals-details__avatar _small"
          :src="`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`"
          :alt="item.name"
          :size="80"
        />
        <span>{{ item.name }} - </span>
        <span>{{ item.originalString }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'MealsDetails',
  methods: {
    ...mapActions('meals', ['getRecipeById']),
  },
  computed: {
    ...mapState('meals', ['recipe']),
  },
  created() {
    const { $route, getRecipeById } = this;
    const { id } = $route.params;
    getRecipeById(id);
  },
};
</script>
<style lang="scss">
.meals-details {
  &__avatar {
    img {
      width: 150px;
      height: 150px;
    }
    &._small {
      margin-right: 20px;
      img {
        width: 80px;
        height: 80px;
      }
    }
  }
  &__details {
    padding-left: 16px;
  }
}
</style>
