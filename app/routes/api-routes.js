// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Burger model
var db = require("../models/burger");

// Routes
// =============================================================

module.exports = function(app) {
// Get all burgers
app.get("/api/all", function(req, res) {
  db.findAll({}).then(function(results) {
    res.json(results);
  });
});


  app.post("/api/newburger", function(req, res) {
    // console.log(req.body);
    db.Burger.create({
        // squelize is creating a new burger in the table 
        // w/ the attributes we defined in the Burger model
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then (function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  // app.delete("/api/burger/:id", function(req, res) {
  //   db.Burger.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (result) {
  //     res.json(result);
  //   });
  // });
  
  // app.put("/api/burger/devour/:id", function(req, res) {
  //   db.Burger.update(
  //     {
  //       devoured: req.body.devoured
  //     },
  //     {
  //       where: {
  //         id: req.params.id
  //       }
  //     }).then(function (result) {
  //       res.json(result);
  //     });
  //   });
};