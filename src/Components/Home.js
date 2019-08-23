import React from 'react';
import {Route, Link} from "react-router-dom";
import LoginPage from './LoginPage.js';

const Home = props => {
    return (
        <div>
            <div>
                <h1>Links</h1>
                <div>
                    <Link to="/loginpage">Login Page</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;