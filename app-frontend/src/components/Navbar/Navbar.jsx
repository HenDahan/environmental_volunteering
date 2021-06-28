import React from "react";
import { useMediaQuery } from "react-responsive";

import { Logo } from "./Logo";
import styled from "styled-components";
import { NavLinks } from "./Navlinks";
import { Access } from "./Access";
import { MobileNavLinks } from "./MobileNavlinks";

const ScreenSize = {
  Mobile: 768,
  Tablet: 992,
  Laptop: 1324,
  Desktop: 2024
};

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  padding: 0 1.5rem;
  align-items: center;
`;
const LeftSection = styled.div`
  display: flex;
`;
const MiddleSection = styled.div`
  height: 100%;
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
`;
const RightSection = styled.div`
  display: flex;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: ScreenSize.Mobile });
  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <Access />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}
