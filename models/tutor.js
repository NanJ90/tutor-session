
// var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {

  var Tutor = sequelize.define("Tutor", {
      name: {
  			type: DataTypes.STRING,
  			allowNull: false,
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
    // ,
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
        // onDelete: "CASCADE"
      });

      Tutor.belongsToMany(models.Subject, {
        through: 'tutor_subject',
        foreignKey: 'TutorId'
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
