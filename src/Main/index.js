import React, { Component } from "react";
import { Wrapper, MainInner } from "../defaults";
import Category from "./Category";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Destination from "./Destination";

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
