import React, { Component } from "react";
import styled from "styled-components";
import logoImg from "./src/logo.svg";
import Bottom from "./src/bottom.svg";

const LogoBox = styled.div`
  margin-right: 8px;
  @media (min-width: 768px) {
    margin-right: 17px;
  }
  @media (min-width: 1200px) {
    margin-right: 51px;
  }
`;

const Link = styled.a`
  display: none;
  @media (min-width: 1200px) {
    display: block;
  }
`;

const Button = styled.button`
  display: block;
  padding: 0 15.5px 0 0;
  background: url(${Bottom}) no-repeat right center transparent;
  border: 0;
  outline: none;
  @media (min-width: 768px) {
    padding-right: 17.5px;
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;

class Logo extends Component {
  render() {
    return (
      <LogoBox>
        <Link href="/">
          <img src={logoImg} alt="logo" />
        </Link>
        <Button type="button">
          <img src={logoImg} alt="logo" />
        </Button>
      </LogoBox>
    );
  }
}

export default Logo;
