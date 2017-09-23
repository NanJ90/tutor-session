module.exports = function(sequelize, DataTypes) {

  var TutorSubject = sequelize.define('TutorSubject', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
    // ,
    // role: Sequelize.STRING
    //NOT SURE WHAT WE NEED, IF ANYTHING, HERE
  });
  Tutor.belongsToMany(Subject, { through: TutorSubject });
  Subject.belongsToMany(Tutor, { through: TutorSubject });
}
