import React, { Component } from 'react';
// import StudentCalendar from './children/StudentCalendar';
// import react-modal from '.'
// import Modal from 'react-modal';
// import Modal from './children/Modal';
import moment from 'moment';
import helpers from '../../utils/helpers';  

var fmTime ="";
var session="";

class Add extends Component{
  constructor(){
    super();
    this.state={
        day:"",
        time:""

    }
    this.grabUserInput =this.grabUserInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  grabUserInput(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("CLICKED");
    fmTime=moment(this.state.time,"H:mm").format("HH:mm:ss");
    session = this.state.day.concat(" ", fmTime);
    this.props.updateEvent(session);
    // console.log(fmTime,session);
  }

  render(){
    console.log("add",this.state);
    console.log(moment(this.state.time,"H:mm").format("HH:mm:ss"));
    console.log("combined time in Add",session);
    return (
      <div className="Add">
             <div id="modal3" className="modal">
            <div className="modal-content">
             <div id="login-page" className="row">
            <div className="col s12">
              <form className="login-form" id="signin" name="signin" method="post" action="/Student">
                <div className="row">
                  <div className="input-field col s12 center">
                    <img src="./img/plw-logo.png" width="25%" alt="" className="responsive-img valign profile-image-login"></img>
                    <h5 className="center login-form-text">Add a New Session</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 center">
                    <input id="day" type="date" value={this.state.day} onChange={this.grabUserInput}></input>
                    <label For="day" className="center-align"></label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 center">
                   <input id="time" type="text" value={this.state.time} onChange={this.grabUserInput}></input>
                    <label For="time" className="center-align"></label>     
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <a href="/student" className="btn waves-effect waves-light col s12 red" onClick ={this.handleSubmit}>Submit</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
            </div>
          </div>
  </div>
    )

  }
}

export default Add; 