import React from "react";
import styled from "styled-components";




const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWarpper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1rem;
  color: #555444;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 230ms ease-in;

  &:hover {
    border-top: 2px solid green;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWarpper>
        <LinkItem>
          <Link href="../Home">Home</Link>
        </LinkItem>
        <LinkItem>
          <Link href="../Activities/Activity"> Activities</Link>
        </LinkItem>
        <LinkItem>
          <Link href="../AboutUs"> About Us</Link>
        </LinkItem>
        <LinkItem>
        <Link href="../Contact"> Contact</Link>{/*<Link href="../Contact"> Contact</Link>*/}
        </LinkItem>

      </LinksWarpper>
    </NavLinksContainer>
  );
}
