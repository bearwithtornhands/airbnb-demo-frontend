import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Homes from './Homes';

export default () => (
  <BrowserRouter>
    <div>
      <Header />

      <Route path="/" exact component={Main} />
      <Route path="/homes" component={Homes} />
    </div>
  </BrowserRouter>
);
