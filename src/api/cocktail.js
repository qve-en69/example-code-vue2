import axios from "axios";

export default {
    fetchCocktails(params) {
        return axios
            .get("http://localhost:8080/api/json/v1/1/search.php", { params: params })
            .then(response => response.data.drinks)
            .catch(error => console.log(error))
    }
}