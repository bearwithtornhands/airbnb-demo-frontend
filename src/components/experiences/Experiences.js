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
import img4 from "./img/prod-4.png";

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

const Box = styled.div`
  font-size: 13px;
  line-height: 16px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const Image = styled.a`
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

const Title = styled.a`
  font-weight: 300;
  color: #383838;

  display: block;
  margin: 0 0 5px;
  b {
    font-weight: bold;
  }
`;

const ButtonRight = SliderRight.extend`
  top: 173px;
`;

class Experiences extends Component {
  render() {
    return (
      <Section>
        <Heading>
          <H2>Experiences</H2>
          <a href="#url">See all</a>
        </Heading>
        <SliderTrack>
          <Row>
            <Cell>
              <Box>
                <Image href="#url">
                  <img src={img1} alt="Forest therapy" />
                </Image>
                <Title href="#url">
                  <b>$29</b> Forest therapy
                </Title>
                <Review>
                  <ReviewStatus />
                  <span>44 reviews</span>
                </Review>
              </Box>
            </Cell>
            <Cell>
              <Box>
                <Image href="#url">
                  <img src={img2} alt="Whale watching" />
                </Image>
                <Title href="#url">
                  <b>$69</b> Whale watching
                </Title>
                <Review>
                  <ReviewStatus />
                  <span>46 reviews</span>
                </Review>
              </Box>
            </Cell>
            <Cell>
              <Box>
                <Image href="#url">
                  <img src={img3} alt="Table Mountain Summit, Cable Car Down" />
                </Image>
                <Title href="#url">
                  <b>$69</b> Table Mountain Summit, Cable Car Down
                </Title>
                <Review>
                  <ReviewStatus />
                  <span>44 reviews</span>
                </Review>
              </Box>
            </Cell>
            <Cell>
              <Box>
                <Image href="#url">
                  <img src={img4} alt="Salsa Night" />
                </Image>
                <Title href="#url">
                  <b>$50</b> Salsa Night
                </Title>
                <Review>
                  <ReviewStatus />
                  <span>45 reviews</span>
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

export default Experiences;
