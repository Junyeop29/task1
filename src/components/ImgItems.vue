<template>
  <div id="orderBox">
    <Order />
  </div>
  <ul>
    <ImgItem v-for="item in items" :key="item.id" :item="item" />
  </ul>
  <div>
    <PageBtn
      v-for="page in 8"
      :key="page"
      :page="page"
      :currentPage="currentPage"
    />
  </div>
</template>

<script>
import ImgItem from "./ImgItem.vue";
import PageBtn from "./PageBtn.vue";
import Order from "./Order.vue";
import { useStore } from "vuex";
import { computed, watchEffect } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    ImgItem,
    PageBtn,
    Order,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const currentPage = computed(() => {
      const page = Number(route.query.page);
      if (route.query.page === 0) {
        return 1;
      } else {
        return page;
      }
    });

    watchEffect(() => {
      if (isNaN(currentPage.value) === false) {
        store.dispatch("setItemsAsync", {
          page: currentPage.value,
          limit: 5,
        });
      }
    });

    return {
      items: computed(() => store.state.items),
      currentPage,
    };
  },
};
</script>

<style scoped>
#orderBox {
  width: 80%;
  text-align: end;
  margin-top: 10px;
}

ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 80%;
  margin-top: 5px;
  margin-bottom: 20px;
}
</style>