import React, { Component } from 'react';
import StudentCalendar from './children/StudentCalendar';
import helpers from '../utils/helpers';

class Tutor extends Component {
   
   // componentDidMount(){
   //       // console.log(this.state);
   //      helpers.getStudentCalendar().then(res =>{
   //          console.log("populate student calendar",res.data);
   //          });     
   //  }
  
  render() {
    return (
        <div className="tutor">
            <div className="navbar-fixed">
        
                <ul id="dropdown1" className="dropdown-content">
                    <li><a href="#!">Profile</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Log out</a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper red accent-4">
                        <a href="#!" className="brand-logo">PLW Ed Tutoring Services</a>
                        <ul className="right hide-on-med-and-down">                  
                            <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div>
                
            </div>
        </div>
    );
  }
}

export default Tutor;
