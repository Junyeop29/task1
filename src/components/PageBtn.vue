<template>
  <button class="btn" :class="{ on: currentPage === page }">
    <router-link :to="`/?page=${page}`">{{ page }}</router-link>
  </button>
</template>

<script>
export default {
  props: {
    page: { type: Number, default: 1 },
    currentPage: { type: Number, default: 1 },
  },
};
</script>

<style scoped>
.btn {
  display: inline-block;
  background: none;
  border: 1px solid;
  margin-right: 10px;
}
.btn a {
  display: block;
  padding: 5px 10px;
  font-size: 1.2rem;
  text-decoration: none;
  color: black;
}
.btn.on a {
  background: black;
  color: white;
}

.move {
  display: inline-block;
  background: none;
  font-size: 1.2rem;
  padding: 5px 10px;
  border: 1px solid;
  cursor: pointer;
}
</style>