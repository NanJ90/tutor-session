module.exports = function(sequelize, DataTypes) {

  var Subject = sequelize.define("Subject", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
    timestamps: false
  });

  Subject.associate = function(models) {

      Subject.belongsToMany(models.Tutor, {
        through: 'tutor_subject',
        foreignKey: 'SubjectId'
      });
  };

  return Subject;
}

// MODEL FOR MODEL FROM TRELLO
// Subject = {
// subjectName: string,
// primaryKey:id
// }
