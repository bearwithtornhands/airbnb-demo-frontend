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
import homeImg1 from "./src/home-1.png";
import homeImg2 from "./src/home-2.png";
import homeImg3 from "./src/home-3.png";

const Card = styled.div`
  font-size: 12px;
  line-height: 15px;
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
  height: 156px;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 204px;
  }
`;

const Link = styled.a`
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
          <HeadingH2>Homes</HeadingH2>
          <HeadingLink href="#url">See all</HeadingLink>
        </Heading>
        <SliderTrack>
          <div className="row">
            <div className="col-xs-6 col-md-4">
              <Card>
                <ImageLink href="#url">
                  <Image
                    src={homeImg1}
                    alt="La Salentina, see, nature, & relax"
                  />
                </ImageLink>
                <Link href="#url">$82 La Salentina, see, nature, & relax</Link>
                <Text>Entrie house · 9 bed</Text>
                <Review>
                  <ReviewStatus />
                  <span>97 · Superhost</span>
                </Review>
              </Card>
            </div>
            <div className="col-xs-6 col-md-4">
              <Card>
                <ImageLink href="#url">
                  <Image
                    src={homeImg2}
                    alt="Your private 3 bedr.riad and exclusive bonus with stars"
                  />
                </ImageLink>
                <Link href="#url">
                  $82 Your private 3 bedr.riad and exclusive bonus with stars
                </Link>
                <Text>Entrie house · 5 bed</Text>
                <Review>
                  <ReviewStatus />
                  <span>161 · Superhost</span>
                </Review>
              </Card>
            </div>
            <div className="col-xs-6 col-md-4">
              <Card>
                <ImageLink href="#url">
                  <Image src={homeImg3} alt="Dreamy Tropical Tree House" />
                </ImageLink>
                <Link href="#url">$200 Dreamy Tropical Tree House</Link>
                <Text>Entrie house · 1 bed</Text>
                <Review>
                  <ReviewStatus />
                  <span>364 · Superhost</span>
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

export default Homes;
