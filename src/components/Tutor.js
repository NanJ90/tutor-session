import React, { Component } from 'react';
import TutorCalendar from './children/TutorCalendar';
import moment from 'moment';

class Tutor extends Component {
  
  render() {
    return (
        <div className="tutor center">
        <div id="index-banner" className="parallax-container">



     <div className="parallax"><img src="./img/burden.jpg" alt="Unsplashed background img 1"></img></div>
    </div>
        <br></br><br></br>
            <div className="row">
            <div className="col s7 m7">

            </div>
            <div className="col s4 m4">
            <button data-target="modal1" className="btn waves-effect waves-light red lighten-1 modal-trigger hoverable">ADD</button>

            <a href="/"><button className="btn waves-effect waves-light red lighten-1 modal-trigger hoverable">LOGOUT</button></a></div>
            </div>
             <br></br>
        	<div className="row">
        	<div className="col s2 m2"></div>
        	<div className="col s8 m8">
                <TutorCalendar />
        </div>
        <div className="col s2 m2"></div>
        </div>
        </div>
    );
  }
}

export default Tutor;
