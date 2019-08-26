import React from 'react';
import {Link} from "react-router-dom";

const ContactPage = props => {
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
                    <h1>Add new stuff</h1>
                </div>
            </div>
        </div>

    )
}

export default ContactPage;