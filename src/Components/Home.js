import React from 'react';
import {Link} from "react-router-dom";
import soundfile from "../Images/(Disc 2) 08 - Darkness Begins (The Soundtrack Album).mp3"
import Sound from 'react-sound'

const Home = props => {
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
                    <div className="blackcloud">
                        <h1>Dream Machine</h1>
                        <h3>making the world a little better, one nightmare at a time!</h3>
                    </div>
                    <div className="buttonContainer">
                        <button><Link to="/registrationpage">New User Registration</Link></button>
                        <button><Link to="/loginpage">Returning User Login Page</Link></button>
                        <button><Link to="/graphpage">Display Your Sleep Graph</Link></button>
                    </div>
                    <Sound
                        url={soundfile}
                        playStatus={Sound.status.PLAYING}
                        onFinishedPlaying={props.repeat}
                    />
                </div>
            </div>


            <footer>
                <p>&copy; Somnabulist 2019</p>
            </footer>
        </div>
    );
}

export default Home;


