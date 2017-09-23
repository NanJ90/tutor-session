module.exports = function(sequelize, DataTypes) {

  var Meetings = sequelize.define("Meetings", {
      id: {
  			type: DataTypes.INTEGER,
  			primaryKey: true,
  			autoIncrement: true
  		},
      day: {
        type: DataTypes.DATEONLY,
        isDate: true,
        notNull: true
      },
      hour: {
        type: DataTypes.TIME,
        notNull: true
      }
  });

  Meetings.associate = function(models) {

      Meetings.belongsTo(models.Tutor, {
        foreignKey: {
          notNull: true
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
