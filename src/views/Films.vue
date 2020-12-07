<template>
  <div class="films">
    <form class="films__form" @submit.prevent="handleSubmit">
      <a-input
        v-model="query"
        placeholder="Type to search films..."
        class="films__input"
      />
      <a-button
        :loading="loading"
        type="primary"
        class="films__btn"
        htmlType="submit"
      >
        Primary
      </a-button>
    </form>

    <div class="films__row">
      <div
        class="films__col"
        v-for="film in films"
        :key="film.imdbID"
        :flex="1"
      >
        <a-card hoverable>
          <img
            v-if="film.Poster && film.Poster !== 'N/A'"
            slot="cover"
            alt="example"
            :src="film.Poster"
            class="films__img"
          />
          <icon-placeholder v-else class="films__icon" />
          <a-card-meta :title="film.Title">
            <template slot="description">
              {{ film.Year }}
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
    <a-pagination
      v-if="Number(totalResults) > 10"
      @change="handlePaginationChange"
      v-model="page"
      :total="Number(totalResults)"
    />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import IconPlaceholder from "../components/icons/IconPlaceholder";
export default {
  name: "Films",
  components: {
    IconPlaceholder,
  },
  data() {
    return {
      query: "",
      page: 1,
    };
  },
  computed: {
    ...mapState("films", ["loading", "films", "totalResults"]),
  },
  methods: {
    ...mapActions("films", ["getFilmsByQuery"]),
    handleSubmit() {
      this.page = 1;
      this.getFilmsByQuery({ query: this.query, page: this.page });
    },
    handlePaginationChange() {
      this.getFilmsByQuery({ query: this.query, page: this.page });
    },
  },
};
</script>
<style lang="scss">
.films {
  &__form {
    @include flex(stretch, stretch);
    margin-bottom: 32px;
  }
  &__input {
    flex: 1;
    margin-right: 30px;
  }
  &__img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
  &__row {
    @include flex(stretch, stretch);
    flex-wrap: wrap;
    margin: 0 -10px;
  }
  &__col {
    padding: 10px;
    flex: 1 1 calc(100% / 5);
    max-width: calc(100% / 5);
    & > div {
      height: 100%;
    }
  }
  &__icon {
    width: 100%;
    height: 200px;
    margin-bottom: 30px;
  }
}
</style>
