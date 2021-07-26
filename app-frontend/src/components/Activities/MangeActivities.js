import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ActivitiesTable from "../Tables/ActivitiesTable";
import { useState } from "react";

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

function MangeActivities(props) {
  const [activityType, setActivityType] = useState('Beach cleaning');
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert('Mange Activities is: ' + activityType)
  }

  const history = useHistory();
  const handleRoute = (evt) => {
    history.push("./Activity");
  }

  return (
    <Router>
      <div className="MangeActivities" style={{ marginLeft: "50px" }}>
        <div className="content">
        </div>
        <h1>Mange Activities</h1>
        <form onSubmit={handleSubmit}>
          <br />
          &emsp;
          <lable>
            Open Activities: &ensp;
            <select value={activityType} onChange={e => setActivityType(e.target.value)}> //set value here
              <option value="Beach cleaning">Beach cleaning</option>
              <option value="Forest cleaning">Forest cleaning</option>
            </select>
          </lable>
          &emsp;
          <input type="submit" value="Present" />
        </form>
        <br />
        <ActivitiesTable >
        </ActivitiesTable>
        <br /><br />
        <Button onClick={handleRoute}>
          Back
        </Button>
      </div>
    </Router>
  );
}

export default MangeActivities;
