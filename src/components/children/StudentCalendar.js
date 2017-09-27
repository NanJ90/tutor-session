import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// import events from './events';
 
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])
const StudentCalendar = props => (
  <div>
     <BigCalendar
          selectable
        // calling API to retrieve data from data base
          events= { 
            props.events
            }
          views={allViews}
          defaultDate={new Date()}
          selectable={true}
          onSelectSlot={props.slotselected}
        />
  </div>
);

const tbStyle={
  padding:10
}



export default StudentCalendar;