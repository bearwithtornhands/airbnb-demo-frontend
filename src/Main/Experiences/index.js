import React from "react";
import styled from "styled-components";
import {
  Section,
  Heading,
  HeadingH2,
  HeadingLink,
  SliderTrack,
  SliderRight
} from "../../UI";
import Review from "../../UI/Review";
import expImg1 from "./exp-1.png";
import expImg2 from "./exp-2.png";
import expImg3 from "./exp-3.png";
import expImg4 from "./exp-4.png";

const Card = styled.div`
  font-size: 13px;
  line-height: 16px;

  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

const ImageLink = styled.a`
  display: block;
  margin-bottom: 8px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 216px;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 346px;
  }
`;

const Link = styled.a`
  font-weight: 300;
  color: #383838;

  display: block;
  margin-bottom: 5px;
  b {
    font-weight: bold;
  }
`;

const Info = styled.div`
  font-size: 12px;
  line-height: 15px;
  white-space: nowrap;

  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;

const Price = styled.b``;

const ButtonRight = SliderRight.extend`
  top: 173px;
`;

export default () => (
  <Section>
    <Heading>
      <HeadingH2>Experiences</HeadingH2>
      <HeadingLink to="/">See all</HeadingLink>
    </Heading>
    <SliderTrack>
      <div className="row">
        <div className="col-xs-6 col-md-4 col-xl-3">
          <Card>
            <ImageLink href="#url">
              <Image src={expImg1} alt="Forest therapy" />
            </ImageLink>
            <Link href="#url">
              <Price>$29</Price> Forest therapy
            </Link>
            <Info>
              <Review rating={5} />
              <span>44 reviews</span>
            </Info>
          </Card>
        </div>
        <div className="col-xs-6 col-md-4 col-xl-3">
          <Card>
            <ImageLink href="#url">
              <Image src={expImg2} alt="Whale watching" />
            </ImageLink>
            <Link href="#url">
              <Price>$69</Price> Whale watching
            </Link>
            <Info>
              <Review rating={5} />
              <span>46 reviews</span>
            </Info>
          </Card>
        </div>
        <div className="col-xs-6 col-md-4 col-xl-3">
          <Card>
            <ImageLink href="#url">
              <Image
                src={expImg3}
                alt="Table Mountain Summit, Cable Car Down"
              />
            </ImageLink>
            <Link href="#url">
              <Price>$69</Price> Table Mountain Summit, Cable Car Down
            </Link>
            <Info>
              <Review rating={5} />
              <span>44 reviews</span>
            </Info>
          </Card>
        </div>
        <div className="col-xs-6 col-md-4 col-xl-3">
          <Card>
            <ImageLink href="#url">
              <Image src={expImg4} alt="Salsa Night" />
            </ImageLink>
            <Link href="#url">
              <Price>$50</Price> Salsa Night
            </Link>
            <Info>
              <Review rating={5} />
              <span>45 reviews</span>
            </Info>
          </Card>
        </div>
      </div>
      <ButtonRight type="button" />
    </SliderTrack>
  </Section>
);
