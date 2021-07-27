import React, { useState ,useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
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

function RegisterPage() {
  const history = useHistory();

  const [input,setInput] = useState({
    fName:'',
    lName:'',
    email:'',
    username:'',
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
    const newUser = {
      fName: input.first_name,
      lName:input.last_name,
      email:input.email,
      // userName:input.value,
      password:input.password,
      password2:input.password2
    }
     axios.post('http://localhost:5001/register',newUser);
     handleRoute();
  }


  
  const handleRoute = () => {
    history.push("./LoginPage");
  }

  return (
    <Router>
      <div style={{
        backgroundColor: "white",
        height: "750px",
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="RegisterPage" style={{
          marginLeft: "50px",
        }}>
          <div className="content">
            <h2>Register As A New User</h2>
          </div>
          <form /*onSubmit={handleSubmit}*/>
            <lable>
              First Name: &ensp;&ensp; &emsp;
              <input type="text" name="first_name" value={input.first_name} onChange={handleChange} />
            </lable>
            <br />
            <lable>
              Last Name: &ensp;&ensp; &emsp;
              <input type="text" name="last_name" value={input.last_name} onChange={handleChange} />
            </lable>
            <br />
            <lable>
              Email: &ensp;&ensp; &emsp;&emsp;&emsp;&nbsp;
              <input type="text" name="email" value={input.email} onChange={handleChange} />
            </lable>
            <br />
            <lable>
              User Password: &nbsp;
              <input type="password" name="password" value={input.password} onChange={handleChange} />
            </lable>
            <br />
            <lable>
              Retype Password: &nbsp;
              <input type="password" name="password2" value={input.password2} onChange={handleChange} />
            </lable>
            <br /><br />
            <Button  onClick={handleClick} type="submit" value="Create New User">
              Create New User
            </Button>
          </form>
          <br />
          {/* <Button onClick={handleRoute}>
            Back
          </Button> */}
        </div>
      </div>
    </Router>
  );
}

export default RegisterPage;
