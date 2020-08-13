// Dependencies
//Set up the MYSQL connection using Sequilize
// ========================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if(process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize("burgers_db", "root", "password", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

  });
}

// Exports the connection for other files to use
module.exports = sequelize;