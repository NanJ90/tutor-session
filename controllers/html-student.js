var db = require("../models");
const path = require('path');

module.exports = function(app, passport) {
  app.get("/student", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

   app.get("/tutor", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};

