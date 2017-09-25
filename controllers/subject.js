var db = require("../models");

module.exports = function(app) {
  app.get("/api/subjects", function(req, res) {
    db.Subject.findAll({}).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });

};
