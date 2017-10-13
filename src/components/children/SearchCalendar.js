import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

require('react-big-calendar/lib/css/react-big-calendar.css');

 
BigCalendar.setLocalizer(
	BigCalendar.momentLocalizer(moment)
); 

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

const SearchCalendar = props => (
  <div className="calendar">
   <BigCalendar
      selectable
      events= {[
       {'title':'David',
       'start':new Date(2017,8,25,16,0),
        'end': new Date(2017,8,25,20,0)
        },
       {'title':'Nan',
       'start':new Date(2017,8,24,12,0),
        'end': new Date(2017,8,24,18,0)
        },
       {'title':'David',
       'start':new Date(2017,8,27,16,0),
        'end': new Date(2017,8,27,22,0)
        },
       {'title':'David',
       'start':new Date(2017,8,26,8,0),
        'end': new Date(2017,8,26,14,0)
        },        
       {'title':'Nan',
       'start':new Date(2017,8,30,12,0),
        'end': new Date(2017,8,30,18,0)
        },
       {'title':'Genevieve',
       'start':new Date(2017,8,29,9,0),
        'end': new Date(2017,8,29,16,0)
        },
       {'title':'Genevieve',
       'start':new Date(2017,8,27,9,0),
        'end': new Date(2017,8,27,16,0)
        },        
       {'title':'Kyle',
       'start':new Date(2017,8,26,0,0),
        'end': new Date(2017,8,26,10,0)
        },
       {'title':'Kyle',
       'start':new Date(2017,8,25,20,0),
        'end': new Date(2017,8,25,23,0)
        },
       {'title':'Nan',
       'start':new Date(2017,8,25,15,0),
        'end': new Date(2017,8,25,18,0)
        },
       {'title':'Nan',
       'start':new Date(2017,8,28,11,0),
        'end': new Date(2017,8,28,17,0)
        },
       {'title':'Genevieve',
       'start':new Date(2017,8,28,16,0),
        'end': new Date(2017,8,28,22,0)
        },
       {'title':'Clark',
       'start':new Date(2017,8,25,8,0),
        'end': new Date(2017,8,25,15,0)
        },
       {'title':'Clark',
       'start':new Date(2017,8,29,15,0),
        'end': new Date(2017,8,29,17,0)
        },
       {'title':'Clark',
       'start':new Date(2017,8,26,13,0),
        'end': new Date(2017,8,26,19,0)
        }                            
        ]}
      defaultDate={new Date()}  
      defaultView='week'
      views={allViews}
      
    />
  </div>
);


export default SearchCalendar;