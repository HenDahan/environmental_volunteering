import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import background from "../../assets/Images/volenteering_background.jpg";
import axios from 'axios';

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

  const history = useHistory();

  const [input,setInput] = useState({
    email:'',
    password:''
  })
  function handleChange(event){
    const {name,value} = event.target;
    setInput(prevInput =>{
        return{
         ...prevInput,
          [name]: value
        }
    })
  }

  function handleClick(event){
    event.preventDefault();
    const checkUser = {
      email:input.email,
      password:input.password,
    }

    axios.post('http://localhost:5001/login',checkUser).then((res =>{
      if(res.status==200) {
      history.push("../Home");
      }else{
        history.push("./RegisterPage");
      }
    })).catch((err)=>{    history.push("./RegisterPage")});
  }

  const moveToRegistration = () => {
    history.push("./RegisterPage");
  }

  // const handleSubmit = (evt) => {
  //   // here we need to check if the usre name and password is corect and move to the home page
  //   evt.preventDefault();
  //   //alert('user name and password are: ' + userName + ', ' + password)
  //   if (userName == "admin" && password == "123456") {
  //     history.push("../Home");
  //   }
  //   else {
  //     alert('user name and password are incorect')
  //   }
  // }
{/*input User name and password on a form submit.*/}
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
        <form /*onSubmit={handleSubmit}*/>
          <lable>
            {`User Name:   `}  &nbsp; &nbsp; &nbsp; &ensp;
            <input type="text" name="email" value={input.email} onChange={handleChange} />
          </lable>
          <br />
          <br />
          <lable>
            User password: &ensp;
            <input type="password" name="password" value={input.password} onChange={handleChange} />
          </lable>
          <br /><br />
          <Button onClick= {handleClick}type="submit" value="Log In">
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