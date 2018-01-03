import React, { Component } from "react";
import styled from "styled-components";
import star from "./img/star.svg";
import img1 from "./img/prod-1.png";
import img2 from "./img/prod-2.png";
import img3 from "./img/prod-3.png";
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

const Prod = styled.div`
  font-size: 12px;
  line-height: 15px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const ProdImage = styled.a`
  display: block;
  height: 156px;
  margin: 0 0 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    height: 204px;
  }
`;

const ProdTitle = styled.a`
  font-size: 13px;
  line-height: 16px;
  font-weight: bold;
  color: #383838;
  white-space: nowrap;
  text-overflow: ellipsis;

  display: block;
  margin: 0 0 4px;
  overflow: hidden;
  @media (min-width: 768px) {
    margin: 0 0 2px;
  }
`;

const ProdText = styled.p`
  font-weight: 300;

  margin: 0 0 6px;
`;

const ReviewStatus = styled.div`
  font-size: 12px;
  line-height: 16px;

  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  span {
    white-space: nowrap;
  }
  img {
    &:last-of-type {
      margin-right: 6px;
    }
    & + img {
      margin-left: 4px;
    }
  }
`;

class Homes extends Component {
  render() {
    return (
      <Section>
        <Heading>
          <Title>Homes</Title>
          <Link href="#url">See all</Link>
        </Heading>
        <Row>
          <Cell>
            <Prod>
              <ProdImage href="#url">
                <img src={img1} alt="La Salentina, see, nature, & relax" />
              </ProdImage>
              <ProdTitle href="#url">
                $82 La Salentina, see, nature, & relax
              </ProdTitle>
              <ProdText>Entrie house · 9 bed</ProdText>
              <ReviewStatus>
                <img src={star} alt="1" />
                <img src={star} alt="2" />
                <img src={star} alt="3" />
                <img src={star} alt="4" />
                <img src={star} alt="5" />
                <span>97 · Superhost</span>
              </ReviewStatus>
            </Prod>
          </Cell>
          <Cell>
            <Prod>
              <ProdImage href="#url">
                <img
                  src={img2}
                  alt="Your private 3 bedr.riad and exclusive bonus with stars"
                />
              </ProdImage>
              <ProdTitle href="#url">
                $82 Your private 3 bedr.riad and exclusive bonus with stars
              </ProdTitle>
              <ProdText>Entrie house · 5 bed</ProdText>
              <ReviewStatus>
                <img src={star} alt="1" />
                <img src={star} alt="2" />
                <img src={star} alt="3" />
                <img src={star} alt="4" />
                <img src={star} alt="5" />
                <span>161 · Superhost</span>
              </ReviewStatus>
            </Prod>
          </Cell>
          <Cell>
            <Prod>
              <ProdImage href="#url">
                <img src={img3} alt="Dreamy Tropical Tree House" />
              </ProdImage>
              <ProdTitle href="#url">$200 Dreamy Tropical Tree House</ProdTitle>
              <ProdText>Entrie house · 1 bed</ProdText>
              <ReviewStatus>
                <img src={star} alt="1" />
                <img src={star} alt="2" />
                <img src={star} alt="3" />
                <img src={star} alt="4" />
                <img src={star} alt="5" />
                <span>364 · Superhost</span>
              </ReviewStatus>
            </Prod>
          </Cell>
        </Row>
      </Section>
    );
  }
}

export default Homes;
