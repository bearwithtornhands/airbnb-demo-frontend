import React, { Component } from "react";
import styled from "styled-components";
import { H2, Section, SliderTrack, SliderRight } from "../defaults";
import img1 from "./img/item-1.png";
import img2 from "./img/item-2.png";
import img3 from "./img/item-3.png";
import img4 from "./img/item-4.png";
import img5 from "./img/item-5.png";
import img6 from "./img/item-6.png";

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: row wrap;
  margin: -17px -8.5px 0;
  @media (min-width: 768px) {
    margin: -16px -8px 0;
  }
  @media (min-width: 1200px) {
    margin: 0 -8.5px;
  }
`;

const Cell = styled.div`
  padding: 0 8.5px;
  margin-top: 17px;
  width: 33.333333%;
  @media (min-width: 768px) {
    padding: 0 8px;
    margin-top: 16px;
    width: 25%;
  }
  @media (min-width: 1200px) {
    width: 16.666667%;
    padding: 0 8.5px;
    margin-top: 0;
  }
`;

const Item = styled.a`
  display: block;
`;

const ItemImage = styled.div`
  display: block;
  height: 138px;
  margin: 0 0 4px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    height: 264px;
    margin: 0 0 8px;
  }
  @media (min-width: 1200px) {
    height: 220px;
  }
`;

const ItemTitle = styled.h6`
  font-size: 12px;
  line-height: 15px;
  color: #383838;
  font-weight: bold;

  margin: 0;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const ButtonRight = SliderRight.extend`
  top: 110px;
`;

class Destination extends Component {
  render() {
    return (
      <Section>
        <H2>Featured destination</H2>
        <SliderTrack>
          <Row>
            <Cell>
              <Item href="#url">
                <ItemImage>
                  <img src={img1} alt="Paris" />
                </ItemImage>
                <ItemTitle>Paris</ItemTitle>
              </Item>
            </Cell>
            <Cell>
              <Item href="#url">
                <ItemImage>
                  <img src={img2} alt="Miami" />
                </ItemImage>
                <ItemTitle>Miami</ItemTitle>
              </Item>
            </Cell>
            <Cell>
              <Item href="#url">
                <ItemImage>
                  <img src={img3} alt="Tokyo" />
                </ItemImage>
                <ItemTitle>Tokyo</ItemTitle>
              </Item>
            </Cell>
            <Cell>
              <Item href="#url">
                <ItemImage>
                  <img src={img4} alt="Cape town" />
                </ItemImage>
                <ItemTitle>Cape town</ItemTitle>
              </Item>
            </Cell>
            <Cell>
              <Item href="#url">
                <ItemImage>
                  <img src={img5} alt="Seoul" />
                </ItemImage>
                <ItemTitle>Seoul</ItemTitle>
              </Item>
            </Cell>
            <Cell>
              <Item href="#url">
                <ItemImage>
                  <img src={img6} alt="Los Angeles" />
                </ItemImage>
                <ItemTitle>Los Angeles</ItemTitle>
              </Item>
            </Cell>
          </Row>
          <ButtonRight type="button" />
        </SliderTrack>
      </Section>
    );
  }
}

export default Destination;
