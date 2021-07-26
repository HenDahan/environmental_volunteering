import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ActivitiesTable from "../Tables/ActivitiesTable";

const theme = {
  green: {
    default: "#9ccc65",
    hover: "#7cb342"
  }
};

function JoinToActivity() {
  alert("I Joined To Activity");
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

function ActivitySignUp() {
  const history = useHistory();
  const handleRoute = () => {
    history.push("./Activity");
  }
  return (
    <Router>
      <div className="ActivitySignUp" style={{ marginLeft: "50px" }}>
        <div className="content">
          <h1>Activity Sign-Up</h1>
        </div>
        <ActivitiesTable>
        </ActivitiesTable>
        <br /><br />
        <Button onClick={JoinToActivity}>
          Ask to join
        </Button>
        <Button onClick={handleRoute}>
          Back
        </Button>
      </div>
    </Router>
  );
}

export default ActivitySignUp;
