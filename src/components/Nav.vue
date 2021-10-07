<template>
  <div id="nav">
    <a-input placeholder="TEST" class="a-input" />
  </div>
</template>

<script>

export default {
};
</script>

<style lang="scss" scoped>
#nav {
  /* padding: 30px; */
  /* position: absolute; */
  /* width: 414px; */
  height: 80px;
  left: 0px;
  top: 0px;
  background: #234994;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .a-input {
    /* position: absolute; */
    width: 294px;
    height: 36px;
    /* left: 60px; */
    top: 22px;
    background: #ffffff;
    opacity: 0.1;
    border-radius: 3px;
  }
}
</style>
