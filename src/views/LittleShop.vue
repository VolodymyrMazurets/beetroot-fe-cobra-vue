<template>
  <div class="little-shop">
    <a-row :gutter="[16, 16]">
      <a-col class="gutter-row" :span="6" v-for="item in cards" :key="item.id">
        <a-card hoverable @click="handleClick(item)">
          <img slot="cover" alt="example" :src="item.imgSrc" />
          <a-card-meta :title="item.title" />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "LittleShop",
  data() {
    return {
      cards: [
        {
          id: 0,
          title: "First Card",
          imgSrc: "https://picsum.photos/id/230/606/758",
        },
        {
          id: 1,
          title: "Second Card",
          imgSrc: "https://picsum.photos/id/231/606/758",
        },
        {
          id: 2,
          title: "Third Card",
          imgSrc: "https://picsum.photos/id/232/606/758",
        },
        {
          id: 3,
          title: "Fourth Card",
          imgSrc: "https://picsum.photos/id/233/606/758",
        },
        {
          id: 4,
          title: "Fifth Card",
          imgSrc: "https://picsum.photos/id/234/606/758",
        },
        {
          id: 5,
          title: "Sixth Card",
          imgSrc: "https://picsum.photos/id/235/606/758",
        },
      ],
    };
  },
  methods: {
    ...mapActions("littleStore", ["addItemToCart"]),
    handleClick(card) {
      this.addItemToCart(card);
    },
  },
};
</script>
<style lang="scss"></style>
