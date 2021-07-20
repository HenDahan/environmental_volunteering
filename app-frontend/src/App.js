// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import { Navbar } from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Activity from './components/Activities/Activity';
import CreateNewActivity from './components/Activities/CreateNewActivity';
import MyActivities from './components/Activities/MyActivities';
import SearchActivity from './components/Activities/SearchActivity';
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact"
import LoginPage from './components/Connections/LoginPage';
import RegisterPage from './components/Connections/RegisterPage';
import ActivitySignUp from './components/Activities/ActivitySignUp';

function App() {
  return (
  <Router>
    <div className="App"> 
        <Navbar />
        <div className="content">
          {<Switch>
            <Route exact path="/Home" component={Home} />
            <Route path="/Activities/Activity" component={Activity} />
            <Route  path="/Activities/CreateNewActivity" component={CreateNewActivity} />
            <Route  path="/Activities/MyActivities" component={MyActivities} />
            <Route  path="/Activities/ActivitySignUp" component={ActivitySignUp} />
            <Route  path="/Activities/SearchActivity" component={SearchActivity} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Contact" component={Contact} />
            <Route path="/connections/LoginPage" component={LoginPage} />
            <Route path="/connections/RegisterPage" component={RegisterPage} />
  
          </Switch>}
        </div>
      {/* <Footer /> */}
    </div>
  </Router>

  );
}

export default App;
