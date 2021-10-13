<template>
  <div>
    <a-layout class="main-layout">
      <a-layout-header class="layout-header">
        <cocktails-header />
      </a-layout-header>
      <a-layout-content>
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
    };
  },
  created() {
    this.fetchCocktails();
  },
  methods: {
    fetchCocktails(params = { f: "a" }) {
      this.isCocktailsLoading = true;
      cocktailsApi
        .fetchCocktails(params)
        .then((cocktails) => (this.cocktails = cocktails))
        .finally(() => (this.isCocktailsLoading = false));
    },
  },
};
</script>

<style lang="scss">
.layout-header {
  padding: 0;
  height: auto;
}
.text {
  font-size: 3rem;
  line-height: 1;
}
</style>