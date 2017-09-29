var db = require("../models");

module.exports = function(app) {
  app.get("/api/meetings", function(req, res) {
    db.Meetings.findAll({}).then(function(dbMeeting) {
      res.json(dbMeeting);
    });
  });

  //FIND MEETINGS BY TUTOR ID
  app.get("/api/meetings/tutors/:id", function(req, res) {
    db.Meetings.findAll({
      where: {
        TutorId: req.params.id
      }
    }).then(function(dbMeeting) {
      res.json(dbMeeting);
    });
  });

  //FIND MEETINGS BY YEAR
  app.get("/api/meetings/yearmonthday/:year", function(req, res) {
    var nextYear = parseInt(req.params.year) + 1;
    var rnextYear = nextYear.toString();
    console.log(rnextYear);
    db.Meetings.findAll({
      where: {
        day: { $between: [new Date(req.params.year),new Date(rnextYear)] }
      }
    }).then(function(dbMeeting) {
      res.json(dbMeeting);
    });
  });

  //FIND MEETINGS BY MONTH
  app.get("/api/meetings/yearmonthday/:year/:month", function(req, res) {
    var nextMonth = parseInt(req.params.month) + 1;
    var rnextMonth = nextMonth.toString();
    var year = req.params.year + "-";
    console.log(rnextMonth);
    db.Meetings.findAll({
      where: {
        day: { $between: [new Date(year + req.params.month),new Date(year + rnextMonth)] }

      }
    }).then(function(dbMeeting) {
      res.json(dbMeeting);
    });
  });

  //FIND MEETINGS BY DAY
  app.get("/api/meetings/yearmonthday/:year/:month/:day", function(req, res) {
    var nextDay = parseInt(req.params.day) + 1;
    var rnextDay = nextDay.toString();
    var month = req.params.year + "-" + req.params.month + "-";
    console.log(rnextDay);
    db.Meetings.findAll({
      where: {
        day: { $between: [new Date(month + req.params.day), new Date(month + rnextDay)] }

      }
    }).then(function(dbMeeting) {
      res.json(dbMeeting);
    });
  });

  //FIND MEETINGS BY DAY
  // app.get("/api/meetings/day", function(req, res) {
  //   db.Meetings.findAll({
  //     where: {
  //     //   id: 3
  //       day: { $between: [new Date("2017-07-27T00:00:00.000Z"),new Datenod("2017-07-29T00:00:00.000Z")] }
  //     }
  //   }).then(function(dbMeeting) {
  //     res.json(dbMeeting);
  //   });
  // });

  //FIND MEETINGS BY ID
  // app.get("/api/meetings/:id", function(req, res) {
  //   db.Meetings.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbMeeting) {
  //     res.json(dbMeeting);
  //   });
  // });



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
