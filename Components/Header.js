import React from 'react';
import {Link} from "react-router-dom";


const Header = props => {
    return (
        <header className="navigation">
            <div className="nav-container">
                <h1 className="logo"><Link to="#">Dream Machine</Link></h1>
                <nav className="nav">
                    <Link to="/" className="nav-links">Home</Link>
                    <Link to="/registrationpage" className="nav-links">New Users</Link>
                    <Link to="/loginpage" className="nav-links">Returning Users</Link>
                    <Link to="/graphpage" className="nav-links">Sleep Graph</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header