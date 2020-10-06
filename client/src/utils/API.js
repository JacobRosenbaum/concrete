import axios from "axios";

export default {
  getIngredient: function(ingredient) {
      console.log(ingredient);
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
  },
  getDrink: function(drink) {
    console.log(drink);
  return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
}
}