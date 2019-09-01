import React from 'react';
import {Link} from "react-router-dom";
import soundfile from "../Images/(Disc 2) 08 - Darkness Begins (The Soundtrack Album).mp3"
import Sound from 'react-sound'
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
                        <button><Link to="/loginpage">Returning User Login Page</Link></button>
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


