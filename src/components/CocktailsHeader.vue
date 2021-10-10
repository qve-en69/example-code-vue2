<template>
<div class="header">
  <a-button type="link" ghost>
    <a-icon type="filter" theme="filled" style="font-size: x-large" />
  </a-button>
  <a-input placeholder="Название коктейля..." class="a-input" />
  <a-button type="link" ghost>
    <a-icon type="star" theme="filled" style="font-size: x-large" />
  </a-button>
</div>
</template>

<script>

export default {
};
</script>

<style lang="scss" scoped>
.header {
  background: #234994;
  height: 4rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .a-input {
    background: #395b9f;
    border: 0;
    width: 70%;
    color: white;
  }
  a-button {
    position: relative;
  }
}
</style>
