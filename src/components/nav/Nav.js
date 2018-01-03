import React, { Component } from "react";
import styled from "styled-components";

const NavBox = styled.nav`
  font-size: 14px;
  line-height: 24px;

  display: none;
  align-items: flex-start;
  @media (min-width: 1200px) {
    display: flex;
    margin-left: auto;
  }
`;

const NavLink = styled.nav`
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
      <NavBox>
        <NavLink href="/">Become a host</NavLink>
        <NavLink href="/">Help</NavLink>
        <NavLink href="/">Sign Up</NavLink>
        <NavLink href="/">Log In</NavLink>
      </NavBox>
    );
  }
}

export default Nav;
