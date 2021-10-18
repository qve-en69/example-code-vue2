<template>
<div>
  <div class="header">
    <a-button type="link" @click="onClickButtonFilter" ghost>
      <a-icon type="filter" theme="filled" style="font-size: x-large" />
    </a-button>
    <a-input placeholder="Название коктейля..." class="a-input" v-model="name"/>
    <a-button type="link" @click="onClickButtonFavorites" ghost>
      <a-icon type="star" theme="filled" style="font-size: x-large" />
    </a-button>
    
  </div>
  <div class="filter" v-show="filterShow">
    <div class="group">
      <a-radio-group v-model="alcoholic" button-style="solid">
        <a-radio-button value="Alcoholic">
          Алкогольный
        </a-radio-button>
        <a-radio-button value="Non_Alcoholic">
          Безалкогольный
        </a-radio-button>
      </a-radio-group>
    </div>
    <div class="group">
      <a-radio-group v-model="category" button-style="solid">
        <a-radio-button value="Ordinary_Drink">
          Обычный напиток
        </a-radio-button>
        <a-radio-button value="Cocktail">
          Коктейль
        </a-radio-button>
      </a-radio-group>
    </div>
  </div>
  <div class="favorites" v-show="favShow">
    <div class="fav" v-for="fav in favorites" :key="fav.id">
      <img slot="cover" :src="fav.preview" />
      <div>{{ fav.title }}</div>
    </div>
  </div>
</div>

</template>

<script>

export default {
  props: {
    nameCocktail: String,
    filterCocktails: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      name: this.nameCocktail,
      filterShow: false,
      alcoholic: this.filterCocktails.a,
      category: this.filterCocktails.c,
      favShow: false,
      favorites: localStorage.favorites ? JSON.parse(localStorage.favorites) : []
    }
  },
  watch: {
    name(val) {
      this.$emit('update:nameCocktail', val)
    },
    alcoholic() {
      this.$emit('update:filterCocktails', { a: this.alcoholic, c: this.category })
    },
    category() {
      this.$emit('update:filterCocktails', { a: this.alcoholic, c: this.category })
    }
  },
  methods: {
    onClickButtonFilter() {
      if (!this.favShow)
        this.filterShow = !this.filterShow
    },
    onClickButtonFavorites() {
      if (!this.filterShow)
        this.favShow = !this.favShow
    }
  }
}

</script>

<style lang="scss" scoped>
.header {
  background: #234994;
  height: 4rem;
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
.filter, .favorites {
  padding: 15px;
  background: white;
  box-shadow: 0 15px 10px -8px rgba(0, 0, 0, .2);
}
.group {
  margin: -10px;
}
.fav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
</style>
