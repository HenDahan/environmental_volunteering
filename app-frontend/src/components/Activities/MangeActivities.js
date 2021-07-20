import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
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

function MangeActivities() {

    {/**
    const [activityType, setActivityType] = useState('Street'); // Street, Forest, Beach

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert('Search Activity is: ' + activityType )
    }


      
  const history = useHistory();  
  const handleRoute = (evt) =>{ 
    history.push("./Activity");
  }
 */}

  return (
      <div>

        <h1>      Mange Activities</h1>
      </div>
    
    
    
  );
}

export default MangeActivities;
