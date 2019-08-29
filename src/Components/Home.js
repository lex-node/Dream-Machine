import React from 'react';
import {Link} from "react-router-dom";

const Home = props => {
    return (
        <div className="container">
            <div data-video="fkfKUrwxPfQ"
                 data-autoplay="1"
                 data-loop="1"
                 id="youtube-audio">
            </div>
            <script src="https://www.youtube.com/iframe_api"></script>
            <script src="https://cdn.rawgit.com/labnol/files/master/yt.js"></script>
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
                        <h3>Making the world a little better, one nap at a time!</h3>
                    </div>
                    <div className="buttonContainer">
                        <button><Link to="/registrationpage">New User Registration</Link></button>
                        <button><Link to="/loginpage">Returning User Login Page</Link></button>
                        <button><Link to="/graphpage">Display Your Sleep Graph</Link></button>
                    </div>
                </div>
            </div>


            <footer>
                <p>&copy; Team Sleep-tracker 2019</p>
            </footer>
        </div>
    );
}

export default Home;


