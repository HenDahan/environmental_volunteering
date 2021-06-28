import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {Route, Link} from 'react-router-dom';
import styled from "styled-components";
//import { AccountBox } from './containers/accountBox';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


function App() {
  return (

    <AppContainer>
      <AccountBox />
    </AppContainer>
    /*
    <Route exact path="/">
      <Login />
    </Route>
*/
    
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
