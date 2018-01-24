import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Main, Wrapper } from '../UI';
import Filter from './Filter';
import Catalog from './Catalog';
import Location from './Location';

const StyledMain = styled(Main)`
  padding-bottom: 88px;
  @media (min-width: 768px) {
    padding-bottom: 24px;
  }
`;

export default () => (
  <StyledMain>
    <Helmet>
      <title>Homes</title>
    </Helmet>
    <Filter />
    <Location />
    <Wrapper>
      <Catalog />
    </Wrapper>
  </StyledMain>
);
