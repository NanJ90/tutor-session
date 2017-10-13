import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
 
BigCalendar.setLocalizer(
	BigCalendar.momentLocalizer(moment)
); 

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])


const TutorCalendar = props => (
  <div className="calendar">
    <BigCalendar
      selectable
      events= {props.events}
      defaultDate={new Date()}  
      defaultView='week'
      views={allViews}
    />
  </div>
);


export default TutorCalendar;