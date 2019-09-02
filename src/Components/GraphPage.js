import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "./Header";
import {sleepData} from './data';
import Home from './Home';
import CanvasJSReact from '../canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const GraphPage = props => {

    const [userSleepData, setUserSleepData] = useState([]);

    //this shows how sleepData would be pulled from the back end if sleepData were non-empty
    const id = localStorage.getItem('id');
    console.log(id);
    let tokenStr = localStorage.getItem('token');
    console.log(tokenStr);

    useEffect(() => {
        axios
            .get(`https://sleeptrack.herokuapp.com/api/user/${id}`, {headers: {"authorize": `${tokenStr}`}})
            /*            .post('https://sleeptrack.herokuapp.com/api/sleepData', {userID: {id}, start: "9:00", end: "10:00",hours: 1})*/
            .then(response => {
                console.log(response.data);
                setUserSleepData(response.data.sleepData);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

//this is a cheat since no one has explained how I can actually add sleepData to a user on the back-end, I am adding sleepData manually
    useEffect(() => {
        setUserSleepData(sleepData);
    }, []);

    console.log(userSleepData);


    const options = {
        theme: "dark2",
        title: {
            text: "Last 7 Days of Sleep"
        },
        data: [{
            type: "column",
            dataPoints: [
                {label: "Mon", y: sleepData[0]},
                {label: "Tues", y: sleepData[1]},
                {label: "Wed", y: sleepData[2]},
                {label: "Thurs", y: sleepData[3]},
                {label: "Fri", y: sleepData[4]},
                {label: "Sat", y: sleepData[5]},
                {label: "Sun", y: sleepData[6]},
            ]
        }]
    }

    if (tokenStr.length > 1) {
        return (
            <div className="container">
                <Header/>
                <div className="main-section">
                    <div className="banner">
                        <div className="blackcloud">
                            <h1>Review Your Sleep Graph</h1>
                        </div>
                        <CanvasJSChart options={options}/>
                    </div>
                </div>
            </div>

        );
    } else {
        alert("You need to be logged in to access your sleep data");
        return (
            <Home/>
        )
    }
}

export default GraphPage;


/*### Sleep Data

* /api/sleepData "POST"
  1. Posts new sleep data to the DB
	2. Takes an object {userID: , start: ,end: ,hours: , scale}
	  * userID is required. Must match the user.
		* start = start time
		* end = end time
		* hours = diffence of END and START
		* scale = emoji value, currently set for 1 - 4
	3. JWT must be in the header under "authorize"
	4. accessible by the user and admin
* /api/sleepData/:id "PUT"
  1. Edits the recored matching the params: id
	2. Takes a sleep data object {userID: , start: ,end: , hours: , scale}
	3. JWT must be in the header under "authorize"
	4. accessible by the user and admin
	5. On success returns number of edited records
* /api/sleepData/:id "DELETE"
  1. Deletes record that matches the params: id
	2. JWT must be in the header under "authorize"
	3. accessible by the user and admin
	4. On Success Returns the number of records deleted*/


/* <div class="graphContainer">
                        <div className="graphcloud">
                            <div class="sleepGraph">
                                <h3>Monday</h3>
                                <h3>{sleepData[0]}</h3>
                            </div>
                        </div>
                        <div className="graphcloud">
                            <div class="sleepGraph">
                                <h3>Tuesday</h3>
                                <h3>{sleepData[1]}</h3>
                            </div>
                        </div>
                        <div className="graphcloud">
                            <div class="sleepGraph">
                                <h3>Wednesday</h3>
                                <h3>{sleepData[2]}</h3>
                            </div>
                        </div>
                        <div className="graphcloud">
                            <div class="sleepGraph">
                                <h3>Thursday</h3>
                                <h3>{sleepData[3]}</h3>
                            </div>
                        </div>
                        <div className="graphcloud">
                            <div class="sleepGraph">
                                <h3>Friday</h3>
                                <h3>{sleepData[4]}</h3>
                            </div>
                        </div>
                        <div className="graphcloud">
                            <div class="sleepGraph">
                                <h3>Saturday</h3>
                                <h3>{sleepData[5]}</h3>
                            </div>
                        </div>
                        <div className="graphcloud">
                            <div class="sleepGraph">
                                <h3>Sunday</h3>
                                <h3>{sleepData[6]}</h3>
                            </div>
                        </div>
                    </div>*/