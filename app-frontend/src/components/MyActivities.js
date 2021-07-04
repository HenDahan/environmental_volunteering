import React from 'react'
//import { Navbar } from "./Navbar/Navbar";
import {BrowserRouter as Router} from 'react-router-dom';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ActivitiesTable from "./Tables/ActivitiesTable";

/* materialpalette.com/colors */

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

function MyActivities() {
  const history = useHistory();
  
  const handleRoute = () =>{ 
    history.push("./Home");
  }
  return (
  <Router>
    <div className="MyActivities"> 
        <div className="content">
          <h1>My Activities</h1>
        </div>

        <ActivitiesTable>

        </ActivitiesTable>
 
        <br/><br/>
        <Button onClick={clickMe}>
          Cancel Request
        </Button>
        <Button onClick={handleRoute}>
          Back to Home
        </Button>
        
    </div>
  </Router>
    
  );
}

export default MyActivities;
