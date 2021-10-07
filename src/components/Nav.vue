<template>
  <div id="nav">
    <PageHeader />
    <a-page-header title="Nice" />
    <slot></slot>
  </div>
</template>

<script>
import { PageHeader } from 'ant-design-vue';

export default {
  components: {
    PageHeader,
  },
};

</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  position: absolute;
  width: 414px;
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
}
</style>
