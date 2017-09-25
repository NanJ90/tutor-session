// THIS PART IS COPIED FROM GEN'S CODE FROM OUR LAST PROJECT TOGETHER
//    BECAUSE I THINK IT MAY BE NECESSARY?
// "use strict";
//
// var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {

  var Tutor = sequelize.define("Tutor", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
  			type: DataTypes.STRING,
  			allowNull: false,
  			validate: {
  				len: [0, 100]
  			}
  		},
      password: {
  			type: DataTypes.STRING,
  			allowNull: false
  		},
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
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
    // ,
    // THIS PART IS COPIED FROM GEN'S CODE FROM OUR LAST PROJECT TOGETHER
    //    BECAUSE I THINK IT MAY BE NECESSARY?
    // {
  	// 	timestamps: false
  	// },
    //   {
   // 		hooks: {
   // 			beforeValidate: function(user, options) {
   // 				user.username = user.username.toLowerCase();
   // 			}
   // 		},
   // 		classMethods: {
   // 			generateHash: function(password) {
   // 				return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
   // 			},
   // 			associate: function(models) {
   // 				Tutor.hasMany(models.Meeting);
   // 			}
   // 		},
   // 		instanceMethods: {
   // 			validPassword: function(password) {
   // 				return bcrypt.compareSync(password, this.password);
   // 			}
   // 		}
   // 	}
   , {
     timestamps: false
   });

    Tutor.associate = function(models) {

      Tutor.hasMany(models.Meetings, {
        onDelete: "CASCADE"
      });

      Tutor.hasMany(models.Subject, {
        onDelete: "CASCADE"
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
