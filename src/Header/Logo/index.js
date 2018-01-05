import React, { Component } from "react";
import styled from "styled-components";
import logoImg from "./logo.svg";
import Bottom from "./bottom.svg";

const LogoWrap = styled.div`
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

const Image = styled.img``;

class Logo extends Component {
  render() {
    return (
      <LogoWrap>
        <Link href="/">
          <Image src={logoImg} alt="logo" />
        </Link>
        <Button type="button">
          <Image src={logoImg} alt="logo" />
        </Button>
      </LogoWrap>
    );
  }
}

export default Logo;
