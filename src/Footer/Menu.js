import React from "react";
import styled from "styled-components";

const Menu = styled.div`
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

export default () => {
  return (
    <Menu>
      <Link href="#url">Terms</Link>
      <Link href="#url">Privacy</Link>
      <Link href="#url">Site map</Link>
    </Menu>
  );
};
