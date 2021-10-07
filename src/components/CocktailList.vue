<template>
  <div v-if="cocktails.length > 0">
    <transition-group name="cocktails-list">
      <div v-for="cocktail in cocktails" :key="cocktail.id">
        <a-layout class="main-layout">
          <a-layout-header class="layout-header">
            <a-input placeholder="Название коктейля..." class="a-input" />
          </a-layout-header>
          <a-layout-content>
            <a-card hoverable style="width 240px" size="small">
              <img
                slot="cover"
                alt="example"
                :src="cocktail.image"
              />
              <a-card-meta :title="cocktail.title" />
            </a-card>
          </a-layout-content>
        </a-layout>
      </div>
    </transition-group>
  </div>
  <h2 v-else>Список коктейлей пуст</h2>
</template>

<script>
export default {
  props: {
    cocktails: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.cocktail-list-item {
  display: inline-block;
  margin-right: 10px;
}
.cocktail-list-enter-active,
.cocktail-list-leave-active {
  transition: all 0.4s ease;
}
.cocktail-list-enter-from,
.cocktail-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.cocktail-list-move {
  transition: transform 0.4s ease;
}
</style>