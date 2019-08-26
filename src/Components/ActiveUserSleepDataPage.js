import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const ActiveUserSleepDataPage = props => {

    const [userSleepData, setUserSleepData] = useState([]);

    useEffect(() => {
        const id = "100";
        let tokenStr = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwLCJ1c2VybmFtZSI6ImdhYnJpZWxzaGFwaXJvIiwicm9sZSI6InVzZXIiLCJpYXQiOjE1NjY3ODgyNzksImV4cCI6MTU2Njg3NDY3OX0.-BsNy71u2zAud8E3A12iXeoCaNaszXGqbM-MTaoqDic";
        axios
            .get(`https://sleeptrack.herokuapp.com/api/user/${id}`, {headers: {"authorize": `${tokenStr}`}})

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

export default ActiveUserSleepDataPage;


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