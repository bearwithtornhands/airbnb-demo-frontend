import React, { Component } from "react";
import styled from "styled-components";
import {
  Section,
  Heading,
  HeadingH2,
  HeadingLink,
  SliderTrack,
  SliderRight,
  Review
} from "../defaults";
import ReviewStatus from "./ReviewStatus";
import expImg1 from "./src/exp-1.png";
import expImg2 from "./src/exp-2.png";
import expImg3 from "./src/exp-3.png";
import expImg4 from "./src/exp-4.png";

const Card = styled.div`
  font-size: 13px;
  line-height: 16px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const ImageLink = styled.a`
  display: block;
  margin: 0 0 8px;
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
  margin: 0 0 5px;
  b {
    font-weight: bold;
  }
`;

const Price = styled.b``;

const ButtonRight = SliderRight.extend`
  top: 173px;
`;

class Experiences extends Component {
  render() {
    return (
      <Section>
        <Heading>
          <HeadingH2>Experiences</HeadingH2>
          <HeadingLink href="#url">See all</HeadingLink>
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
                <Review>
                  <ReviewStatus />
                  <span>44 reviews</span>
                </Review>
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
                <Review>
                  <ReviewStatus />
                  <span>46 reviews</span>
                </Review>
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
                <Review>
                  <ReviewStatus />
                  <span>44 reviews</span>
                </Review>
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
                <Review>
                  <ReviewStatus />
                  <span>45 reviews</span>
                </Review>
              </Card>
            </div>
          </div>
          <ButtonRight type="button" />
        </SliderTrack>
      </Section>
    );
  }
}

export default Experiences;
