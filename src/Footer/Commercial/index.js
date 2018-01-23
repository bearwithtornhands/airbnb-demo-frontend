import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Social from './Social';
import Copy from './Copy';

const Commercial = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Side = styled.div`
  display: flex;
  align-items: center;
`;

export default () => (
  <Commercial>
    <Copy />
    <Side>
      <Menu />
      <Social />
    </Side>
  </Commercial>
);
