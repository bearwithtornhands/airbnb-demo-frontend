import React from "react";
import styled from "styled-components";
import { Wrapper } from "../UI";
import Logo from "./Logo";
import Search from "./Search";
import Nav from "./Nav";

const Header = styled.header`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  @media (min-width: 1200px) {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
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
