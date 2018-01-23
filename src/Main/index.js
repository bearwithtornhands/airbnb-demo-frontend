import React from 'react';
import { Main, Wrapper } from '../UI';
import Explore from './Explore';
import Experiences from './Experiences';
import Homes from './Homes';
import Popular from './Popular';
import Destination from './Destination';
import Footer from '../Footer';

export default () => (
  <div>
    <Main>
      <Wrapper>
        <Explore />
        <Experiences />
        <Homes />
        <Popular />
        <Destination />
      </Wrapper>
    </Main>
    <Footer />
  </div>
);
