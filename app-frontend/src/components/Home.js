import React from "react";
import image1 from '../assets/Images/vol1.jpg';
import image2 from '../assets/Images/vol2.png';
import image3 from '../assets/Images/vol3.jpg';
import styled from "styled-components";

const theme = {
    green: {
      default: "#9ccc65",
      hover: "#7cb342"
    }
  };

  function clickMe(){
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


function Home() {

    return (
        <div>
            <div style={{display: 'flex',  justifyContent:'center', height: '10vh'}}>
                <h1> Welcom</h1>
            </div>  
            <div style={{display: 'flex', justifyContent:'space-around', height: '25vh'}}>
            <img src={image1} height={150} width={250} />
            <br/>
            </div>
            <div style={{display: 'flex',  justifyContent:'space-around', height: '25vh'}}>
            <img src={image2} height={150} width={250} />
            <br/>
            </div>
            <div style={{display: 'flex',  justifyContent:'space-around', height: '25vh'}}>
            <img src={image3} height={150} width={250} />
            <br/>
            </div>

            {/*<div style={{display: 'flex', position="absolute", top="40px", left="40px"}}>
            <img src={image3} height={150} width={250} />
            <br/>
    </div>*/}
        </div>
    );
}

export default Home;