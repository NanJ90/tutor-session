import React, { Component } from 'react';
import TutorCalendar from './children/TutorCalendar';
import Add from './children/Add';
import moment from 'moment';
import helpers from '../utils/helpers';

class Tutor extends Component {
  constructor(){
        super();
        this.state={
            events:[]
        }
}
    componentDidMount(){
         // console.log(this.state);
        helpers.getTutorCalendar().then(res =>{
            console.log("populate student calendar",res.data);
            });     
    }
    updateEvent(session){
        // console.log(session);
        this.setState({events:session});
        helpers.addingStudentDate().then(function(res,req) {

        })
    }
  render() {
    return (
        <div className="tutor center">
            <Add updateEvent={this.updateEvent}/>
        <div id="index-banner" className="parallax-container">



     <div className="parallax"><img src="./img/burden.jpg" alt="Unsplashed background img 1"></img></div>
    </div>
        <br></br><br></br>
            <div className="row">
            <div className="col s7 m7">

            </div>
            <div className="col s4 m4">
            <button data-target="modal3" className="btn waves-effect waves-light red lighten-1 modal-trigger hoverable">ADD</button>

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
