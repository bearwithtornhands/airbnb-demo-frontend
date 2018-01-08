import React from "react";
import styled from "styled-components";
import { Wrapper } from "../UI";
import Logo from "./Logo";
import Search from "./Search";
import Nav from "./Nav";

const Header = styled.header`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  margin-bottom: 40px;
  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export default () => {
  return (
    <Header>
      <Wrapper>
        <HeaderInner>
          <Logo />
          <Search />
          <Nav />
        </HeaderInner>
      </Wrapper>
    </Header>
  );
};
