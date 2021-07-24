import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import background from "../../assets/Images/volenteering_background.jpg";

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


function LoginPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const moveToRegistration = () => {
    alert("it is workingdddd");
    history.push("./RegisterPage");
  }

  const handleSubmit = (evt) => {
    // here we need to check if the usre name and password is corect and move to the home page
    evt.preventDefault();
    alert('user name and password is: ' + userName + ', ' + password)
    if (userName == "admin" && password == "123456") {
      history.push("../Home");
    }
    else {
      alert('user name and password is incorect')
    }
  }





  return (
    <div style={{
      backgroundColor: "white",
      height: "750px",
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="LoginPage" style={{
        marginLeft: "50px",
      }}>
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <lable>
            {`User Name:   `}  &nbsp; &nbsp; &nbsp; &ensp;
            < input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
          </lable>
          <br />
          <br />

          <lable>
            User password: &ensp;
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </lable>
          <br /><br />
          <Button type="submit" value="Log In">
            Log In
          </Button>

        </form>
        <br />
        <Button onClick={moveToRegistration}>
          Registration
        </Button>

      </div>


    </div>
  );
}

export default LoginPage;