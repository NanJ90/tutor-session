module.exports = function(sequelize, DataTypes) {

  var Meetings = sequelize.define("Meetings", {
      day: {
        type: DataTypes.DATE,
        isDate: true,
        allowNull: false
      }
  }, {
    timestamps: false
  });

  Meetings.associate = function(models) {

      Meetings.belongsTo(models.Tutor, {
        foreignKey: {
          allowNull: true
        }
      });
      Meetings.belongsTo(models.Student, {
        foreignKey: {
          allowNull: true
        }
      });
  };

  return Meetings;
}

// MODEL FOR MODEL FROM TRELLO
// Meetings = {
// date: date,
// time: int 6-22,
// tutorID: (Foreign Key),
// studentID: (Foreign Key) allow null,
// primaryKey: id
// }
