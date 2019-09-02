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
                        <Link to="/registrationpage">
                            <button>New User Registration</button>
                        </Link>
                        <Link to="/loginpage">
                            <button>Returning User Login</button>
                        </Link>
                        <Link to="/graphpage">
                            <button>Display Your Sleep Graph</button>
                        </Link>
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


