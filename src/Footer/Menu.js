import React, { Component } from "react";
import styled from "styled-components";

const MenuList = styled.div`
  display: flex;
  align-items: center;
  margin: 0 12px 0 0;
  @media (min-width: 768px) {
    margin: 0 24px 0 0;
  }
`;

const Link = styled.a`
  font-size: 12px;
  line-height: 16px;
  color: #636363;

  margin: 0 12px 0 0;
  &:last-child {
    margin: 0;
  }
  @media (min-width: 768px) {
    margin: 0 16px 0 0;
  }
`;

class Menu extends Component {
  render() {
    return (
      <MenuList>
        <Link href="#url">Terms</Link>
        <Link href="#url">Privacy</Link>
        <Link href="#url">Site map</Link>
      </MenuList>
    );
  }
}

export default Menu;
