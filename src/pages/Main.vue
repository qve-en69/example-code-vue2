<template>
  <div>
    <a-layout class="main-layout">
      <a-layout-header class="layout-header">
    	<a-input placeholder="TEST" class="a-input" />
        <!-- <Nav></Nav> -->
      </a-layout-header>
      <a-layout-content>
        <a-card hoverable style="width 240px" size="small">
          <img
            slot="cover"
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
          <a-card-meta title="Europe Street beat" />
            <!-- <template slot="description"> <div class=".text"> www.instagram.com </div></template> -->
          <!-- </a-card-meta> -->
        </a-card>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
.main-layout {
  width: 414px;
  margin: 0 auto;
};
.layout-header {
  background: #234994;
  .a-input {
    width: 294px;
    opacity: 0.1;
  }
}
.text {
	font-size: 3rem; line-height: 1;
}
</style>