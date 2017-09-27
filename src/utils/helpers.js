import axios from 'axios';

var helpers = {

// for student onClick add session
	getSession: function(){		
			return axios.get("/api/meetings");
			// .then(function(req){
			// 		console.log(req);
			// }).catch(function(err){
			// 	console.log(err);
			// });
		
	},
// retrieve tutor calendar 
	getTutorCalendar:function(){
		return axios.get('api/meetings');
		// return axios.get(`api/meetings/${id}`);
	},

// retrive student calendar
	getStudentCalendar:function(){
		return axios.get('api/students');

		// return axios.get(`api/students/${id}`);
	}

}

export default helpers;