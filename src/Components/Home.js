import React from 'react';
import {Link} from "react-router-dom";

const Home = props => {
    return (
        <div>
            <div>
                <div>
                    <p>Returning Users: <Link to="/loginpage">Login Page</Link></p>
                    <br/>
                    <p>New Users: <Link to="/registrationpage">Registration Page</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Home;