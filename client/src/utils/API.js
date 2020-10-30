import axios from "axios";

export default {
  getIngredient: function(ingredient) {
      console.log(ingredient);
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
  },
  saveCocktail: function(cocktail) {
    console.log(cocktail);
    return axios.post("/api/cocktails", cocktail)
    .then(console.log('posted'));
  },
  getDrink: function(drink) {
    console.log(drink);
  return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
},
  
}