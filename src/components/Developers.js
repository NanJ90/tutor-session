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
        <a className="carousel-item" href="#"><img alt="" className="circle" src="./img/developers/placeholder.jpg"></img></a>
        <a className="carousel-item" href="kiddmit3.github.io/"><img alt="David" className="circle" src="./img/developers/david.jpg"></img></a>
        <a className="carousel-item" href="github.com/munmuney"><img alt="Gen" className="circle" src="./img/developers/gen.jpg"></img></a>
        <a className="carousel-item" href="github.com/NanJ90"><img alt="Nan" className="circle" src="./img/developers/nan.jpg"></img></a>
        <a className="carousel-item" href="github.com/kyserrecchia"><img alt="Kyle" className="circle" src="./img/developers/kyle.jpg"></img></a>
    </div>

    
      </div>
    );
  }
}


export default Developers;
