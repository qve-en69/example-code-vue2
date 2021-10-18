<template>
  <div>
    <div class="img-cocktail" :style="{ backgroundImage: backgroundImage }">
      <a-button type="link" @click="$router.go(-1)">
        <a-icon type="close" :style="{ fontSize: '25px', color: '#fff' }" />
      </a-button>
      <a-button type="link" @click="onClickStar">
        <a-icon type="star" :style="{ fontSize: '25px', color: '#fff' }" />
      </a-button>
    </div>
    <div class="info-cocktail">
      <div class="category">{{ cocktail.strAlcoholic }} • {{ cocktail.strCategory }}</div>
      <div class="title">{{ cocktail.strDrink }}</div>
      <div class="ingredients" v-for="ingred in ingredients" :key="ingred.key">
        <div class="ingredient">
          {{ ingred.ingredient }}
        </div>
        <div class="measure">
          {{ ingred.measure }}
        </div>
      </div>
      <div class="instructions">{{ cocktail.strInstructions }}</div>
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
    ingredients() {
      let ingreds = [];
      if (this.cocktail) {
        let num = 1;
        while (this.cocktail[`strIngredient${num}`]) {
          ingreds.push({
            key: num,
            ingredient: this.cocktail[`strIngredient${num}`],
            measure: this.cocktail[`strMeasure${num}`],
          });
          num++;
        }
      }
      return ingreds;
    }
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
    onClickStar() {
      if (!localStorage.favorites) 
        localStorage.favorites = JSON.stringify([this.cocktailId])
      else {
        let favs = JSON.parse(localStorage.favorites)
        favs.push(this.cocktailId)
        localStorage.favorites = JSON.stringify([...new Set(favs)])
      }
    }
  },
};
</script>

<style scoped>
.img-cocktail {
  background-size: cover;
  height: 414px;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
}
.info-cocktail {
  height: 100%;
  width: 100%;
  padding: 15px;
  text-align: left;
}
.category {
  color: #7B7B7B;
}
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}
.ingredients {
  display: flex;
  justify-content: space-between;
}
.instructions {
  margin-top: 15px;
}
</style>