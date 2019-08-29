import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const GraphPage = props => {

    const [userSleepData, setUserSleepData] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem('id');
        console.log(id);
        let tokenStr = localStorage.getItem('token');
        console.log(tokenStr);
        axios
            /*.get(`https://sleeptrack.herokuapp.com/api/user/${id}`, {headers: {"authorize": `${tokenStr}`}})*/
            .post('https://sleeptrack.herokuapp.com/api/sleepData', {userID: {id}, start: "9:00", end: "10:00",hours: 1})
            .then(response => {
                console.log(response.sleepData);
                setUserSleepData(response.sleepData);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    return (
        <div className="container">
            <header className="navigation">
                <div className="nav-container">
                    <h1 className="logo"><Link to="#">Dream Machine</Link></h1>
                    <nav className="nav">
                        <Link to="/" className="nav-links">Home</Link>
                        <Link to="" className="nav-links">About</Link>
                        <Link to="contactpage" className="nav-links">Contact</Link>
                    </nav>
                </div>
            </header>
            <div className="main-section">
                <div className="banner">
                    <div>
                        <p> Hello, here is your sleep data: {userSleepData}</p>
                    </div>
                </div>
            </div>
        </div>
    )
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