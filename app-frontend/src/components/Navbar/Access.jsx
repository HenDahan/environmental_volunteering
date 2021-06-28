import React from "react";
import styled from "styled-components";

const AccessContainer = styled.div`
  display: flex;
  margin-left: 20px;
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1rem;
  margin-right: 30px;
  color: greenyellow;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
  background-color: white;
  border: 2px solid greenyellow;
  background-image: linear-gradient(to right, transpernt 0%, blue 100%);
  transition: all 220ms ease-in-out;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: white;
  }

  &:not(last-of-type) {
    margin-right: 7px;
  }
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1rem;
  margin-right: 30px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
  background-color: greenyellow;
  background-image: linear-gradient(to right, transpernt 0%, blue 100%);
  transition: all 220ms ease-in-out;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: green;
  }

  &:not(last-of-type) {
    margin-right: 7px;
  }
`;

export function Access(props) {
  return (
    <AccessContainer>
      <RegisterButton>Register</RegisterButton>
      <LoginButton>Login</LoginButton>
    </AccessContainer>
  );
}
