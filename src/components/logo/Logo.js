import React, { Component } from "react";
import styled from "styled-components";
import logoImg from "./img/logo.svg";
import Bottom from "./img/bottom.svg";

const LogoBox = styled.div`
  margin-right: 8px;
  a {
    display: none;
  }
  button {
    display: block;
    padding: 0 15.5px 0 0;
    background: url(${Bottom}) no-repeat right center transparent;
    border: 0;
    outline: none;
  }
  @media (min-width: 768px) {
    margin-right: 17px;
    button {
      padding-right: 17.5px;
    }
  }
  @media (min-width: 1200px) {
    margin-right: 51px;
    a {
      display: block;
    }
    button {
      display: none;
    }
  }
`;

class Logo extends Component {
  render() {
    return (
      <LogoBox>
        <a href="/">
          <img src={logoImg} alt="logo" />
        </a>
        <button type="button">
          <img src={logoImg} alt="logo" />
        </button>
      </LogoBox>
    );
  }
}

export default Logo;
