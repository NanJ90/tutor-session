var db = require("../models");

module.exports = function(app) {
  app.get("/api/meetings", function(req, res) {
    db.Meetings.findAll({}).then(function(dbMeeting) {
      res.json(dbMeeting);
    });
  });

  app.get("/api/meetings/:id", function(req, res) {
    db.Meetings.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbMeeting) {
      res.json(dbMeeting);
    });
  });

  app.post("/api/meetings", function(req, res) {
    db.Meetings.create(req.body).then(function(dbMeeting) {
      res.json(dbMeeting);
    });
  });

  app.delete("/api/meetings/:id", function(req, res) {
    db.Meetings.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMeeting) {
      res.json(dbMeeting);
    });
  });

};
