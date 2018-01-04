import React, { Component } from "react";
import styled from "styled-components";
import {
  H2,
  Section,
  Heading,
  SliderTrack,
  SliderRight,
  Review
} from "../defaults";
import ReviewStatus from "../reviewStatus/ReviewStatus";
import img1 from "./img/prod-1.png";
import img2 from "./img/prod-2.png";
import img3 from "./img/prod-3.png";

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
    padding: 0 9px;
    margin-top: 0;
  }
`;

const Box = styled.div`
  font-size: 12px;
  line-height: 15px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const Image = styled.a`
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

const Title = styled.a`
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

const Text = styled.p`
  font-weight: 300;

  margin: 0 0 6px;
`;

const ButtonRight = SliderRight.extend`
  top: 102px;
`;

class Homes extends Component {
  render() {
    return (
      <Section>
        <Heading>
          <H2>Homes</H2>
          <a href="#url">See all</a>
        </Heading>
        <SliderTrack>
          <Row>
            <Cell>
              <Box>
                <Image href="#url">
                  <img src={img1} alt="La Salentina, see, nature, & relax" />
                </Image>
                <Title href="#url">
                  $82 La Salentina, see, nature, & relax
                </Title>
                <Text>Entrie house · 9 bed</Text>
                <Review>
                  <ReviewStatus />
                  <span>97 · Superhost</span>
                </Review>
              </Box>
            </Cell>
            <Cell>
              <Box>
                <Image href="#url">
                  <img
                    src={img2}
                    alt="Your private 3 bedr.riad and exclusive bonus with stars"
                  />
                </Image>
                <Title href="#url">
                  $82 Your private 3 bedr.riad and exclusive bonus with stars
                </Title>
                <Text>Entrie house · 5 bed</Text>
                <Review>
                  <ReviewStatus />
                  <span>161 · Superhost</span>
                </Review>
              </Box>
            </Cell>
            <Cell>
              <Box>
                <Image href="#url">
                  <img src={img3} alt="Dreamy Tropical Tree House" />
                </Image>
                <Title href="#url">$200 Dreamy Tropical Tree House</Title>
                <Text>Entrie house · 1 bed</Text>
                <Review>
                  <ReviewStatus />
                  <span>364 · Superhost</span>
                </Review>
              </Box>
            </Cell>
          </Row>
          <ButtonRight type="button" />
        </SliderTrack>
      </Section>
    );
  }
}

export default Homes;
