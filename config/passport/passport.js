
// ---------- load bcrypt ---------- //
var bCrypt = require('bcrypt-nodejs');

var db = require("../../models");


module.exports = function(passport) {

    var Student = db.student;
    var Tutor = db.tutor;

    var LocalStrategy = require('passport-local').Strategy;


    passport.serializeUser(function(user, done) {
        console.log("serialize User: " + user);
        done(null, user.id);
    });


    // ----- deserialize the user ----- //
    passport.deserializeUser(function(id, done) {
        console.log("deserialize ID:" + id);
        console.log("deserialize");

        Student.findById(id).then(function(user) {
            if (user) {
                done(null, user.get());
            } 
            else {
                Tutor.findById(id).then(function(user) {
                    if (user) {
                        done(null, user.get());
                    }
                    else {
                        done(user.errors, null);
                    }
                }).catch(function(err) {
                    throw err;
                });
                done(user.errors, null);
            }

        }).catch(function(err) {
            done(err, false);
        });
    });

    // ---------- Local Student SignUp ---------- //
    passport.use('student-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, email, password, done) {

            // ----- function to create hash for user's password ----- //
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            // ----- looks for email ----- //
            Student.findOne({ 
                where: { 
                    email: email 
                } 
            }).then(function(user) {

                // ----- checks if email was taken ----- //
                if (user) {
                    return done(null, false, { 
                        message: 'That email is already taken' 
                    });
                } 
                else {

                    // ----- stores user's input ----- //                    
                    var data = {
                        email: email,
                        password: generateHash(password),
                        firstname: req.body.firstname,
                        lastname: req.body.lastname
                    };

                    // ----- creates new user homepage ----- //
                    Student.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            done(null, false);
                        }

                        if (newUser) {
                            done(null, newUser);

                        }

                    // ----- catch error for creating new user ----- //
                    }).catch(function(err) {
                        throw err;
                    });
                }

            // ----- catch error for users input ----- //
            }).catch(function(err) {
                throw err;
            });
        }
    ));

    // ---------- Local SignIn ---------- //
    passport.use('student-signin', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {

            var user = Student;

            // ----- function to check if password is valid ----- //
            var isValidPassword = function(userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }

            Student.findOne({ 
                where: { 
                    email: email
                } 
            }).then(function(user) {

                // ----- checks if username exist ----- //
                if (!user) {
                    return done(null, false, { 
                        message: 'Email does not exist' 
                    });
                }

                // ----- checks if password is valid ----- //
                if (!isValidPassword(user.password, password)) {

                    return done(null, false, { message: 
                        'Incorrect password.' 
                    });

                }

                // ----- checks the user data ----- //
                var userinfo = user.get();
                return done(null, userinfo);

            // ----- catch error for users signin ----- // 
            }).catch(function(err) {
                throw err;
                return done(null, false, { 
                    message: 'Something went wrong with your Signin' 
                });
            });
        }
    ));


    /////////////////////////////////////////////////////////////////
    passport.use('tutor-signup', new LocalStrategy(

        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, email, password, done) {


            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            Tutor.findOne({ where: { email: email } }).then(function(user) {

                if (user) {
                    return done(null, false, { message: 'That email is already taken' });
                } else {
                    var userPassword = generateHash(password);
                    var data = {
                        email: email,
                        password: userPassword,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname
                    };


                    Tutor.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }

                        if (newUser) {
                            return done(null, newUser);

                        }


                    });
                }


            });



        }



    ));

    //LOCAL SIGNIN
    passport.use('tutor-signin', new LocalStrategy(

        {

            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, email, password, done) {

            var user = Tutor;

            var isValidPassword = function(userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }

            Tutor.findOne({ where: { email: email } }).then(function(user) {

                if (!user) {
                    return done(null, false, { message: 'Email does not exist' });
                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, { message: 'Incorrect password.' });

                }

                var userinfo = user.get();

                return done(null, userinfo);

            }).catch(function(err) {

                console.log("Error:", err);

                return done(null, false, { message: 'Something went wrong with your Signin' });


            });

        }
    ));










}