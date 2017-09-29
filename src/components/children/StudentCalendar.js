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
       {'title':'Calculus',
       'start':new Date(2017,8,28,16,0),
        'end': new Date(2017,8,28,18,0)
        },
       {'title':'Calculus',
       'start':new Date(2017,8,26,16,0),
        'end': new Date(2017,8,26,18,0)
        },
       {'title':'AP Biology',
       'start':new Date(2017,8,27,15,0),
        'end': new Date(2017,8,27,18,0)
        },
       {'title':'AP Biology',
       'start':new Date(2017,8,25,15,0),
        'end': new Date(2017,8,25,18,0)
        },
       {'title':'AP Chemistry',
       'start':new Date(2017,8,24,9,0),
        'end': new Date(2017,8,24,12,0)
        },
       {'title':'AP Computer Sci',
       'start':new Date(2017,8,30,9,0),
        'end': new Date(2017,8,30,12,0)
        }                           
        ]}
      defaultDate={new Date()}  
      defaultView='week'
      views={allViews}
      
    />
  </div>
);




export default StudentCalendar;