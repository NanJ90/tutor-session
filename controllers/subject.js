var db = require("../models");

module.exports = function(app) {
  app.get("/api/subjects", function(req, res) {
    db.Subject.findAll({}).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });

  app.get("/api/subjects/:id", function(req, res) {
    db.Subject.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });

};
