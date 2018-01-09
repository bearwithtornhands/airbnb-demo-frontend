import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImg from "./logo.svg";
import Bottom from "./bottom.svg";

const Logo = styled.div`
  margin-right: 8px;
  @media (min-width: 768px) {
    margin-right: 17px;
  }
  @media (min-width: 1200px) {
    margin-right: 51px;
  }
`;

const StyledLink = styled(Link)`
  display: none;
  @media (min-width: 1200px) {
    display: block;
  }
`;

const Button = styled.button`
  display: block;
  padding-right: 15.5px;
  background: url(${Bottom}) no-repeat right center transparent;
  border: 0;
  @media (min-width: 768px) {
    padding-right: 17.5px;
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;

const Image = styled.img``;

export default () => {
  return (
    <Logo>
      <StyledLink to="/">
        <Image src={logoImg} alt="logo" />
      </StyledLink>
      <Button type="button">
        <Image src={logoImg} alt="logo" />
      </Button>
    </Logo>
  );
};
