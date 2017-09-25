module.exports = function(sequelize, DataTypes) {

  var TutorSubject = sequelize.define('TutorSubject', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });

  Tutor.belongsToMany(Subject, {
    through: TutorSubject,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    foreignKey: 'tutor_id'
  });
  
  Subject.belongsToMany(Tutor, {
    through: TutorSubject,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    foreignKey: 'subject_id'
  });
}
