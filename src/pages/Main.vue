<template>
  <div>
    <a-layout class="main-layout">
      <a-layout-header class="layout-header">
        <a-button type="link" ghost>
          <a-icon type="filter" theme="filled" style="font-size: x-large" />
        </a-button>
        <a-input placeholder="Название коктейля..." class="a-input" />
        <a-button type="link" ghost>
          <a-icon type="star" theme="filled" style="font-size: x-large"/>
        </a-button>
      </a-layout-header>
      <a-layout-content>
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
          >
            <img slot="cover" alt="example" :src="cocktail.strDrinkThumb" />
            <a-card-meta :title="cocktail.strDrink" />
            <!-- <template slot="description"> <div class=".text"> www.instagram.com </div></template> -->
            <!-- </a-card-meta> -->
          </a-card>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import axios from "axios";

export default {
  components: {
    Nav,
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
    async fetchCocktails() {
      try {
        this.isCocktailsLoading = true;
        axios;
        const response = await axios.get(
          "http://localhost:8080/api/json/v1/1/search.php",
          {
            params: {
              f: "a",
            },
          }
        );
        this.cocktails = response.data.drinks;
        console.log("response", response);
      } catch (e) {
        console.log("fetch error", e);
      } finally {
        this.isCocktailsLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-layout {
  width: 414px;
  margin: 0 auto;
}
.layout-header {
  background: #234994;
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
.text {
  font-size: 3rem;
  line-height: 1;
}
.card-item {
  margin: 20px;
}
/* ::-webkit-input-placeholder {
  color: white;
} */
</style>