import React from "react";
import styled from "styled-components";

const Menu = styled.nav`
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
  color: #383838;
  text-align: center;

  min-width: 56px;
  padding: 0 8px;
  & + & {
    margin-left: 8px;
  }
`;

export default () => {
  return (
    <Menu>
      <Link href="/">Become a host</Link>
      <Link href="/">Help</Link>
      <Link href="/">Sign Up</Link>
      <Link href="/">Log In</Link>
    </Menu>
  );
};
