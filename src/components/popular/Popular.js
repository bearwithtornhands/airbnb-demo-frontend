import React, { Component } from "react";
import styled from "styled-components";
import img1 from "./img/img-1.png";
import img2 from "./img/img-2.png";
import img3 from "./img/img-3.png";
import img4 from "./img/img-4.png";
import rightSmall from "./img/right-small.svg";

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
    width: 25%;
    padding: 0 9px;
    margin-top: 18px;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 0 16px;
  @media (min-width: 768px) {
    margin: 0 0 24px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 31px;
  font-weight: bold;

  margin: 0 8px 0 0;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
  }
`;

const Link = styled.a`
  font-size: 12px;
  line-height: 24px;
  color: #383838;
  white-space: nowrap;

  padding-right: 13px;
  background: url(${rightSmall}) no-repeat right center transparent;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const Item = styled.div`
  font-size: 12px;
  line-height: 15px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 23px;
  }
`;

const ItemImage = styled.a`
  display: block;
  height: 108px;
  margin: 0 0 7px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    height: 164px;
    margin: 0 0 12px;
  }
`;

const ItemTag = styled.div`
  font-size: 8px;
  line-height: 11px;
  font-weight: bold;
  text-transform: uppercase;

  margin: 0 0 2px;
  @media (min-width: 768px) {
    font-size: 10px;
    line-height: 13px;
  }
`;

const ItemTitle = styled.a`
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  color: #383838;

  display: block;
  margin: 0 0 4px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 23px;
  }
`;

const ItemText = styled.p`
  font-weight: 300;
  color: rgba(56, 56, 56, 0.9);

  margin: 0;
`;

class Popular extends Component {
  render() {
    return (
      <Section>
        <Heading>
          <Title>Popular reservations around the world</Title>
          <Link href="#url">See all</Link>
        </Heading>
        <Row>
          <Cell>
            <Item>
              <ItemImage href="#url">
                <img src={img1} alt="Chumley’s" />
              </ItemImage>
              <ItemTag>Speakeasy</ItemTag>
              <ItemTitle href="#url">Chumley’s</ItemTitle>
              <ItemText>About $60 per person</ItemText>
            </Item>
          </Cell>
          <Cell>
            <Item>
              <ItemImage href="#url">
                <img src={img2} alt="Hanjan" />
              </ItemImage>
              <ItemTag>Korean gastropub</ItemTag>
              <ItemTitle href="#url">Hanjan</ItemTitle>
              <ItemText>About $50 per person</ItemText>
            </Item>
          </Cell>
          <Cell>
            <Item>
              <ItemImage href="#url">
                <img src={img3} alt="Prime Meats" />
              </ItemImage>
              <ItemTag>German american</ItemTag>
              <ItemTitle href="#url">Prime Meats</ItemTitle>
              <ItemText>About $55 per person</ItemText>
            </Item>
          </Cell>
          <Cell>
            <Item>
              <ItemImage href="#url">
                <img src={img4} alt="Seaprice" />
              </ItemImage>
              <ItemTag>Fine seafood</ItemTag>
              <ItemTitle href="#url">Seaprice</ItemTitle>
              <ItemText>About $70 per person</ItemText>
            </Item>
          </Cell>
        </Row>
      </Section>
    );
  }
}

export default Popular;
