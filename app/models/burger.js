// Dependencies
// =============================================================

// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection");
const { Sequelize, DataTypes } = require("sequelize");
  
  // "createdAt" and "updatedAt" in our Burger table 
  var Burger = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // to make sure the user has at least 1 character when entering a burger
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      // to ensure our burgers are not eaten prior to the user clicking the "devore me" btn
      defaultValue: false,
      validate: {
        // to make sure the user has at least 1 character when entering a burger
        len: [1]
      }
    },
  }, 
  {  // "timestamps: false" is used to disable the automatically added the columns 
    timestamps: false
  });
  
  // Syncs with DB
  Burger.sync();

  module.exports = Burger;

