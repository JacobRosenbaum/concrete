const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Cocktail
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Cocktail
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Cocktail
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .then(console.log('posted from controller'))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Cocktail
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log(req.params)
    db.Cocktail
      .findById({ _id: req.params.id })
      .then(dbModel => {
        console.log(dbModel);
        
        dbModel.remove()

      }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};