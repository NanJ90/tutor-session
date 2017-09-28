// THIS PART IS COPIED FROM GEN'S CODE FROM OUR LAST PROJECT TOGETHER
//    BECAUSE I THINK IT MAY BE NECESSARY?
// "use strict";
//
// var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {

  var Tutor = sequelize.define("Tutor", {
      name: {
  			type: DataTypes.STRING,
  			allowNull: false,
  			validate: {
  				len: [0, 100]
  			}
  		},
      password: {
  			type: DataTypes.STRING,
  			allowNull: true
  		},
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: true
        }
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [7, 22]
        }
      },
      imageURL: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isUrl: true
        }
      }
    }

   , {
     timestamps: false
   });

    Tutor.associate = function(models) {

      Tutor.hasMany(models.Meetings, {
        onDelete: "CASCADE"
      });

      Tutor.belongsToMany(models.Subject, {
        through: {model: "TutorSubject"},
        timestamps: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: 'tutor_id'
      });


    };

    return Tutor;
};

// MODEL FOR MODEL FROM TRELLO
// Tutor = {
// tutorName: string ,
// password string:,
// email: string,
// phone: int,
// subjects: [],
// imageURL:string,
// primarykey: id
// }
