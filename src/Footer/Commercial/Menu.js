import React from "react";
import styled from "styled-components";

const Menu = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 12px 0 0;
  margin-right: 12px;
  @media (min-width: 768px) {
    margin-right: 24px;
  }
`;

const Link = styled.a`
  font-size: 12px;
  line-height: 16px;
  color: #636363;

  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }
  @media (min-width: 768px) {
    margin-right: 16px;
  }
`;

export default () => {
  return (
    <Menu>
      <Link href="#url">Terms</Link>
      <Link href="#url">Privacy</Link>
      <Link href="#url">Site map</Link>
    </Menu>
  );
};
