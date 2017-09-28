module.exports = function(sequelize, DataTypes) {

  var TutorSubject = sequelize.define("TutorSubject",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }
  }, {
    timestamps: false
  });


  return TutorSubject;
}
