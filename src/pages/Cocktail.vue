<template>
    <div>
        {{ cocktail }}
        <img slot="cover" alt="example" :src="cocktail.strDrinkThumb" />
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
        }
    },
    created() {
        this.fetchCocktail()
    },
    watch: {
        cocktail(value) {
            console.log('new cocktail', value)
        }
    },
    methods: {
        fetchCocktail() {
            this.isCocktailsLoading = true;
            cocktailsApi
                .fetchById(this.cocktailId)
                .then((cocktail) => (this.cocktail = cocktail))
                .finally(() => (this.isCocktailsLoading = false));
        }
    },
}
</script>

<style scoped>

</style>