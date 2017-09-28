import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// import events from './events';
 
BigCalendar.setLocalizer(
	BigCalendar.momentLocalizer(moment)
); // or globalizeLocalizer

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

const StudentCalendar = props => (
 <div className="calendar">
    <BigCalendar
      selectable
      events= {[
       {'title':'Math',
       'start':new Date(2017,8,28),
        'end': new Date(2017,8,29)
        }
        ]}
      defaultDate={new Date()}  
      defaultView='week'
      views={allViews}
      
    />
  </div>
);




export default StudentCalendar;