module.exports = function(sequelize, DataTypes) {

  var Subject = sequelize.define("Subject", {
      id: {
  			type: DataTypes.INTEGER,
  			primaryKey: true,
  			autoIncrement: true
  		},
      name: {
        type: DataTypes.STRING,
        notNull: true
      }
  });

  // I think we don't need this, but I'm leaving it here for now just in case
  // Subject.associate = function(models) {

      // MAY HAVE FOUND BETTER "BELONGS TO MANY" FUNCTION THAT SIMPLIFIES THIS
      // Subject.belongsTo(models.Tutor, {
      //   foreignKey: {
      //     notNull: true
      //   }
      // });
      // Subject.belongsTo(models.Student, {
      //   foreignKey: {
      //     allowNull: true
      //   }
      // });
  // };

  return Subject;
}

// MODEL FOR MODEL FROM TRELLO
// Subject = {
// subjectName: string,
// primaryKey:id
// }
