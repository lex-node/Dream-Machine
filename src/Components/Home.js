import React from 'react';
import {Link} from "react-router-dom";

const Home = props => {
    return (
        <div>
            <header>
                <h1>Dream Machine</h1>
                <br/>
            </header>
            <div>
                <p>Returning Users: <Link to="/loginpage">Login Page</Link></p>
                <br/>
                <p>New Users: <Link to="/registrationpage">Registration Page</Link></p>
                <br/>
                <p>Display Your Data: <Link to="/activeuserdatapage">Active User Data Page</Link></p>
            </div>
        </div>
    );
}

export default Home;


