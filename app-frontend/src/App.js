// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import { Navbar } from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import MyActivities from './components/MyActivities';
import CreateNewActivitiy from './components/CreateNewActivitiy';

function App() {
  return (
  <Router>
    <div className="App"> 
        <Navbar />
        <div className="content">
          {<Switch>
            <Route exact path="/Home" component={Home} />
            <Route path="/MyActivities" component={MyActivities} />
            <Route  path="/CreateNewActivitiy" component={CreateNewActivitiy} />

            <Route  path="/login">
              {/*<Login />*/}
            </Route>
          </Switch>}
        </div>
      {/* <Footer /> */}
    </div>
  </Router>

  );
}

export default App;
