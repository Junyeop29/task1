<template>
  <li :data-value="id" class="content" @click="onClick">
    <div class="thumbnail"><img :src="`https://picsum.photos/id/${id}/300/160`" :alt="author" /></div>
    <div class="info">
      <div class="title">
        <div>author</div>
        <div>width</div>
        <div>height</div>
      </div>
      <div class="detail">
        <div>{{ author }}</div>
        <div>{{ width }}</div>
        <div>{{ height }}</div>
      </div>
    </div>
  </li>
</template>

<script>
import { useRouter } from "vue-router";
import { toRefs } from "vue";

export default {
  props: {
    item: {
      type: Object,
      default: () => ({
        id: "",
        author: "",
        width: "",
        height: "",
        download_url: "",
      }),
    },
  },
  setup(props) {
    const router = useRouter();
    const { item } = toRefs(props);

    return {
      ...item.value,
      onClick: (e) => {
        router.push(`/${e.target.dataset["value"]}`);
      },
    };
  },
};
</script>

<style scoped>
li {
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #8080802e;
  cursor: pointer;
}

li:hover {
  background: #80808015;
}

li * {
  pointer-events: none;
}

.thumbnail img {
  display: block;
  width: 300px;
  height: 160px;
  object-fit: cover;
}

.info {
  padding: 5px 10px;
  display: flex;
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