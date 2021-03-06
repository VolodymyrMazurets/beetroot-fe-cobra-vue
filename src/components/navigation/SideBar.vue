<template>
  <ul class="side-bar" id="side-bar" ref="sideBar">
    <li class="side-bar__item" v-for="route in routes" :key="route.name">
      <router-link
        active-class="_active"
        exact
        class="side-bar__item-link"
        :to="route.path"
        >{{ route.name }}</router-link
      >
    </li>
    <li class="side-bar__item">
      <a-switch
        :checked="lightTheme"
        @change="onChange"
        :style="{ marginLeft: `${24}px` }"
      >
        <a-icon slot="checkedChildren" type="bulb" />
      </a-switch>
    </li>
    <li class="side-bar__item _search">
      <a-input placeholder="Search films" v-model="query" />
      <a-button
        :loading="loading"
        type="primary"
        class="side-bar__btn"
        @click="handleSubmit"
      >
        Search
      </a-button>
    </li>
    <li class="side-bar__item _cart" v-if="$route.name === 'LittleShop'">
      <a-badge :count="cart.length" :offset="[-10, 10]">
        <a-button
          class="side-bar__item-btn"
          type="primary"
          shape="circle"
          icon="shopping-cart"
          @click="handleClick"
        />
      </a-badge>

      <a-modal
        :getContainer="() => $refs['sideBar']"
        v-model="visible"
        title="Shoping Cart"
        :bodyStyle="{
          height: `${400}px`,
          overflow: 'auto',
        }"
      >
        <ul class="side-bar__modal-list">
          <li
            class="side-bar__modal-list-item"
            v-for="(item, idx) in cart"
            :key="`${item.id}${idx}`"
          >
            <a-avatar
              shape="square"
              :size="64"
              icon="user"
              :src="item.imgSrc"
            />
            <h4 class="side-bar__modal-list-title">
              {{ item.title }} - {{ item.qty }}
            </h4>
          </li>
        </ul>
        <template slot="footer">
          <a-button
            key="back"
            @click="$store.dispatch('littleStore/clearCartState')"
          >
            Clear Cart
          </a-button>
          <a-button key="submit" type="primary" @click="handleOk">
            Close Modal
          </a-button>
        </template>
      </a-modal>
    </li>
  </ul>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "SideBar",
  data() {
    return {
      routes: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Coctails",
          path: "/coctails",
        },
        {
          name: "Little Shop",
          path: "/little-shop",
        },
        {
          name: "Films",
          path: "/films",
        },
        {
          name: "Components",
          path: "/components",
        },
        {
          name: "Contact Us",
          path: "/contacts",
        },
        {
          name: "Meals",
          path: "/meals",
        },
      ],
      query: "",
      visible: false,
      container: null,
    };
  },
  computed: {
    ...mapState({
      cart: ({ littleStore }) => littleStore.cart,
      lightTheme: ({ lightTheme }) => lightTheme,
      loading: ({ films }) => films.loading,
      page: ({ films }) => films.page,
    }),
  },
  methods: {
    ...mapMutations(["changeTheme"]),
    ...mapActions("films", ["getFilmsByQuery"]),
    ...mapMutations("films", ["chagePage", "setInitialPage"]),
    handleClick() {
      this.visible = true;
    },
    handleOk() {
      this.visible = false;
    },
    onChange(checked) {
      this.changeTheme(checked);
    },
    handleSubmit() {
      if (this.$route?.query?.search !== this.query) {
        this.$router?.push({ name: "Films", query: { search: this.query } });
      }
      this.setInitialPage();
      this.getFilmsByQuery({ query: this.query, page: this.page });
    },
  },
};
</script>
<style lang="scss">
.side-bar {
  &__item:not(:last-child) {
    margin-bottom: 8px;
  }
  &__item {
    &._cart {
      position: fixed;
      bottom: 20px;
      left: 110px;
    }
    &._search {
      position: relative;
      @include flex;
    }
  }
  &__item-link {
    display: flex;
    width: 100%;
    border-radius: 8px;
    background-color: transparent;
    text-decoration: none;
    padding: 8px 24px;
    transition: 0.2s ease;
    transition-property: background-color, color, border-color;
    color: $text;
    border: 1px solid transparent;
    &:hover {
      border-color: rgb(255, 164, 45);
    }
    &._active {
      background-color: rgb(255, 164, 45);
    }
  }
  &__item-btn {
    width: 80px;
    height: 80px;
    font-size: 30px;
  }
  &__modal-list-item {
    margin-bottom: 20px;
    @include flex(flex-start, center);
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__modal-list-title {
    margin-left: 16px;
  }
}
</style>
