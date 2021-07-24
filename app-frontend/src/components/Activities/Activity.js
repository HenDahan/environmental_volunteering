import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
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
  const handleRouteHome = () => {
    history.push("../Home");
  }
  const handleRouteMyActivities = () => {
    history.push("./MyActivities");
  }
  const handleRouteCreateNewActivity = () => {
    history.push("./CreateNewActivity");
  }
  const handleRouteSearchActivity = () => {
    history.push("./SearchActivity");
  }
  const handleRouteActivitySignUp = () => {
    history.push("./ActivitySignUp");
  }
  const handleRouteMangeActivities = () => {
    history.push("./MangeActivities");
  }

  return (
    <Router>
      <div className="Activity" style={{
        marginLeft: "50px"
      }}>
        <div className="content">
          <h1>Activities Page:</h1>
        </div>

        <br />
        <Button onClick={handleRouteMyActivities}>
          My Activiteis
        </Button>
        <br />
        <br />
        <Button onClick={handleRouteActivitySignUp}>
          Activity Sign-Up
        </Button>
        <br />
        <br />
        <Button onClick={handleRouteCreateNewActivity}>
          Create New Activiteis
        </Button>
        <br />
        <br />
        <Button onClick={handleRouteSearchActivity}>
          Serch Activiteis
        </Button>
        <br />
        <br />
        <Button onClick={handleRouteMangeActivities}>
          Mange Activities
        </Button>
        <br />
        <br />
        <Button onClick={handleRouteHome}>
          Back
        </Button>


      </div>
    </Router>

  );
}

export default Activity;
