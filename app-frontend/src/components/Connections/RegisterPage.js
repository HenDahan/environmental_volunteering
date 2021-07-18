import React, { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
//import ActivitiesTable from "../Tables/ActivitiesTable";
//&nbsp; regular space.
//&ensp; two spaces gap.
//&emsp; four spaces gap.


const theme = {
    green: {
      default: "#9ccc65",
      hover: "#7cb342"
    }
  };



const Button = styled.button`
    background-color: ${props => theme[props.theme.default]};
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        background-color: ${props => theme[props.theme.hover]};
    }
`

Button.defaultProps = {
    theme: 'green'
}



function RegisterPage() {
  const history = useHistory();
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (evt) => {
    // here we need to check if the usre name and password is corect and move to the home page
    evt.preventDefault();
    alert('user details is: ' + fName + ', ' + lName + ', ' + email + ', ' + userName + ', ' + password)
  }

  const handleRoute = () =>{ 
    history.push("./LoginPage");
  }

  return (
  <Router>
    <div className="RegisterPage"> 
        <div className="content">
          <h1>Register As A New User</h1>
        </div>
        <form onSubmit={handleSubmit}>
              <br />
              <lable>
                First Name: &ensp;&ensp; &emsp;
              <input type="text" value={fName} onChange={e => setfName(e.target.value)} />
              </lable>
              <br/>
              <lable>
                Last Name: &ensp;&ensp; &emsp;
              <input type="text" value={lName} onChange={e => setlName(e.target.value)} />
              </lable>
              <br/>
              <lable>
                Email: &ensp;&ensp; &emsp;&emsp;&emsp;&nbsp;
              <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
              </lable>
              <br/>
              <lable>
                User Name: &ensp; &emsp;&nbsp;
              <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
              </lable>
              <br/>
              <lable>
                User Password: &nbsp;
              <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
              </lable>
              <br/><br/>
              <Button type="submit" value="Create New User">
                Create New User
              </Button>
          
              </form>
              <br/>



        <Button onClick={handleRoute}>
          Back
        </Button>

    </div>
  </Router>
    
  );
}

export default RegisterPage;
