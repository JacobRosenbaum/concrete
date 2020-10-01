import axios from "axios";

export default {
  getDrink: function(ingredient) {
      console.log(ingredient);
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
  }
}