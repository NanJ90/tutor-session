import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from 'react-big-calendar';
// require('react-big-calendar/lib/css/react-big-calendar.css');
// import momentLocalizer from 'react-widgets/lib/localizer/moment';
 
BigCalendar.setLocalizer(
	BigCalendar.momentLocalizer(moment)
); // or globalizeLocalizer

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

const TutorCalendar = props => (
  <div className="calendar">
    <BigCalendar
      selectable
      events= {[
       {'title':'David',
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


export default TutorCalendar;