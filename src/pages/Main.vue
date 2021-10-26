<template>
  <div>
    <a-layout class="main-layout">
      <a-layout-header class="layout-header">
        <cocktails-header :nameCocktail.sync="nameCocktail" :filterCocktails.sync="filterCocktails"/>
      <div class="favourites">
      </div>
      </a-layout-header>
      
      <a-layout-content class="layout-content">
        <cocktail-list
          :cocktails="cocktails"
          :isCocktailsLoading="isCocktailsLoading"
        />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import CocktailList from "@/components/CocktailList.vue";
import CocktailsHeader from "@/components/CocktailsHeader.vue";
import cocktailsApi from "@/api/cocktail";

export default {
  components: {
    CocktailList,
    CocktailsHeader,
  },
  data() {
    return {
      cocktails: [],
      isCocktailsLoading: false,
      nameCocktail: '',
      filterCocktails: { a: 'Alcoholic', c: 'Cocktail' }
    }
  },
  watch: {
    nameCocktail(val) {
      this.fetchSearch(val)
    },
    filterCocktails(val) {
      this.fetchByFilter(val)
    }
  },
  created() {
    this.fetchSearch('')
  },
  methods: {
    fetchSearch(name) {
      this.isCocktailsLoading = true;
      cocktailsApi
        .fetchSearch(name)
        .then((cocktails) => this.cocktails = cocktails)
        .finally(() => (this.isCocktailsLoading = false))
    },
    fetchByFilter(filter) {
      this.isCocktailsLoading = true;
      cocktailsApi
        .fetchByFilter(filter)
        .then((cocktails) => this.cocktails = cocktails)
        .finally(() => (this.isCocktailsLoading = false))
    }
  },
};
</script>

<style lang="scss">
.layout-header {
  position: fixed;
  top: 0;
  padding: 0;
  width: var(--app-width);
  z-index: 100;
}
.layout-content {
  margin-top: 4rem;
}
.text {
  font-size: 3rem;
  line-height: 1;
}

</style>