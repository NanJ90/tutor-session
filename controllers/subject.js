var db = require("../models");

module.exports = function(app) {
  app.get("/api/subjects", function(req, res) {
    db.Subject.findAll({}).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });

  app.post("/api/subjects", function(req, res) {
    db.Subject.create(req.body).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });

  app.delete("/api/subjects/:id", function(req, res) {
    db.Subject.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });


};
