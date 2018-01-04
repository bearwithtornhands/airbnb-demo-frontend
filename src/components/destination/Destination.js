import React, { Component } from "react";
import styled from "styled-components";
import img1 from "./img/item-1.png";
import img2 from "./img/item-2.png";
import img3 from "./img/item-3.png";
import img4 from "./img/item-4.png";
import img5 from "./img/item-5.png";
import img6 from "./img/item-6.png";
import right from "./img/right.svg";

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

const SliderTrack = styled.div`
  position: relative;
`;

const SliderRight = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  background: url(${right}) no-repeat right 14px center #ffffff;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 100%;
  position: absolute;
  top: 110px;
  right: 0;
  transform: translate(50%, -50%);
  cursor: pointer;
  @media (min-width: 1200px) {
    display: block;
  }
`;

class Destination extends Component {
  render() {
    return (
      <Section>
        <Title>Featured destination</Title>
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
          <SliderRight />
        </SliderTrack>
      </Section>
    );
  }
}

export default Destination;
