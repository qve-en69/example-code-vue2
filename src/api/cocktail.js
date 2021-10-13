import axios from "axios";

export default {
    fetchCocktails(params) {
        return axios
            .get("http://localhost:8080/api/json/v1/1/search.php", { params: params })
            .then(response => response.data.drinks)
            .catch(error => console.log(error))
    },
    fetchById(id) {
        return axios
            .get("http://localhost:8080/api/json/v1/1/lookup.php", { params: { i: id } })
            .then(response => response.data.drinks[0])
            .catch(error => console.log(error))
    }
}