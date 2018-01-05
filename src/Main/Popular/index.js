import React from "react";
import styled from "styled-components";
import {
  Section,
  Heading,
  HeadingH2,
  HeadingLink,
  SliderTrack,
  SliderRight
} from "../defaults";
import popularImg1 from "./popular-1.png";
import popularImg2 from "./popular-2.png";
import popularImg3 from "./popular-3.png";
import popularImg4 from "./popular-4.png";

const Card = styled.div`
  font-size: 12px;
  line-height: 15px;

  margin: 0 0 16px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 23px;
  }
  @media (min-width: 1200px) {
    margin: 0;
  }
`;

const ImageLink = styled.a`
  display: block;
  margin: 0 0 7px;
  @media (min-width: 768px) {
    margin: 0 0 12px;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 108px;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 164px;
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

const Link = styled.a`
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

export default () => {
  return (
    <Section>
      <Heading>
        <HeadingH2>Popular reservations around the world</HeadingH2>
        <HeadingLink href="#url">See all</HeadingLink>
      </Heading>
      <SliderTrack>
        <div className="row">
          <div className="col-xs-6 col-md-4 col-xl-3">
            <Card>
              <ImageLink href="#url">
                <Image src={popularImg1} alt="Chumley’s" />
              </ImageLink>
              <Tag>Speakeasy</Tag>
              <Link href="#url">Chumley’s</Link>
              <Text>About $60 per person</Text>
            </Card>
          </div>
          <div className="col-xs-6 col-md-4 col-xl-3">
            <Card>
              <ImageLink href="#url">
                <Image src={popularImg2} alt="Hanjan" />
              </ImageLink>
              <Tag>Korean gastropub</Tag>
              <Link href="#url">Hanjan</Link>
              <Text>About $50 per person</Text>
            </Card>
          </div>
          <div className="col-xs-6 col-md-4 col-xl-3">
            <Card>
              <ImageLink href="#url">
                <Image src={popularImg3} alt="Prime Meats" />
              </ImageLink>
              <Tag>German american</Tag>
              <Link href="#url">Prime Meats</Link>
              <Text>About $55 per person</Text>
            </Card>
          </div>
          <div className="col-xs-6 col-md-4 col-xl-3">
            <Card>
              <ImageLink href="#url">
                <Image src={popularImg4} alt="Seaprice" />
              </ImageLink>
              <Tag>Fine seafood</Tag>
              <Link href="#url">Seaprice</Link>
              <Text>About $70 per person</Text>
            </Card>
          </div>
        </div>
        <ButtonRight type="button" />
      </SliderTrack>
    </Section>
  );
};
