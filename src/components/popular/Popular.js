import React, { Component } from "react";
import styled from "styled-components";
import { H2, Section, Heading, SliderTrack, SliderRight } from "../defaults";
import img1 from "./img/img-1.png";
import img2 from "./img/img-2.png";
import img3 from "./img/img-3.png";
import img4 from "./img/img-4.png";

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
  font-size: 12px;
  line-height: 15px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 23px;
  }
`;

const Image = styled.a`
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

const Tag = styled.div`
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

const Title = styled.a`
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

const Text = styled.p`
  font-weight: 300;
  color: rgba(56, 56, 56, 0.9);

  margin: 0;
`;

const ButtonRight = SliderRight.extend`
  top: 82px;
`;

class Popular extends Component {
  render() {
    return (
      <Section>
        <Heading>
          <H2>Popular reservations around the world</H2>
          <a href="#url">See all</a>
        </Heading>
        <SliderTrack>
          <Row>
            <Cell>
              <Box>
                <Image href="#url">
                  <img src={img1} alt="Chumley’s" />
                </Image>
                <Tag>Speakeasy</Tag>
                <Title href="#url">Chumley’s</Title>
                <Text>About $60 per person</Text>
              </Box>
            </Cell>
            <Cell>
              <Box>
                <Image href="#url">
                  <img src={img2} alt="Hanjan" />
                </Image>
                <Tag>Korean gastropub</Tag>
                <Title href="#url">Hanjan</Title>
                <Text>About $50 per person</Text>
              </Box>
            </Cell>
            <Cell>
              <Box>
                <Image href="#url">
                  <img src={img3} alt="Prime Meats" />
                </Image>
                <Tag>German american</Tag>
                <Title href="#url">Prime Meats</Title>
                <Text>About $55 per person</Text>
              </Box>
            </Cell>
            <Cell>
              <Box>
                <Image href="#url">
                  <img src={img4} alt="Seaprice" />
                </Image>
                <Tag>Fine seafood</Tag>
                <Title href="#url">Seaprice</Title>
                <Text>About $70 per person</Text>
              </Box>
            </Cell>
          </Row>
          <ButtonRight type="button" />
        </SliderTrack>
      </Section>
    );
  }
}

export default Popular;
