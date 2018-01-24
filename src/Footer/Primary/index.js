import React from 'react';
import styled from 'styled-components';
import LocationParams from './LocationParams';
import Nav from './Nav';

const Primary = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  }
`;

export default () => (
  <Primary>
    <LocationParams />
    <Nav />
  </Primary>
);
