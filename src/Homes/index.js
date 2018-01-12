import React from "react";
import { Main, Wrapper } from "../UI";
import Filter from "./Filter";
import Catalog from "./Catalog";
import Location from "./Location";

export default () => {
  return (
    <Main>
      <Filter />
      <Location />
      <Wrapper>
        <Catalog />
      </Wrapper>
    </Main>
  );
};
