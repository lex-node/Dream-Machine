import React from 'react';
import './css/App.css';
import {Route} from "react-router-dom";
import Home from './Components/Home.js';
import LoginPage from './Components/LoginPage.js';
import RegistrationPage from './Components/RegistrationPage.js';
import GraphPage from './Components/GraphPage.js';
import Music from './Components/Music'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Music/>
                <Route exact path="/" component={Home}/>
                <Route path="/loginpage" component={LoginPage}/>
                <Route path="/registrationpage" component={RegistrationPage}/>
                <Route path="/graphpage" component={GraphPage}/>
            </header>
        </div>
    );
}

export default App;