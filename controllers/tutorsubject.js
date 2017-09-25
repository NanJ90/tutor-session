var db = require("../models");

module.exports = function(app) {
  app.get("/api/tutorsubjects", function(req, res) {
    db.TutorSubject.findAll({}).then(function(dbTutorSubject) {
      res.json(dbTutorSubject);
    });
  });

};
