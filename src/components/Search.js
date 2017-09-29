import React, { Component } from 'react';
import SearchCalendar from './children/SearchCalendar';


class Search extends Component {
  
  render() {
    return (
        <div className="tutor center">
    <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
            <div className="container">
                <div className="row center">
                    <i className="material-icons large" id="searchicon">search</i>
                </div>

            </div>
        </div>


     <div className="parallax"><img src="./img/search.jpg" alt="Unsplashed background img 1"></img></div>
    </div>



            <div className="row">
            <div className="col s2 m2"></div>
            <div className="col s8 m8">

    <a className='dropdown-button btn red catlist' href='#' data-activates='dropdown1'>Math</a>
    <a className='dropdown-button btn red catlist' href='#' data-activates='dropdown2'>English</a>
    <a className='dropdown-button btn red catlist' href='#' data-activates='dropdown3'>Science</a>
    <a className='dropdown-button btn red catlist' href='#' data-activates='dropdown5'>History</a>
    <a className='dropdown-button btn red catlist' href='#' data-activates='dropdown5'>Advanced Placement</a>

    <ul id='dropdown1' className='dropdown-content'>
    <li><a href="#!">Elementary</a></li>
    <li><a href="#!">Algebra I</a></li>
    <li><a href="#!">Algebra II</a></li>
    <li><a href="#!">Geometry</a></li>
    <li><a href="#!">Pre-Calculus</a></li>
    <li><a href="#!">Calculus</a></li>
    <li><a href="#!">Statistics</a></li>
  </ul>

    <ul id='dropdown2' className='dropdown-content'>
    <li><a href="#!">ESL</a></li>
    <li><a href="#!">Elementary</a></li>
    <li><a href="#!">High School</a></li>
    <li><a href="#!">SAT</a></li>
  </ul>

    <ul id='dropdown3' className='dropdown-content'>
    <li><a href="#!">Elementary</a></li>
    <li><a href="#!">Biology</a></li>
    <li><a href="#!">Chemistry</a></li>
    <li><a href="#!">Physics</a></li>
    <li><a href="#!">Geology</a></li>
  </ul>

    <ul id='dropdown4' className='dropdown-content'>
    <li><a href="#!">Elementary</a></li>
    <li><a href="#!">World History</a></li>
    <li><a href="#!">Asian History</a></li>
    <li><a href="#!">European History</a></li>
    <li><a href="#!">US History</a></li>
    <li><a href="#!">Government</a></li>
  </ul>

    <ul id='dropdown5' className='dropdown-content'>
    <li><a href="#!">Calculus</a></li>
    <li><a href="#!">Physics</a></li>
    <li><a href="#!">Biology</a></li>
    <li><a href="#!">Chemistry</a></li>
    <li><a href="#!">Computer Science</a></li>
    <li><a href="#!">US History</a></li>
    <li><a href="#!">European History</a></li>
  </ul>
          </div>
        <div className="col s2 m2"></div>
        </div>

    <br></br><br></br>
            <div className="row">
            <div className="col s2 m2"></div>
            <div className="col s8 m8">
                <SearchCalendar />
        </div>
        <div className="col s2 m2"></div>
        </div>

        
        </div>
    );
  }
}

export default Search;
