import React from "react";
import { Main, Wrapper } from "../UI";
import Filter from "./Filter";
import Catalog from "./Catalog";
import Map from "./Map";

export default () => {
  return (
    <Main>
      <Filter />
      <Map />
      <Wrapper>
        <Catalog />
      </Wrapper>
    </Main>
  );
};
