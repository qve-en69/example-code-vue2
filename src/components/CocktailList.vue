<template>
  <div v-if="isCocktailsLoading">
    <a-card
      class="card-item"
      style="height: 150px"
      hoverable
      :loading="isCocktailsLoading"
    >
      <a-card-meta />
    </a-card>
  </div>
  <div v-else>
    <a-card
      class="card-item"
      hoverable
      v-for="cocktail in cocktails"
      :key="cocktail.idDrink"
      @click="$router.push({ name: 'Cocktail', params: { id: cocktail.idDrink } })"
    >
      <img slot="cover" alt="example" :src="cocktail.strDrinkThumb" />
      <a-card-meta :title="cocktail.strDrink" />
    </a-card>
  </div>
</template>

<script>
export default {
  props: {
    cocktails: {
      type: Array,
      required: true,
    },
    isCocktailsLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.card-item {
  margin: 20px;
}
</style>