import React, { Component } from 'react';

class Developers extends Component {

  render(){
    return (
      <div className="Developers">	
   <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
            <div className="container">
                <div className="row center">
                    <i className="material-icons large">developer_mode</i>
                </div>
            </div>
        </div>
        <div className="parallax"><img src="./img/noble.jpg" alt="Unsplashed background img 2"></img></div>
    </div>

    <div className="carousel">
        <a className="carousel-item" href="David"><img alt="David" className="circle" src="https://lorempixel.com/250/250/nature/1"></img></a>
        <a className="carousel-item" href="Gen"><img alt="David" className="circle" src="https://lorempixel.com/250/250/nature/2"></img></a>
        <a className="carousel-item" href="Kyle"><img alt="David" className="circle" src="https://lorempixel.com/250/250/nature/3"></img></a>
        <a className="carousel-item" href="Nan"><img alt="David" className="circle" src="https://lorempixel.com/250/250/nature/4"></img></a>
        <a className="carousel-item" href="empty"><img alt="David" className="circle" src="https://lorempixel.com/250/250/nature/5"></img></a>
    </div>

    
      </div>
    );
  }
}


export default Developers;
