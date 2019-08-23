import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from "react-router-dom";
import Home from './Components/Home.js';
import LoginPage from './Components/LoginPage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Home}/>
        <Route path="/loginpage" component={LoginPage}/>
      </header>
    </div>
  );
}

export default App;

