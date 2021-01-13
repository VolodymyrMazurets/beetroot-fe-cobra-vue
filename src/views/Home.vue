<template>
  <div class="home">
    <the-loader :loading="loading" size="large">
      <icon-placeholder slot="indicator" class="home__spinner" />
      <a-card hoverable style="width: 240px" @click="showModal">
        <img slot="cover" alt="" :src="coctail.strDrinkThumb" />
        <a-card-meta :title="coctail.strDrink">
          <template slot="description">
            {{ coctail.strInstructions }}
          </template>
        </a-card-meta>
      </a-card>
      <the-modal
        :visible="visible"
        @handle-cancel="hideModal"
        @handle-ok="hideModal"
        :width="450"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          accusamus provident sint esse est corrupti culpa, sed, beatae aliqui
        </p>
      </the-modal>
      <img
        v-if="!isExapleImgVisible"
        :src="src"
        alt=""
        @error="imageLoadError"
      />
      <img v-else src="https://picsum.photos/id/240/600/300" alt="" />
      <the-button @click="showLoginError">Notify</the-button>
      <div id="app">
        <input v-model="text" />
        <vue-markdown :source="text"></vue-markdown>
      </div>
    </the-loader>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import TheModal from "../components/common/TheModal";
import { randomCoctaiConstats } from "../store/constants";
import VueMarkdown from "vue-markdown";
export default {
  components: {
    TheModal,
    VueMarkdown,
  },
  name: "Home",
  data() {
    return {
      text: "",
      visible: false,
      ModalText: "Content of the modal",
      confirmLoading: false,
      src: "https://picsum.photos/id/100000/600/300",
      isExapleImgVisible: false,
      loading: true,
      source: new Date().toLocaleTimeString(),
      anchorAttrs: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
      },
    };
  },
  computed: {
    ...mapState("randomCoctail", ["coctail"]),
  },
  methods: {
    ...mapActions("randomCoctail", [randomCoctaiConstats.FETCH_RANDOM_COCTAIL]),
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    imageLoadError() {
      this.isExapleImgVisible = true;
    },
  },
  async created() {
    this.loading = true;
    await this[randomCoctaiConstats.FETCH_RANDOM_COCTAIL]();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    setInterval(() => {
      this.source = new Date().toLocaleTimeString();
    }, 1000);
  },
  notifications: {
    showLoginError: {
      // You can have any name you want instead of 'showLoginError'
      title: "Login Failed",
      message: "Failed to authenticate",
      type: "success", // You also can use 'VueNotifications.types.error' instead of 'error'
    },
  },
};
</script>
<style lang="scss">
.home {
  &__spinner {
    width: 50px;
    height: 50px;
    animation: spin 1s infinite;
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
