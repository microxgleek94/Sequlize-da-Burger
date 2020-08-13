// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
const path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Static directory
// to access static files such as css and JS
app.use(express.static(path.join(__dirname, "public")));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// =============================================================
// Import routes and give the server access to them.
require("../Sequlize-da-Burger/app/routes/html-routes.js")(app);
require("../Sequlize-da-Burger/app/routes/api-routes")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
app.listen(PORT, function () {
    console.log(`Server listening on: http://localhost:${PORT}`);
});