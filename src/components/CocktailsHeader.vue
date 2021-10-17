<template>
<div>
  <div class="header">
    <a-button type="link" @click="filter=!filter" ghost>
      <a-icon type="filter" theme="filled" style="font-size: x-large" />
    </a-button>
    <a-input placeholder="Название коктейля..." class="a-input" v-model="name"/>
    <a-button type="link" ghost>
      <a-icon type="star" theme="filled" style="font-size: x-large" />
    </a-button>
    
  </div>
  <div class="filter" v-show="filter">
    <div class="group">
      <a-radio-group default-value="alcohol" button-style="solid">
        <a-radio-button value="alcohol">
          Алкогольный
        </a-radio-button>
        <a-radio-button value="nonalcohol">
          Безалкогольный
        </a-radio-button>
      </a-radio-group>
    </div>
    <div class="group">
      <a-radio-group default-value="cocktail" button-style="solid">
        <a-radio-button value="ordinary">
          Обычный напиток
        </a-radio-button>
        <a-radio-button value="cocktail">
          Коктейль
        </a-radio-button>
      </a-radio-group>
    </div>
  </div>
</div>

</template>

<script>

export default {
  props: {
    nameCocktail: String
  },
  data() {
    return {
      name: this.nameCocktail,
      filter: false,
    }
  },
  watch: {
    
    name(val) {
      this.$emit('update:nameCocktail', val)
    },
    filter(val) {
      this.$emit('update:flagFilter', val)
    }
  }
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
.filter {
  padding: 15px;
  background: white;
  box-shadow: 0 15px 10px -8px rgba(0, 0, 0, .2);
}
.group {
  margin: -10px;
}
</style>
