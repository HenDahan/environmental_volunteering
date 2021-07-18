import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import styled from "styled-components";
import { useHistory } from "react-router-dom";


/* materialpalette.com/colors */

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

function Activity() {
  const history = useHistory();
  const handleRoute = () =>{ 
    history.push("../Home");
  }
  const handleRoute2 = () =>{ 
    history.push("./MyActivities");
  }
  const handleRoute3 = () =>{ 
    history.push("./CreateNewActivity");
  }
  const handleRoute4 = () =>{ 
    history.push("./SearchActivity");
  }
  return (
  <Router>
    <div className="Activity"> 
        <div className="content">
          <h1>Activities Page:</h1>
        </div>

        <br/>
        <Button onClick={handleRoute2}>
          My Activiteis
        </Button>
        <br/>
        <br/>
        <Button onClick={handleRoute3}>
          Create New Activiteis
        </Button>
        <br/>
        <br/>
        <Button onClick={handleRoute4}>
          Serch Activiteis
        </Button>
        <br/>
        <br/>
        <Button onClick={handleRoute}>
          Back
        </Button>
        
        
    </div>
  </Router>
    
  );
}

export default Activity;
