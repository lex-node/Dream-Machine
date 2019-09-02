import axios from "axios";
import React, {useEffect, useState} from "react";

const TestUserData = () => {
	const [sleepData, setSleepData] = useState([]);
	//example for marshalls user
	useEffect(() => {
		let url = 'https://sleeptrack.herokuapp.com/api/user/96';
		let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTYsInVzZXJuYW1lIjoiTWFyc2hhbGwiLCJyb2xlIjoidXNlciIsImlhdCI6MTU2Njc4MjI4NiwiZXhwIjoxNTY2ODY4Njg2fQ.fjcHSyXHbN8wz3QOX2kls8V2a9tOmGXnPfyFpzm1B1k';
		axios.get(url, {headers: {"authorize": `${token}`}})
		.then(response => {
			console.log(response.data);
			setSleepData(response.data)
		})
		.catch(error => {
			console.log(error)
		})
	}, [])

	return (
		<div></div>
	)

}

export default TestUserData;

/*
() => {
		let url = 'https://sleeptrack.herokuapp.com/api/users/5';
		let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTYsInVzZXJuYW1lIjoiTWFyc2hhbGwiLCJyb2xlIjoidXNlciIsImlhdCI6MTU2Njc4MjI4NiwiZXhwIjoxNTY2ODY4Njg2fQ.fjcHSyXHbN8wz3QOX2kls8V2a9tOmGXnPfyFpzm1B1k';
		axios.get(url, { headers: {"Authorization" : `Bearer ${token}`})
		.then(response => {
			setSleepData(response.data)
		})
		.catch(error => {
			console.log(error)
		})
	}, [])
*/