import React, { Component } from 'react';

class HomePage extends Component {

  render(){
    return (
      <div className="Homepage">	

<div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
            <div className="container">

                <h1 className="header center red-text text-lighten-2" id="title">PLW Education Tutoring</h1>
                <div className="row center">
                    <h5 className="header col s12 light">Our Online Tutor and Student Portal</h5>
                </div>
                <div className="row center">

                <button data-target="modal1" className="btn-large waves-effect waves-light red lighten-1 modal-trigger hoverable">Tutors</button>
                <button data-target="modal2" className="btn-large waves-effect waves-light red lighten-1 modal-trigger hoverable">Students</button>

                </div>
            </div>
        </div>


     <div className="parallax"><img src="./img/helloquence.jpg" alt="Unsplashed background img 1"></img></div>
    </div>

  <div id="modal1" className="modal">
    <div className="modal-content">
     <div id="login-page" className="row">
    <div className="col s12">
      <form className="login-form" id="signin" name="signin" method="post" action="/tutor/signin">
        <div className="row">
          <div className="input-field col s12 center">
            <img src="./img/plw-logo.png" width="25%" alt="" className="responsive-img valign profile-image-login"></img>
            <h5 className="center login-form-text">TUTOR LOGIN</h5>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 center">
            <input id="username" type="text"></input>
            <label for="username" className="center-align">Username</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 center">
            <input id="password" type="password"></input>
            <label for="password">Password</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <a href="index.html" className="btn waves-effect waves-light col s12 red">Login</a>
          </div>
        </div>
      </form>
    </div>
  </div>
    </div>
  </div>

  <div id="modal2" className="modal">
    <div className="modal-content">
     <div id="login-page" className="row">
    <div className="col s12">
      <form className="login-form" id="signin" name="signin" method="post" action="/student/signin">
        <div className="row">
          <div className="input-field col s12 center">
            <img src="./img/plw-logo.png" width="25%" alt="" className="responsive-img valign profile-image-login"></img>
            <h5 className="center login-form-text">STUDENT LOGIN</h5>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 center">
            <input id="username" type="text"></input>
            <label for="username" className="center-align">Username</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 center">
            <input id="password" type="password"></input>
            <label for="password">Password</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <a href="index.html" className="btn waves-effect waves-light col s12 red">Login</a>
          </div>
        </div>
      </form>
    </div>
  </div>
    </div>
  </div>


    <div className="container">
        <div className="section">

            <div className="row">
                <div className="col s12 m7">
                    <div className="icon-block">
                        <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                        <h5 className="center">Tutoring Services</h5>
                        <p className="light">
                            PLW Education has many after schools and partners in the U.S. which enable us to provide enhanced English and subject learning both in small classes or one on one tutoring.</p>
                        <p className="light">
                            We pride ourselves in ensuring your student has the absolute best services available to enhance/supplement their regular school curriculum. These classes and private tutoring sessions focus on the student’s weaknesses and makes sure they improve and support success in the regular classroom.
                          </p>
                    </div>
                </div>
                <div className="col s12 m5">
                    <div className="icon-block">
                        <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                        <h5 className="center">College Counseling</h5>
                        <p className="light">Selecting the proper college will be the most important decision your son or daughter can make. Depending on the students English level and education background there are many routes to enter various colleges in the United States. </p>
                        <p className="light">PLW Education has over 20 years experience successfully preparing and sending students to the best universities in the United States.</p>
                    </div>
                </div>
                <div className="col s12 m12">
                    <div className="icon-block">
                        <h2 className="center brown-text"><i className="material-icons">person_add</i></h2>
                        <h5 className="center">Want to Tutor?</h5>
                        <p className="light">Want to tutor for us? We are always looking for reputable tutors who specialize across many subject areas. We particularly look for tutors that can teach AP level courses. If interested, please contact us and we could undergo the screening process.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
            <div className="container">
                <div className="row center">
                    <i className="material-icons large">laptop_mac</i>
                </div>
            </div>
        </div>
        <div className="parallax"><img src="./img/mager.jpg" alt="Unsplashed background img 2"></img></div>
    </div>
    <div className="container">
        <div className="section">
            <div className="row">
                <div className="col s12 center">
                    <h3><i className="mdi-content-send brown-text"></i></h3>
                    <h4>Contact Us</h4>
                    <iframe width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13210.159112680672!2d-118.0285779!3d34.13253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd6ce8caa39ef6958!2sPLW+Education!5e0!3m2!1sen!2sus!4v1506396413647" frameborder="0" allowFullScreen></iframe>
                    <p className="left-align light">
                    625 S 1st Ave<br/>Arcadia, CA 91006<br/>+1 626-765-3519<br/>info@premierstudentservices.com
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
            <div className="container">
                <div className="row center">
                  <i className="material-icons large">library_books</i>
                </div>
            </div>
        </div>
        <div className="parallax"><img src="./img/chameleon.jpg" alt="Unsplashed background img 3"></img></div>
    </div>




      </div>

    );
  }
}


export default HomePage;
