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
      through: {model: "TutorSubject"},
      timestamps: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      foreignKey: 'subject_id'
    });

  };

  return Subject;
}

// MODEL FOR MODEL FROM TRELLO
// Subject = {
// subjectName: string,
// primaryKey:id
// }
