import React, { Component } from "react";
import styled from "styled-components";
import Category from "./Category";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Destination from "./Destination";

const Wrapper = styled.div`
  max-width: 982px;
  margin: auto;
  padding: 0 8px;
`;

const MainInner = styled.main`
  margin: 0 0 40px;
  @media (min-width: 768px) {
    margin: 0 0 64px;
  }
`;

class Main extends Component {
  render() {
    return (
      <MainInner>
        <Wrapper>
          <Category />
          <Experiences />
          <Homes />
          <Popular />
          <Destination />
        </Wrapper>
      </MainInner>
    );
  }
}

export default Main;
