import React from "react";
import { Main, Wrapper } from "../UI";
import Filter from "./Filter";
import Catalog from "./Catalog";
import HomesMap from "./HomesMap";

export default () => {
  return (
    <Main>
      <HomesMap />
      <Filter />
      <Wrapper>
        <Catalog />
      </Wrapper>
    </Main>
  );
};
