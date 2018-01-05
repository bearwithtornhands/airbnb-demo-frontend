import React, { Component } from "react";
import styled from "styled-components";
import { Wrapper } from "../defaults";
import Logo from "./Logo";
import Search from "./Search";
import Nav from "./Nav";

const HeaderBox = styled.header`
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

class Header extends Component {
  render() {
    return (
      <HeaderBox>
        <Wrapper>
          <HeaderInner>
            <Logo />
            <Search />
            <Nav />
          </HeaderInner>
        </Wrapper>
      </HeaderBox>
    );
  }
}

export default Header;
