import React from 'react';
import './css/App.css';
import {Route} from "react-router-dom";
import Home from './Components/Home.js';
import LoginPage from './Components/LoginPage.js';
import RegistrationPage from './Components/RegistrationPage.js';
import ActiveUserSleepDataPage from './Components/ActiveUserSleepDataPage.js';
import ContactPage from './Components/ContactPage.js';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <Route exact path="/" component={Home}/>
                <Route path="/loginpage" component={LoginPage}/>
                <Route path="/registrationpage" component={RegistrationPage}/>
                <Route path="/activeuserdatapage" component={ActiveUserSleepDataPage}/>
                <Route path="/contactpage" component={ContactPage}/>
            </header>
        </div>
    );
}

export default App;