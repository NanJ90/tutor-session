import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// import events from './events';
 
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const StudentCalendar = props => (
  <div>
    <BigCalendar
      events={[]}
      startAccessor='startDate'
      endAccessor='endDate'
    />
  </div>
);






export default StudentCalendar;