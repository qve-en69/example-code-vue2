<template>
  <div>
    <div class="imgCocktail" :style="{ backgroundImage: backgroundImage }">
      <a-button type="link" @click="$router.go(-1)">
        <a-icon type="close" :style="{ fontSize: '25px', color: '#fff' }" />
      </a-button>
      <a-button type="link">
        <a-icon type="star" :style="{ fontSize: '25px', color: '#fff' }" />
      </a-button>
    </div>
    <div class="infoCocktail">

    </div>
  </div>
</template>

<script>
import cocktailsApi from "@/api/cocktail";

export default {
  data() {
    return {
      cocktailId: this.$route.params.id,
      cocktail: [],
      isCocktailsLoading: false,
    };
  },
  created() {
    this.fetchCocktail();
  },
  computed: {
    backgroundImage() {
      return `url('${this.cocktail.strDrinkThumb}')`;
    },
  },
  methods: {
    fetchCocktail() {
      this.isCocktailsLoading = true;
      console.log('startFetchById', this.cocktailId)
      cocktailsApi
        .fetchById(this.cocktailId)
        .then((cocktail) => {
            this.cocktail = cocktail
            console.log('cocktail', cocktail)
        })
        .finally(() => (this.isCocktailsLoading = false));
    },
  },
};
</script>

<style scoped>
.imgCocktail {
  background-size: cover;
  height: 414px;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
}
</style>