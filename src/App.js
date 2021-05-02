import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Log_in_page from './Log_in_page';
import {Route, Link} from 'react-router-dom';
import Login from "./containers/Login";

function App() {
  return (

      
    <Route exact path="/">
      <Login />
    </Route>

    
/*
    <div className="App">
      <Link to="/login">
      <button>Log In Here</button>
      </Link>

      <Link to="/home">
      <button>Home page</button>
      </Link>
    </div>
    */
  );
}

export default App;
