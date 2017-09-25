var db = require("../models");

module.exports = function(app) {
  app.get("/api/authors", function(req, res) {
    db.Meeting.findAll({}).then(function(dbMeeting) {
      res.json(dbMeeting);
    });
  });

  app.get("/api/meetings/:id", function(req, res) {
    db.Meeting.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbMeeting) {
      res.json(dbMeeting);
    });
  });

  app.post("/api/meetings", function(req, res) {
    db.Meeting.create(req.body).then(function(dbMeeting) {
      res.json(dbMeeting);
    });
  });

  app.delete("/api/meetings/:id", function(req, res) {
    db.Meeting.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMeeting) {
      res.json(dbMeeting);
    });
  });

};
