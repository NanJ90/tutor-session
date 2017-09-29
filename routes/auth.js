
var path = require('path');


module.exports = function(app, passport) {

app.get("/developers", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get("/student", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get("/tutor", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})




// app.get('/', function(req, res){
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });



// app.get('/tutor/signup', function(req, res) {
// 	// res.render('signup');
// 	res.sendFile(path.join(__dirname, '../public/index.html'));
// });


//   app.get('/tutor/signin', function(req, res) {
// 	// res.render('signin');
// 	res.sendFile(path.join(__dirname, '../public/index.html'));

// });



// app.post('/tutor/signup', passport.authenticate('tutor-signup', 
//   { 
//     successRedirect: '/',
//     failureRedirect: '/'
//   }
// ));



// app.post('/tutor/signin', passport.authenticate('tutor-signin', 
//   { 
//     successRedirect: '/', 
//     failureRedirect: '/'
//   }
// ));


// app.get('/tutor/dashboard',isLoggedIn, function(req, res) {
// 	// res.render('dashboard');
// 	res.sendFile(path.join(__dirname,'../public/index.html')); 
// });



// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////

// app.get('/student', function(req, res) {
//   // res.render('signup');
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });


// app.get('/student', function(req, res) {
//   // res.render('signin');
//   res.sendFile(path.join(__dirname, '../public/index.html'));

// });



// app.post('/student', passport.authenticate('student-signup', 
//   { 
//     successRedirect: '/',
//     failureRedirect: '/'
//   }
// ));



// app.post('/student/signin', passport.authenticate('student-signin', 
//   { 
//     successRedirect: '/', 
//     failureRedirect: '/'
//   }
// ));


// app.get('/student/dashboard',isLoggedIn, function(req, res) {
//   // res.render('dashboard');
//   res.sendFile(path.join(__dirname,'../public/index.html')); 
// });




// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////








app.get('/logout', function(req, res) {
	req.session.destroy(function(err) {
  		res.redirect('/');
  	});

});




function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}


}








