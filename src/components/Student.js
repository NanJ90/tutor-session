import React, { Component } from 'react';
import StudentCalendar from './children/StudentCalendar';

import helpers from '../utils/helpers';
class Student extends Component {

 constructor(){
        super();
        this.state={
            events:[
                // {
                //     title:'Math',
                //     start:new Date(2017, 8, 26),
                //     end:new Date(2017, 8, 26)

                // }
            ],
            showModal: false
        }
// call get api to get tutor's calendar 
    // handleClick(){
    //     // e.preventDefault();
    //     helpers.getTutorSession().then(function(res){
    //         console.log("populate tutor session",res.data);
    //         // this.setState({events:res.body});
    //     });
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    // this.addingStudentDate = this.addingStudentDate.bind(this);
    }
     handleOpenModal () {
    this.setState({ showModal: true });
    }
  
    handleCloseModal () {
    this.setState({ showModal: false });
  }
    componentDidMount(){
         // console.log(this.state);
        helpers.getStudentCalendar().then(res =>{
            console.log("populate student calendar",res.data);
            });     
    }

    // addingStudentDate(){
    //     helpers.addingStudentDate().then(function(res, req){
    //         return 
        

    //     })
    // }
  
  render() {
    return (
        <div className="tutor center">
        <div id="index-banner" className="parallax-container">



     <div className="parallax"><img src="./img/digital.jpg" alt="Unsplashed background img 1"></img></div>
    </div>
        <br></br><br></br>
            <div className="row">
            <div className="col s7 m7">

            </div>
            <div className="col s4 m4">
            <button data-target="modal1" className="btn waves-effect waves-light red lighten-1 modal-trigger hoverable">ADD</button>
            {/*<ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>*/}
            <button data-target="modal1" className="btn waves-effect waves-light red lighten-1 modal-trigger hoverable">LOGOUT</button></div>
            </div>
             <br></br>
            <div className="row">
            <div className="col s2 m2"></div>
            <div className="col s8 m8">
                <StudentCalendar />
        </div>
        <div className="col s2 m2"></div>
        </div>
        </div>
    );
  }
}

export default Student;
