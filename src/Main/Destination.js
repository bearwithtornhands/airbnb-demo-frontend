import React, { Component } from "react";
import styled from "styled-components";
import { H2, Section, SliderTrack, SliderRight } from "../defaults";
import destImg1 from "./src/dest-1.png";
import destImg2 from "./src/dest-2.png";
import destImg3 from "./src/dest-3.png";
import destImg4 from "./src/dest-4.png";
import destImg5 from "./src/dest-5.png";
import destImg6 from "./src/dest-6.png";

const Link = styled.a`
  display: block;
`;

const ImageWrap = styled.div`
  margin: 0 0 4px;
  @media (min-width: 768px) {
    margin: 0 0 8px;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 138px;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 264px;
  }
  @media (min-width: 1200px) {
    height: 220px;
  }
`;

const Title = styled.h6`
  font-size: 12px;
  line-height: 15px;
  color: #383838;
  font-weight: bold;

  margin: 0;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const ButtonRight = SliderRight.extend`
  top: 110px;
`;

class Destination extends Component {
  render() {
    return (
      <Section>
        <H2>Featured destination</H2>
        <SliderTrack>
          <div className="row">
            <div className="col-xs-4 col-md-3 col-xl-2">
              <Link href="#url">
                <ImageWrap>
                  <Image src={destImg1} alt="Paris" />
                </ImageWrap>
                <Title>Paris</Title>
              </Link>
            </div>
            <div className="col-xs-4 col-md-3 col-xl-2">
              <Link href="#url">
                <ImageWrap>
                  <Image src={destImg2} alt="Miami" />
                </ImageWrap>
                <Title>Miami</Title>
              </Link>
            </div>
            <div className="col-xs-4 col-md-3 col-xl-2">
              <Link href="#url">
                <ImageWrap>
                  <Image src={destImg3} alt="Tokyo" />
                </ImageWrap>
                <Title>Tokyo</Title>
              </Link>
            </div>
            <div className="col-xs-4 col-md-3 col-xl-2">
              <Link href="#url">
                <ImageWrap>
                  <Image src={destImg4} alt="Cape town" />
                </ImageWrap>
                <Title>Cape town</Title>
              </Link>
            </div>
            <div className="col-xs-4 col-md-3 col-xl-2">
              <Link href="#url">
                <ImageWrap>
                  <Image src={destImg5} alt="Seoul" />
                </ImageWrap>
                <Title>Seoul</Title>
              </Link>
            </div>
            <div className="col-xs-4 col-md-3 col-xl-2">
              <Link href="#url">
                <ImageWrap>
                  <Image src={destImg6} alt="Los Angeles" />
                </ImageWrap>
                <Title>Los Angeles</Title>
              </Link>
            </div>
          </div>
          <ButtonRight type="button" />
        </SliderTrack>
      </Section>
    );
  }
}

export default Destination;
