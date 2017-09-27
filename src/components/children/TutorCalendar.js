import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// import events from '../events';
// import momentLocalizer from 'react-widgets/lib/localizer/moment';

BigCalendar.momentLocalizer(moment);// or globalizeLocalizer


let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

// class myCalendar extends Component{



// }

// const TutorCalendar = function(props){
//   return ()
// }


const TutorCalendar = props => (
  // console.log(props);
  <div id="myCalendar" style={tbStyle}>

    <BigCalendar
          
        // calling API to retrieve data from data base
          events= {props.events
  //   'title': 'All Day Event',
  //   'allDay': true,
  //   'start': new Date(2017, 9, 1),
  //   'end': new Date(2017, 9, 2)
  // }]
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

export default TutorCalendar;