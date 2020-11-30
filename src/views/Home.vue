<template>
  <div class="home">
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
        adipisci consequatur amet neque assumenda. Quod, quae esse. Sint iusto,
        iste repellat perspiciatis iure illo voluptate quibusdam rerum nulla.
        Vel, dolorum incidunt?
      </p>
    </the-modal>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import TheModal from "../components/common/TheModal";

export default {
  components: {
    TheModal,
  },
  name: "Home",
  data() {
    return {
      visible: false,
      ModalText: "Content of the modal",
      confirmLoading: false,
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
  },
  async created() {
    await this.fetchRandomCoctail();
  },
};
</script>
