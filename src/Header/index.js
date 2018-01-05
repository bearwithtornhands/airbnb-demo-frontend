import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";
import Nav from "./Nav";

const Header = styled.header`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  margin: 0 0 40px;
  @media (min-width: 768px) {
    margin: 0 0 48px;
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

const Wrapper = styled.div`
  max-width: 982px;
  margin: auto;
  padding: 0 8px;
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
