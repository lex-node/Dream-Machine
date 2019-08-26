import React from 'react';
import {Link} from "react-router-dom";

const ContactPage = props => {
    return (
         <div class="container">
            <header class="navigation">
                <div class="nav-container">
                    <h1 class="logo"><a href="#">Dream Machine</a></h1>
                    <nav class="nav">
                        <Link to="/" class="nav-links">Home</Link>
                        <Link to="" class="nav-links">About</Link>
                        <Link to="" class="nav-links">Contact</Link>
                    </nav>
                </div>
            </header>
            <div class="main-section">
                <div class="banner">
                    <h1>Add new stuff</h1>
                </div>
            </div>
        </div>

    )
}

export default ContactPage;