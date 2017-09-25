module.exports = function(sequelize, DataTypes) {

  var Subject = sequelize.define("Subject", {
      id: {
  			type: DataTypes.INTEGER,
  			primaryKey: true,
  			autoIncrement: true
  		},
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
    timestamps: false
  });

  Subject.associate = function(models) {

      Subject.belongsTo(models.Tutor, {
        foreignKey: {
          notNull: true
        }
      });

  };

  return Subject;
}

// MODEL FOR MODEL FROM TRELLO
// Subject = {
// subjectName: string,
// primaryKey:id
// }
