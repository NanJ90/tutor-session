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

  Subject.associate = function(models) {

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
  };

  return Subject;
}


// Subject = {
// subjectName: string,
// primaryKey:id
// }
