<template>
  <select name="fruits" @change="onChange">
    <option value="" selected>정렬</option>
    <option value="author">작가(알파벳순)</option>
    <option value="width">넓이(내림차순)</option>
    <option value="height">높이(내림차순)</option>
  </select>
</template>
<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      onChange: (e) => {
        store.commit("doOrderItems", { orderKey: e.target.value });
      },
    };
  },
};
</script>
<style scoped>
</style>