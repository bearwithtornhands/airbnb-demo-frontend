import React, { Component } from "react";
import styled from "styled-components";
import Card from "../Card";
import Pagination from "../Pagination";
import homeImg1 from "./home-1.png";
import homeImg2 from "./home-2.png";
import homeImg3 from "./home-3.png";

const homesData = [
  {
    url: "#url",
    image: homeImg1,
    title: "La Salentina, see, nature, & relax",
    descr: "Entrie house · 9 bed",
    price: 82,
    superhost: 97
  },
  {
    url: "#url",
    image: homeImg2,
    title: "Yout private 3 bedr. riad and exclusive chanels in park",
    descr: "Entrie house · 5 bed",
    price: 55,
    superhost: 161
  },
  {
    url: "#url",
    image: homeImg3,
    title: "Dreamy Tropical Tree House",
    descr: "Entrie house · 9 bed",
    price: 300,
    superhost: 364
  }
];

const CatalogWrap = styled.div`
  @media (min-width: 1200px) {
    padding: 80px 330px 0 0;
  }
`;

const Text = styled.p`
  fon-size: 16px;
  line-height: 19px;
  color: #636363;
  text-align: center;

  margin: 0;
`;

class Catalog extends Component {
  render() {
    const homesList = homesData.map(function(item, index) {
      return (
        <div key={index} className="col-xs-12 col-md-6">
          {Card(item)}
        </div>
      );
    });

    return (
      <CatalogWrap>
        <div className="row">{homesList}</div>
        <Pagination />
        <Text>
          Enter dates to see full pricing. Additional fees apply. Taxes may be
          added.
        </Text>
      </CatalogWrap>
    );
  }
}

export default Catalog;