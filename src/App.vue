<template>
  <div id="app" >
    <router-view  />
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
:root {
  --app-width: 414px;
  @media(max-width: 415px) {
    --app-width: 100%;
  }
}
#app {
  width: var(--app-width);  
  margin: 0 auto;
  font-family:  Arial, Avenir, Helvetica, sans-serif;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
