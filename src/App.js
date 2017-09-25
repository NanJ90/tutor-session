import React, { Component } from 'react';
// import Homepage from './components/Homepage';
import Tutor from './components/Tutor';

// import localizer from 'react-big-calendar/lib/localizers/globalize';
// import globalize from 'globalize';

// localizer(globalize);


class App extends Component {

  render(){
    return (
      <div className="App">
	
             <Tutor />
      </div>
    );
  }
}

export default App;
