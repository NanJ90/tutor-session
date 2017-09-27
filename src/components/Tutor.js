import React, { Component } from 'react';
import moment from 'moment';
import helpers from '../utils/helpers';

import TutorCalendar from './children/TutorCalendar';
// import ReactEventsCalendar from 'react-events-calendar';


class Tutor extends Component {
    constructor(){
        super();
        this.state={
            events:[
                // {
                //     title:'Math',
                //     start:new Date(2017, 8, 26),
                //     end:new Date(2017, 8, 26)

                // }
            ]
        }
        // console.log()
        // this.handleClick=this.handleClick.bind(this);
    }
// call get api to get tutor's calendar 
    // handleClick(){
    //     // e.preventDefault();
    //     helpers.getTutorSession().then(function(res){
    //         console.log("populate tutor session",res.data);
    //         // this.setState({events:res.body});
    //     });
    // }
    componentDidMount(){
         // console.log(this.state);
        helpers.getTutorCalendar().then(res =>{
            console.log("populate student calendar",res.data);
            });     
    }
  

  slotselected(slotInfo){
    console.log(slotInfo);
  
  }
    render() {
        // console.log(typeOf this.state.events.end);
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
                    <TutorCalendar events={this.state.events} slotselected={this.slotselected}/>
                                    {/*events={this.state.events} />*/}
                </div>
            </div>
        );
  }
}

export default Tutor;
