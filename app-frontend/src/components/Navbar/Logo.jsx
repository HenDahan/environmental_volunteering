import React from "react";
import styled from "styled-components";
import fakeLogo from '../../assets/Images/fakelogo.png';

const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const LogoImage = styled.div`
  width: 29px;
  height: 29px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 4px 0 4px 0;
  color: #555444;
  font-weight: 500;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImage> <img src={fakeLogo} alt="CleanBack logo" /> </LogoImage>
      <LogoText>
        CleanBack
      </LogoText>
    </LogoWrapper>
  );
}
