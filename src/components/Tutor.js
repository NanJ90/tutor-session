import React, { Component } from 'react';
import TutorCalendar from './children/TutorCalendar';
import moment from 'moment';
// import ReactEventsCalendar from 'react-events-calendar';


class Tutor extends Component {
  
  render() {
    return (
        <div className="tutor">


                <TutorCalendar />

        </div>
    );
  }
}

export default Tutor;
