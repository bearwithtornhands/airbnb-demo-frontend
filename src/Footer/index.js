import React from "react";
import styled from "styled-components";
import Primary from "./Primary";
import Commercial from "./Commercial";

const Wrapper = styled.div`
  max-width: 982px;
  margin: auto;
  padding: 0 8px;
`;

const Footer = styled.footer`
  background: #ffffff;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  padding: 16px 0;
  @media (min-width: 768px) {
    padding: 48px 0 44px;
  }
  @media (min-width: 1200px) {
    padding-bottom: 34px;
  }
`;

const Hr = styled.hr`
  height: 1px;
  border: 0;
  background-color: rgba(72, 72, 72, 0.08);
  margin: 24px 0 16px;
  @media (min-width: 768px) {
    margin: 38px 0 32px;
  }
  @media (min-width: 1200px) {
    margin-top: 48px;
  }
`;

export default () => {
  return (
    <Footer>
      <Wrapper>
        <Primary />
        <Hr />
        <Commercial />
      </Wrapper>
    </Footer>
  );
};
