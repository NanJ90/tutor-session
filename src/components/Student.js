import React, { Component } from 'react';
import StudentCalendar from './children/StudentCalendar';
// import react-modal from '.'
// import Modal from 'react-modal';
import moment from 'moment';
import Add from './children/Add';
import helpers from '../utils/helpers';

class Student extends Component {
    // initail state 
    constructor(){
        super();
        this.state={
            events:[
            ]
        }
    }
    // when loading, this component will call API to render all users' meeting from db
    componentDidMount(){
        helpers.getStudentCalendar().then(res =>{
            console.log("populate student calendar",res.data);
            });     
    }
    // adding new meeting 
    updateEvent(session){
        this.setState({events:session});
        helpers.addingStudentDate().then(function(res,req) {
        })
    }
      
    render() {
    return (
        <div className="tutor center">
            {/*pass child's state to parent through function updateEvent, and then the new data will render to the page. At the same time, the data will inser into DB*/}
            <Add updateEvent={this.updateEvent}/>
            <div id="index-banner" className="parallax-container">
                <div className="parallax">
                    <img src="./img/digital.jpg" alt="Unsplashed background img 1"></img>
                </div>
            </div>
            <br></br><br></br>
            <div className="row">
                <div className="col s7 m7">
                </div>
                <div className="col s4 m4">
                    <a href="Search"><button data-target="modal1" className="btn waves-effect waves-light red lighten-1 modal-trigger hoverable"><i className="material-icons">search</i></button></a>
                    <a href="/"><button data-target="modal1" className="btn waves-effect waves-light red lighten-1 modal-trigger hoverable">LOGOUT</button></a>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col s2 m2">
                </div>
                <div className="col s8 m8">
                    <StudentCalendar
                        />
                </div>
                <div className="col s2 m2">
                </div>
            </div>
        </div>
        );
    }
}

export default Student;
