import React, { Component } from 'react';
import TutorCalendar from './children/TutorCalendar';
import Add from './children/Add';
import moment from 'moment';
import helpers from '../utils/helpers';

var newArr =[];

class Tutor extends Component {
    constructor(){
        super();
        this.state={
            events:[]
        }
    this.updateEvent = this.updateEvent.bind(this);
    }

    componentDidMount(){
        helpers.getSession().then(res =>{
            var meeting = res.data.map(meeting=>{
                return moment(meeting.day).format("YYYY,M,D,H,m");
        });
        // console.log("Formatted Meeting - Year,Month,Day,etc: ", meeting);
            var arrOfArr = meeting.map(meetingStringToSplit=>{
                return meetingStringToSplit.split(",");
        });
        // console.log("Array of Arrays! ", arrOfArr);
            var intArr = arrOfArr.map(meetingArr=>{
            var ints;
                return ints = meetingArr.map(strings=>{
                return parseInt(strings);
            })
        });
        // console.log("INTEGER ARRAYS! ", intArr);
        var objArray = [];
            intArr.forEach(d=>{
                objArray.push({
                    "title": "Nan",
                    "start": new Date(d[0],d[1]-1,d[2],d[3],d[4]),
                    "end": new Date(d[0],d[1]-1,d[2],d[3]+1,d[4])
                });
            });
        // console.log("OBJECT ARRAY! ", objArray);
        this.setState({events:objArray});
        });     
    }
    updateEvent(session){
         // newArraying userInput for big Calendar
         var format =moment(session, "YYYY,MM,DD,HH,mm,ss").format("YYYY,M,D,H,m");
            format = format.split(",");
            var newArr =[];
            for (var i=0; i<format.length;i++){
                var newEl = parseInt(format[i]);
                newArr.push(newEl); 
            };
        // this.formatDate(session);
        this.setState({ 
        events: this.state.events.concat(
                [
                {
                    'title':'Nan',
                    'start':new Date(newArr[0],newArr[1]-1,newArr[2],newArr[3],newArr[4]),
                    'end': new Date(newArr[0],newArr[1]-1,newArr[2],newArr[3]+1,newArr[4])
                }])
            });
        helpers.addingMeeting(session);
    }
    render() {
    // console.log("update",this.state)
        return (
            <div className="tutor center">
                <Add updateEvent={this.updateEvent}/>
                <div id="index-banner" className="parallax-container">
                    <div className="parallax">
                        <img src="./img/burden.jpg" alt="Unsplashed background img 1"></img>
                    </div>
                </div>
                <br></br><br></br>

                <div className="row">
                    <div className="col s7 m7">
                    </div>
                    <div className="col s4 m4">
                        <button data-target="modal3" className="btn waves-effect waves-light red lighten-1 modal-trigger hoverable">ADD</button>
                        <a href="/"><button className="btn waves-effect waves-light red lighten-1 modal-trigger hoverable">LOGOUT</button></a>
                    </div>
                    </div>
                     <br></br>
                	<div className="row">
                	<div className="col s2 m2"></div>
                	<div className="col s8 m8">
                        <TutorCalendar events={this.state.events}/>
                </div>
                <div className="col s2 m2"></div>
                </div>
            </div>
        );
      }
}

export default Tutor;
