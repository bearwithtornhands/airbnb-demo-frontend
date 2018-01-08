import React from "react";
import { Main, Wrapper } from "../UI";
import Category from "./Category";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Destination from "./Destination";

export default () => {
  return (
    <Main>
      <Wrapper>
        <Category />
        <Experiences />
        <Homes />
        <Popular />
        <Destination />
      </Wrapper>
    </Main>
  );
};
