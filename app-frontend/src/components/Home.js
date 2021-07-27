import React from "react";
import image1 from '../assets/Images/vol1.jpg';
import image2 from '../assets/Images/vol2.png';
import image3 from '../assets/Images/vol3.jpg';
import styled from "styled-components";
import yellow_ad from "../assets/Images/yellow_ad.jpg";
import sonol_ad from "../assets/Images/sonol_ad.jpg";

const theme = {
  green: {
    default: "#9ccc65",
    hover: "#7cb342"
  }
};

function clickMe() {
  alert("I Joined To an Activity");
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
  const Columns = () =>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 150 }}>
      {/*Column 1 (left) */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'right', height: '10vh' }}>

        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', height: '25vh' }}>
          <img src={image1} height={150} width={250} />
          <br />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', height: '25vh' }}>
          <img src={image2} height={150} width={250} />
          <br />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', height: '25vh' }}>
          <img src={image3} height={150} width={250} />
          <br />
        </div>
      </div>

      {/*Column 2 (center) */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', height: '10vh' }}>
          <h1> Welcom</h1>
        </div>
        <br /><br /><br />
        <p>
          <h4>Commercials Ads:</h4>
          <br/>
          {<img src={yellow_ad} alt="yellow ad" style={{height: "250px", width: "300px"}}/>}
          <br/><br/>
          {<img src={sonol_ad} alt="sonol ad" style={{height: "250px", width: "300px"}}/>}
        </p>

      </div>

      {/*Column 3 (right) */}
      <div>
        <br /><br /><br />
        <h3 style={{color:"lightcoral"}}>Important Messages </h3>
        <a>
          <h4 style={{color:"blue"}}>Coast cleanup activity 27.7.21
          <br/>
          Due to the hot weather, The activity has been moved<br/>
          to date 13.8.21, automatically update on your activity.</h4>
        </a>
      </div>
    </div>
  return (
    <div>
      <div>
        <Columns />
      </div>
      <div>
        <p>
          <h4 style={{ color: "gray", margin: "50px" }}>This website was built as a part of web application course by Hen Kfir and Zuriel.</h4>
        </p>
      </div>
    </div>
  );
}

export default Home;