import React from 'react'
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

  function clickMe(){
    alert("it is working");
  }


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



function CreateNewActivity() {
  const history = useHistory();
  
  const handleRoute = () =>{ 
    history.push("./Activity");
  }
  return (
  <Router>
    <div className="CreateNewActivitiy"> 
        <div className="content">
          <h1>Create New Activities</h1>
        </div>

        <form>
            <lable>
                Activity Location: &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp;&nbsp;
            </lable>
            <input type="text" location="location" />
            <br/><br/>

            <lable>
                Activity Date: &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &ensp;&nbsp;
            </lable>
            <input type="text" location="location" />
            <br/><br/>

            <lable>
                Activity Time:  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &ensp;&nbsp;
            </lable>
            <input type="text" location="location" />
            <br/><br/>

            <lable>
                Activity Duration: &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp;
            </lable>
            <input type="text" location="location" />
            <br/><br/>

            <lable>
                Required Amount Of Volunteers: &emsp; 
            </lable>
            <input type="text" location="location" />
            <br/><br/>

            <lable>
                Activity Description: &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp;
            </lable>
            <input type="text" location="location" />
            <br/><br/>
        </form>
        <br/><br/><br/>


        <Button onClick={clickMe}>
          Create New Activity
        </Button>
        <Button onClick={handleRoute}>
          Back
        </Button>

    </div>
  </Router>
    
  );
}

export default CreateNewActivity;
