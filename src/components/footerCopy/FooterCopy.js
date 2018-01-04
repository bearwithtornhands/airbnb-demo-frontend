import React, { Component } from "react";
import styled from "styled-components";
import img from "./img/logo.svg";

const CopyBox = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #636363;

  display: flex;
  align-items: center;
  margin: 0 0 11px;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const Logo = styled.img`
  height: 19px;
  margin-right: 8px;
  @media (min-width: 768px) {
    height: 22px;
    margin-right: 12.5px;
  }
`;

class FooterCopy extends Component {
  render() {
    return (
      <CopyBox>
        <Logo src={img} alt="Airbnb" />
        <span>© Airbnb Inc.</span>
      </CopyBox>
    );
  }
}

export default FooterCopy;
