<template>
  <div id="container" v-if="item !== null">
    <div class="imgBox">
      <img :src="item.download_url" :alt="item.author" />
    </div>
    <div class="info">
      <div class="title">
        <div>author</div>
        <div>width</div>
        <div>height</div>
        <div>url</div>
      </div>
      <div class="detail">
        <div>{{ item.author }}</div>
        <div>{{ item.width }}</div>
        <div>{{ item.height }}</div>
        <div>
          <a :href="item.url">{{ item.url }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onUnmounted } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    store.dispatch("setItemAsync", { id: route.params.id });

    onUnmounted(() => {
      store.commit("setItem", { item: null });
    });

    return {
      item: computed(() => store.state.item),
    };
  },
};
</script>

<style scoped>
#container {
  width: 80%;
  padding: 20px;
  border: 1px solid;
  margin-top: 20px;
}

.imgBox {
  width: 100%;
}

.imgBox img {
  display: block;
  width: 100%;
  object-fit: cover;
}

.info {
  padding: 5px 10px;
  display: flex;
  border: 1px solid;
  margin-top: 15px;
}

.info .title {
  font-weight: bold;
  width: 60px;
}

.title div,
.detail div {
  margin-bottom: 5px;
}
</style>