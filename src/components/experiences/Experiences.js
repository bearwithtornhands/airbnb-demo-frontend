import React, { Component } from "react";
import styled from "styled-components";
import star from "./img/star.svg";
import img1 from "./img/prod-1.png";
import img2 from "./img/prod-2.png";
import img3 from "./img/prod-3.png";
import img4 from "./img/prod-4.png";
import rightSmall from "./img/right-small.svg";
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
  margin: -18px -9px 0;
  @media (min-width: 768px) {
    margin: -16px -8px 0;
  }
  @media (min-width: 1200px) {
    margin: 0 -9px;
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
    margin-top: 0;
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
  font-size: 13px;
  line-height: 16px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const ProdImage = styled.a`
  display: block;
  height: 216px;
  margin: 0 0 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    height: 346px;
  }
`;

const ProdTitle = styled.a`
  font-weight: 300;
  color: #383838;

  display: block;
  margin: 0 0 5px;
  b {
    font-weight: bold;
  }
`;

const ReviewStatus = styled.div`
  font-size: 12px;
  line-height: 16px;

  display: flex;
  align-items: baseline;
  span {
    margin-left: 6px;
  }
  img {
    & + img {
      margin-left: 4px;
    }
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
  top: 173px;
  right: 0;
  transform: translate(50%, -50%);
  cursor: pointer;
  @media (min-width: 1200px) {
    display: block;
  }
`;

class Experiences extends Component {
  render() {
    return (
      <Section>
        <Heading>
          <Title>Experiences</Title>
          <Link href="#url">See all</Link>
        </Heading>
        <SliderTrack>
          <Row>
            <Cell>
              <Prod>
                <ProdImage href="#url">
                  <img src={img1} alt="Forest therapy" />
                </ProdImage>
                <ProdTitle href="#url">
                  <b>$29</b> Forest therapy
                </ProdTitle>
                <ReviewStatus>
                  <img src={star} alt="1" />
                  <img src={star} alt="2" />
                  <img src={star} alt="3" />
                  <img src={star} alt="4" />
                  <img src={star} alt="5" />
                  <span>44 reviews</span>
                </ReviewStatus>
              </Prod>
            </Cell>
            <Cell>
              <Prod>
                <ProdImage href="#url">
                  <img src={img2} alt="Whale watching" />
                </ProdImage>
                <ProdTitle href="#url">
                  <b>$69</b> Whale watching
                </ProdTitle>
                <ReviewStatus>
                  <img src={star} alt="1" />
                  <img src={star} alt="2" />
                  <img src={star} alt="3" />
                  <img src={star} alt="4" />
                  <img src={star} alt="5" />
                  <span>46 reviews</span>
                </ReviewStatus>
              </Prod>
            </Cell>
            <Cell>
              <Prod>
                <ProdImage href="#url">
                  <img src={img3} alt="Table Mountain Summit, Cable Car Down" />
                </ProdImage>
                <ProdTitle href="#url">
                  <b>$69</b> Table Mountain Summit, Cable Car Down
                </ProdTitle>
                <ReviewStatus>
                  <img src={star} alt="1" />
                  <img src={star} alt="2" />
                  <img src={star} alt="3" />
                  <img src={star} alt="4" />
                  <img src={star} alt="5" />
                  <span>44 reviews</span>
                </ReviewStatus>
              </Prod>
            </Cell>
            <Cell>
              <Prod>
                <ProdImage href="#url">
                  <img src={img4} alt="Salsa Night" />
                </ProdImage>
                <ProdTitle href="#url">
                  <b>$50</b> Salsa Night
                </ProdTitle>
                <ReviewStatus>
                  <img src={star} alt="1" />
                  <img src={star} alt="2" />
                  <img src={star} alt="3" />
                  <img src={star} alt="4" />
                  <img src={star} alt="5" />
                  <span>44 reviews</span>
                </ReviewStatus>
              </Prod>
            </Cell>
          </Row>
          <SliderRight type="button" />
        </SliderTrack>
      </Section>
    );
  }
}

export default Experiences;
