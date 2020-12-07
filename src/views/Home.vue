<template>
  <div class="home">
    <a-spin :spinning="loading" size="large">
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
          accusamus provident sint esse est corrupti culpa, sed, beatae aliquid
          quia rerum quas labore. Perspiciatis quo itaque voluptatibus tempore
          adipisci consequatur amet neque assumenda. Quod, quae esse. Sint
          iusto, iste repellat perspiciatis iure illo voluptate quibusdam rerum
          nulla. Vel, dolorum incidunt?
        </p>
      </the-modal>
      <img
        v-if="!isExapleImgVisible"
        :src="src"
        alt=""
        @error="imageLoadError"
      />
      <img v-else src="https://picsum.photos/id/240/600/300" alt="" />
    </a-spin>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import TheModal from "../components/common/TheModal";
import IconPlaceholder from "../components/icons/IconPlaceholder";

export default {
  components: {
    TheModal,
    IconPlaceholder,
  },
  name: "Home",
  data() {
    return {
      visible: false,
      ModalText: "Content of the modal",
      confirmLoading: false,
      src: "https://picsum.photos/id/100000/600/300",
      isExapleImgVisible: false,
      loading: true,
    };
  },
  computed: {
    ...mapState("randomCoctail", ["coctail"]),
  },
  methods: {
    ...mapActions("randomCoctail", ["fetchRandomCoctail"]),
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
    await this.fetchRandomCoctail();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
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
