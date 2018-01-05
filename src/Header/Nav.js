import React, { Component } from "react";
import styled from "styled-components";

const MenuList = styled.nav`
  font-size: 14px;
  line-height: 24px;

  display: none;
  align-items: flex-start;
  @media (min-width: 1200px) {
    display: flex;
    margin-left: auto;
  }
`;

const Link = styled.a`
  font-weight: 300;
  color: #383838;
  text-align: center;

  min-width: 56px;
  padding: 0 8px;
  & + & {
    margin-left: 8px;
  }
`;

class Nav extends Component {
  render() {
    return (
      <MenuList>
        <Link href="/">Become a host</Link>
        <Link href="/">Help</Link>
        <Link href="/">Sign Up</Link>
        <Link href="/">Log In</Link>
      </MenuList>
    );
  }
}

export default Nav;
