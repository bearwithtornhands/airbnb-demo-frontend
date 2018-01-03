import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./img/logo.svg";

const FooterCopyBox = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #636363;

  display: flex;
  align-items: center;
  margin: 0 0 11px;
  img {
    height: 19px;
    margin-right: 8px;
  }
  @media (min-width: 768px) {
    margin: 0;
    img {
      height: 22px;
      margin-right: 12.5px;
    }
  }
`;

class FooterCopy extends Component {
  render() {
    return (
      <FooterCopyBox>
        <img src={Logo} alt="Airbnb" />
        <span>© Airbnb Inc.</span>
      </FooterCopyBox>
    );
  }
}

export default FooterCopy;
