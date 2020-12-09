<template>
  <the-loader :loading="loading">
    <div class="film-details">
      <div class="film-details__poster">
        <img :src="filmDetails.Poster" alt="" />
      </div>
      <ul class="film-details__info">
        <li class="film-details__item _title">
          {{ filmDetails.Title }}
        </li>
        <li class="film-details__item">
          Released: <span>{{ filmDetails.Released }}</span>
        </li>
        <li class="film-details__item">
          Awards: <span>{{ filmDetails.Awards }}</span>
        </li>
        <li class="film-details__item">
          Genre: <span>{{ filmDetails.Genre }}</span>
        </li>
        <li class="film-details__item">
          <a-progress stroke-linecap="square" :percent="Number(filmDetails.Metascore)" type="circle" />
        </li>
      </ul>
    </div>
  </the-loader>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "FilmDetails",
  data() {
    return {
      id: null,
    };
  },
  computed: {
    ...mapState("films", ["filmDetails", "loading"]),
  },
  methods: {
    ...mapActions("films", ["getFilmDetails"]),
  },
  created() {
    const { $route, getFilmDetails } = this;
    const { id } = $route.params;
    getFilmDetails(id);
  },
};
</script>
<style lang="scss">
.film-details {
  @include flex(flex-start, flex-start);
  &__poster {
    border-radius: 20px;
    margin-right: 20px;
    border: 1px solid #c3c3c3;
    overflow: hidden;
  }
  &__item {
    @include text($H60, 400, $text);
    padding: 6px 0;
    span {
      color: #ff7875;
      font-weight: 600;
    }
    &._title {
      text-align: center;
      font-size: $H200;
      color: #002766;
      font-weight: 700;
    }
  }
}
</style>
