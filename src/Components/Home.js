import React from 'react';
import {Link} from "react-router-dom";

const Home = props => {
    return (
<div class="container">
    <header class="navigation">
        <div class="nav-container">
            <h1 class="logo"><a href="#">Dream Machine</a></h1>
            <nav class="nav">
                <Link to="/" class="nav-links">Home</Link>
                <Link to="" class="nav-links">About</Link>
                <Link to="/contactpage" class="nav-links">Contact</Link>
            </nav>
        </div>
    </header>

    <div class="main-section">
        <div class="banner">
            <h1>Dream Machine</h1>
            <h3>Making the world a little better, one nap at a time!</h3>
            <button><Link to="/registrationpage">New User Registration</Link></button>
            <button><Link to="/loginpage">Returning User Login Page</Link></button>
            <button><Link to="/activeuserdatapage">Display Your Data</Link></button>
        </div>
    </div>


    <footer>
        <p>&copy; Team Sleep-tracker 2019</p>
    </footer>
</div>
    );
}

export default Home;


