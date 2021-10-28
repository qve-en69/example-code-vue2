<template>
  <div style="position: relative">
    <div class="header">
      <a-button type="link" @click="onClickButtonFilter" ghost>
        <a-icon type="filter" theme="filled" style="font-size: x-large" />
      </a-button>
      <a-input
        placeholder="Название коктейля..."
        class="a-input"
        v-model="name"
      />
      <a-button type="link" @click="onClickButtonFavorites" ghost>
        <a-icon type="star" theme="filled" style="font-size: x-large" />
      </a-button>
    </div>
    <transition name="filter">
      <div class="filter" v-show="filterShow">
        <div class="group">
          <a-radio-group v-model="alcoholic" button-style="solid">
            <a-radio-button value="Alcoholic"> Алкогольный </a-radio-button>
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
            <a-radio-button value="Cocktail"> Коктейль </a-radio-button>
          </a-radio-group>
        </div>
      </div>
    </transition>
    <div class="favorites" v-show="favShow">
      <div class="fav" v-for="fav in favorites" :key="fav.id">
        <img style="height: 3rem" :src="fav.preview" />
        <div>{{ fav.title }}</div>
        <a-button type="link" @click.stop="onClickButtonRemoveFav(fav)" ghost>
          <a-icon
            type="star"
            theme="filled"
            style="font-size: x-large; color: red"
          />
        </a-button>
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
      required: true,
    },
  },
  data() {
    return {
      name: this.nameCocktail,
      filterShow: false,
      alcoholic: this.filterCocktails.a,
      category: this.filterCocktails.c,
      favShow: false,
      favorites: localStorage.favorites
        ? JSON.parse(localStorage.favorites)
        : [],
    };
  },
  watch: {
    name(val) {
      this.$emit("update:nameCocktail", val);
    },
    alcoholic() {
      this.$emit("update:filterCocktails", {
        a: this.alcoholic,
        c: this.category,
      });
    },
    category() {
      this.$emit("update:filterCocktails", {
        a: this.alcoholic,
        c: this.category,
      });
    },
  },
  methods: {
    onClickButtonFilter() {
      if (!this.favShow) this.filterShow = !this.filterShow;
    },
    onClickButtonFavorites() {
      if (!this.filterShow) this.favShow = !this.favShow;
    },
    onClickButtonRemoveFav(item) {
      if (localStorage.favorites) {
        let favs = JSON.parse(localStorage.favorites);
        favs = favs.filter((fav) => fav.id !== item.id);
        localStorage.favorites = JSON.stringify(favs);
      }
      this.favorites = localStorage.favorites
        ? JSON.parse(localStorage.favorites)
        : [];
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #234994;
  height: 4rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  z-index: 2;
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
.filter,
.favorites {
  padding: 15px;
  background: white;
  box-shadow: 0 15px 10px -8px rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 1;
  top: -130px;
}
.group {
  margin: -10px;
}
.fav {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  img {
    flex-basis: 3rem;
  }
  div {
    text-align: left;
    flex-grow: 1;
    line-height: 3rem;
    padding-left: 1rem;
  }
  a-button {
    text-align: left;
    flex-basis: 3rem;
  }
}
.filter-enter-from {
  margin-top: -130px;
}
.filter-enter-active {
  transition: margin-top 0.5s ease;
}
.filter-enter-to {
  margin-top: 0px;
}
.filter-leave-from {
  margin-top: 100px;
}
.filter-leave-active {
  transition: margin-top 0.5s ease;
}
.filter-leave-to {
  margin-top: -130px;
}
</style>
