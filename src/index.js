import React from 'react';
import ReactDOM from 'react-dom';
import routes from "./config/routes";
import registerServiceWorker from './registerServiceWorker';

require('react-big-calendar/lib/css/react-big-calendar.css');

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
