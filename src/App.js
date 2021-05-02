import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Log_in_page from './Log_in_page';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/login">
      <button>Log In Here</button>
      </Link>
    </div>
  );
}

export default App;
