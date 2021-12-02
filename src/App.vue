<template>
  <div id="wrapper">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>