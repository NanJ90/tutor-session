import React, { Component } from 'react';
// import Homepage from './components/Homepage';
// import { Link } from 'react-router-dom';
import Tutor from './components/Tutor';
import Student from './components/Student';
// import localizer from 'react-big-calendar/lib/localizers/globalize';
// import globalize from 'globalize';

// localizer(globalize);


class App extends Component {

  render(){
    return (
      <div className="App">
		<Tutor/>
		<Student/>
      </div>
    );
  }
}

export default App;
