var db = require("../models");

module.exports = function(app) {
  app.get("/api/tutors", function(req, res) {
    db.Tutor.findAll({}, {through:[db.TutorSubject]}).then(function(dbTutor) {
      res.json(dbTutor);
    });
  });

  app.get("/api/tutors/:id", function(req, res) {
    db.Tutor.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbTutor) {
      res.json(dbTutor);
    });
  });

  app.post("/api/tutors", function(req, res) {
    db.Tutor.create(req.body).then(function(dbTutor) {
      res.json(dbTutor);
    });
  });

  app.delete("/api/tutors/:id", function(req, res) {
    db.Tutor.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTutor) {
      res.json(dbTutor);
    });
  });

};
