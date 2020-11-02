const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DrinkSchema = new Schema({
  name: String,
  image: String,
  instructions: String,
  ingredient1: String,
  ingredient2: String,
  ingredient3: String,
  ingredient4: String,
  ingredient5: String,
  ingredient6: String,
  ingredient7: String,
  ingredient8: String,
  ingredient9: String,
  ingredient10: String,
  ingredient11: String,
  ingredient12: String,
})

const Cocktail = mongoose.model('drinksDB', DrinkSchema);

module.exports = Cocktail;