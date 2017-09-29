import React, { Component } from 'react';
import TutorCalendar from './children/TutorCalendar';
import Add from './children/Add';
import moment from 'moment';
import helpers from '../utils/helpers';

var newArr =[];
// var bigCalendar=[];

class Tutor extends Component {
  constructor(){
        super();
        this.state={
            events:[
               // {'title':'David',
               // 'start':new Date(2017,8,28,13,0),
               //  'end': new Date(2017,8,28,14,0)
               //  }
               // {title:test,
               //  start:new Date(2017-09-29T05:00:00.000Z)}
            ]
        }
    this.updateEvent = this.updateEvent.bind(this);
    // this.formatDate = this.formatDate.bind(this);
}

    // formatDate(item){


    //      // var format =moment(item).format("YYYY,M,D,h,m");
    //         // var format = item.split(",");
    //         // // var temp = [];

    //         // console.log(format);
    //         // console.log()
    //         // for (var i=0; i<format.length;i++){
    //         //     var newEl = parseInt(format[i]);
                
    //         //     temp.push(newEl); 

    //         //     newArr.push(temp); 

    //         //     // console.log("format each:",newArr);          
    //         // }

    //         // var objArray = newArr.map(data =>{
    //         //         console.log("arrayElement", data[0]);
    //         //         // {'start':new Date(data[0],data[1]-1,data[2],data[3],data[4]),
    //         //         // 'end':new Date(data[0],data[1]-1,data[2],data[3]+1,data[4])
    //         //         // }
    //             // });
    //           // console.log("lalala",newArr);

    // //     //  this.setState({ 
    // //     //     events:[{
    // //     //         // 'title':'Nan',
    // //     //     'start':new Date(newArr[0],newArr[1]-1,newArr[2],newArr[3],newArr[4]),
    // //     //     'end': new Date(newArr[0],newArr[1]-1,newArr[2],newArr[3]+1,newArr[4])
    // //     //     }]
    // //     // });
    // }
    componentDidMount(){
         // console.log(this.state);
        helpers.getSession().then(res =>{
            // console.log(res.data);
            console.log("populate student calendar",res.data);
            // var newArray = []
            var meeting = res.data.map(meeting=>{
                return moment(meeting.day).format("YYYY,M,D,h,m");
            });

            console.log("Formatted Meeting - Year,Month,Day,etc: ", meeting);

            // this.formatDate(meeting);

            var arrOfArr = meeting.map(meetingStringToSplit=>{
                return meetingStringToSplit.split(",");
            });

            console.log("Array of Arrays! ", arrOfArr);

            var intArr = arrOfArr.map(meetingArr=>{
                var ints;
                return ints = meetingArr.map(strings=>{
                    return parseInt(strings);
                })
            });

            console.log("INTEGER ARRAYS! ", intArr);

            // var objArray = arrOfArr.map(d=>{
            //     return 
            // })
            var objArray = [];

            intArr.forEach(d=>{
                objArray.push({
                    "title": "Nan",
                    "start": new Date(d[0],d[1]-1,d[2],d[3],d[4]),
                    "end": new Date(d[0],d[1]-1,d[2],d[3]+1,d[4])
                });
            });

            console.log("OBJECT ARRAY! ", objArray);

            this.setState({events:objArray});

            // var fmArray = res.data.map(data=>{
            //     // console.log(data.day);
            // // newArray.push(moment(data.day).format("YYYY,M,D,m,s"));
            // this.formatDate(data.day);

            // });
            // console.log(fmArray);

        //     newArray = newArray.split(",");
        //     var newArr =[];
        //     for (var i=0; i<newArray.length;i++){
        //         var newEl = parseInt(newArray[i]);
        //         newArr.push(newEl); 
        //     }
        //  this.setState({ 
        //     events:[{
        //         // 'title':'Nan',
        //     'start':new Date(newArr[0],newArr[1]-1,newArr[2],newArr[3],newArr[4]),
        //     'end': new Date(newArr[0],newArr[1]-1,newArr[2],newArr[3]+1,newArr[4])
        //     }]
        // });

            });     
    }
    updateEvent(session){
         // newArraying userInput for big Calendar
         var format =moment(session, "YYYY,MM,DD,hh,mm,ss").format("YYYY,M,D,h,m");
            format = format.split(",");
            var newArr =[];
            for (var i=0; i<format.length;i++){
                var newEl = parseInt(format[i]);
                newArr.push(newEl); 
            };
        //  // this.formatDate(session);
        this.setState({ 
        events: this.state.events.concat(
                [
                {
                    'title':'Nan',
                    'start':new Date(newArr[0],newArr[1]-1,newArr[2],newArr[3],newArr[4]),
                    'end': new Date(newArr[0],newArr[1]-1,newArr[2],newArr[3]+1,newArr[4])
                }])
            });
         // this.setState({ 
         //    events:[{
         //        // 'title':'Nan',
         //    'start':new Date(newArr[0],newArr[1]-1,newArr[2],newArr[3],newArr[4]),
         //    'end': new Date(newArr[0],newArr[1]-1,newArr[2],newArr[3]+1,newArr[4])
         //    }]
        // });
        // // console.log(newArr);
        // // this.setState({})
        // // format = new Date(format);
        // // this.setState({events:[{
        // //     'title:start':session]});
        // // console.log("passing from children",session);   
        // // console.log("after insert database", this.state);
        helpers.addingMeeting(session);

        // .then(res =>{
        //     console.log("after insert database",res);
        //  // this.setState({events:})
        // }) 
    }
  render() {
    console.log("update",this.state)
    return (
        <div className="tutor center">
            <Add updateEvent={this.updateEvent}/>
        <div id="index-banner" className="parallax-container">



     <div className="parallax"><img src="./img/burden.jpg" alt="Unsplashed background img 1"></img></div>
    </div>
        <br></br><br></br>
            <div className="row">
            <div className="col s7 m7">

            </div>
            <div className="col s4 m4">
            <button data-target="modal3" className="btn waves-effect waves-light red lighten-1 modal-trigger hoverable">ADD</button>

            <a href="/"><button className="btn waves-effect waves-light red lighten-1 modal-trigger hoverable">LOGOUT</button></a></div>
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
