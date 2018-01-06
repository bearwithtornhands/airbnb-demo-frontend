import React from "react";
import styled from "styled-components";
import { H2, Section, SliderTrack, SliderRight } from "../styled";
import destImg1 from "./dest-1.png";
import destImg2 from "./dest-2.png";
import destImg3 from "./dest-3.png";
import destImg4 from "./dest-4.png";
import destImg5 from "./dest-5.png";
import destImg6 from "./dest-6.png";

const Link = styled.a`
  display: block;
  margin-bottom: 16px;
  @media (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

const ImageWrap = styled.div`
  margin-bottom: 4px;
  @media (min-width: 768px) {
    margin-bottom: 8px;
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

export default () => {
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
};
