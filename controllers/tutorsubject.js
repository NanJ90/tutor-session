
var db = require("../models");
var sequelize = require("sequelize");

module.exports = function(app) {
  app.get("/api/tutorsubject", function(req, res) {
    db.TutorSubject.findAll({}).then(function(dbTutorSubject) {
      res.json(dbTutorSubject);
    });
  });


  app.get("/api/tutorsubject/:id", function(req, res) {
    db.TutorSubject.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbTutorSubject) {
      res.json(dbTutorSubject);
    });
  });

  //FIND BY SUBJECT ID
  app.get("/api/tutorsubject/subject/:id", function(req, res) {
    db.TutorSubject.findAll({
      where: {
        subject_id: req.params.id
      }
    }).then(function(dbTutorSubject) {
      res.json(dbTutorSubject);
    });
  });

  //FIND BY TUTOR ID
  app.get("/api/tutorsubject/tutor/:id", function(req, res) {
    db.TutorSubject.findAll({
      where: {
        tutor_id: req.params.id
      }
    }).then(function(dbTutorSubject) {
      res.json(dbTutorSubject);
    });
  });

  app.post("/api/tutorsubject", function(req, res) {
    db.TutorSubject.create(req.body).then(function(dbTutorSubject) {
      res.json(dbTutorSubject);
    });
  });

  app.delete("/api/tutorsubject/:id", function(req, res) {
    db.TutorSubject.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTutorSubject) {
      res.json(dbTutorSubject);
    });
  });

};
