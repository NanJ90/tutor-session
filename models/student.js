// "use strict";
//
// var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {

  var Student = sequelize.define("Student", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
  			type: DataTypes.STRING,
  			notNull: true,
  			validate: {
  				len: [0, 100]
  			}
  		},
      password: {
  			type: DataTypes.STRING,
  			notNull: true
  		},
      email: {
        type: DataTypes.STRING,
        notNull: true,
        validate: {
          isEmail: true
        }
      },
      phone: {
        type: DataTypes.STRING,
        notNull: true,
        validate: {
          len: [7, 22]
        }
      }
    }
    // ,
    // THIS IS COPIED FROM GEN'S CODE FROM OUR LAST PROJECT TOGETHER
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
   // 				Student.hasMany(models.Meeting);
   // 			}
   // 		},
   // 		instanceMethods: {
   // 			validPassword: function(password) {
   // 				return bcrypt.compareSync(password, this.password);
   // 			}
   // 		}
   // 	}
  );

    Student.associate = function(models) {

      Student.hasMany(models.Meeting, {
        //I don't know if we need to do something here.

        //They do need to be associated but we don't want to
        //    cascade upon delete because the time slots
        //    should remain if they do

        // onDelete: "?",
        // orSomethingElseEntirely: "?"
      });

    };

    return Student;
};

// MODEL FOR MODEL FROM TRELLO
// [LOGIN AND SIGN UP]
// Student = {
// studentName: string,
// password: string,
// email:
// phone: int
// primarykey: id
// }
