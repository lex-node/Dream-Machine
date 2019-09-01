import React from 'react';
import {Link} from "react-router-dom";
import Header from "./Header";

const Home = props => {
    return (
        <div className="container">
            <Header/>
            <div className="main-section">
                <div className="banner">
                    <div className="blackcloud">
                        <h1>Dream Machine</h1>
                        <h3>making the world a little better, one nightmare at a time!</h3>
                    </div>
                    <div className="buttonContainer">
                        <button><Link to="/registrationpage">New User Registration</Link></button>
                        <button><Link to="/loginpage">Returning User Login</Link></button>
                        <button><Link to="/graphpage">Display Your Sleep Graph</Link></button>
                    </div>
                </div>
            </div>


            <footer>
                <p>&copy; Somnabulist 2019</p>
            </footer>
        </div>
    );
}

export default Home;


