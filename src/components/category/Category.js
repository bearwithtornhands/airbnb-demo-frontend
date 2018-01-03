import React, { Component } from "react";
import styled from "styled-components";
import categoryImage1 from "./img/category-1.jpg";
import categoryImage2 from "./img/category-2.jpg";
import categoryImage3 from "./img/category-3.jpg";

const Section = styled.section`
  margin: 0 0 40px;
  @media (min-width: 768px) {
    margin: 0 0 48px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: row wrap;
  margin: -18px -9px 0;
  @media (min-width: 768px) {
    margin: -16px -8px 0;
  }
  @media (min-width: 1200px) {
    margin: -18px -9px 0;
  }
`;

const Cell = styled.div`
  padding: 0 9px;
  margin-top: 18px;
  width: 50%;
  @media (min-width: 768px) {
    padding: 0 8px;
    margin-top: 16px;
    width: 33.333333%;
  }
  @media (min-width: 1200px) {
    padding: 0 9px;
    margin-top: 18px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 31px;
  font-weight: bold;

  margin: 0 0 16px;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;

    margin: 0 0 24px;
  }
`;

const Item = styled.a`
  color: #383838;
  display: block;
  @media (min-width: 768px) {
    display: flex;
    border-radius: 4px;
    box-shadow: inset 0 0 1px rgba(72, 72, 72, 0.2),
      0px 2px 4px rgba(72, 72, 72, 0.08);
    overflow: hidden;
  }
`;

const ItemImage = styled.div`
  height: 78px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    width: 96px;
    height: 74px;
    border-radius: 0;
    margin: -1px 0 -1px -1px;
    overflow: visible;
  }
`;

const ItemTitle = styled.div`
  font-size: 12px;
  line-height: 20px;
  font-weight: bold;

  padding: 10px 12px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border: 0.4px solid rgba(72, 72, 72, 0.2);
  border-top: 0;
  background: white;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  @media (min-width: 768px) {
    font-size: 17px;

    flex: 1;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    padding: 26px 24px;
  }
`;

class Category extends Component {
  render() {
    return (
      <Section>
        <Title>Explore Airbnb</Title>
        <Row>
          <Cell>
            <Item href="#url">
              <ItemImage>
                <img src={categoryImage1} alt="Homes" />
              </ItemImage>
              <ItemTitle>Homes</ItemTitle>
            </Item>
          </Cell>
          <Cell>
            <Item href="#url">
              <ItemImage>
                <img src={categoryImage2} alt="Experiences" />
              </ItemImage>
              <ItemTitle>Experiences</ItemTitle>
            </Item>
          </Cell>
          <Cell>
            <Item href="#url">
              <ItemImage>
                <img src={categoryImage3} alt="Restaurants" />
              </ItemImage>
              <ItemTitle>Restaurants</ItemTitle>
            </Item>
          </Cell>
        </Row>
      </Section>
    );
  }
}

export default Category;
