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

function SearchActivity(props) {
  const [activityCity, setActivityCity] = useState('');
  const [activityType, setActivityType] = useState('Street'); // Street, Forest, Beach
  const [activityDate, setActivityDate] = useState('');
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert('Search Activity is: ' + activityCity + ', ' + activityType + ', ' + activityDate)
  }

  const history = useHistory();
  const handleRoute = (evt) => {
    history.push("./Activity");
  }

  return (
    <Router>
      <div className="SearchActivity" style={{ marginLeft: "50px" }}>
        <div className="content">
        </div>
        <h1>Serch Activity</h1>
        <form onSubmit={handleSubmit}>
          <br />
          <lable>
            City: &ensp;
            <input type="text" value={activityCity} onChange={e => setActivityCity(e.target.value)} />
          </lable>
          &emsp;
          <lable>
            Date: &ensp;
            <input type="text" value={activityDate} onChange={e => setActivityDate(e.target.value)} />
          </lable>
          &emsp;
          <lable>
            Type: &ensp;
            <select value={activityType} onChange={e => setActivityType(e.target.value)}> //set value here
              <option value="Street">Street</option>
              <option value="Forest">Forest</option>
              <option value="Beach">Beach</option>
            </select>
          </lable>
          &emsp;
          <input type="submit" value="Search" />
        </form>
        <br />
        <ActivitiesTable>
        </ActivitiesTable>
        <br /><br />
        <Button onClick={handleRoute}>
          Back
        </Button>
      </div>
    </Router>
  );
}

export default SearchActivity;
