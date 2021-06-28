// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import { Navbar } from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App"> 
        <Navbar />
        <div className="content">
          {/* <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  path="/about">
              <About />
            </Route>
            <Route  path="/login">
              <Login />
            </Route>
          </Switch> */}
        </div>
      {/* <Footer /> */}
    </div>
  </Router>

  );
}

export default App;
