import React, { Component } from "react";
import { Wrapper, MainInner } from "../defaults";
import Category from "../category/Category";
import Experiences from "../experiences/Experiences";
import Homes from "../homes/Homes";
import Popular from "../popular/Popular";
import Destination from "../destination/Destination";

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
