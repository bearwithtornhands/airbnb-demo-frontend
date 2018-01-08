import React from "react";
import styled from "styled-components";

const Link = styled.a`
  color: #383838;
  display: block;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    display: flex;
    height: 72px;
    margin-bottom: 0;
    border-radius: 4px;
    box-shadow: inset 0 0 1px rgba(72, 72, 72, 0.2),
      0px 2px 4px rgba(72, 72, 72, 0.08);
    overflow: hidden;
  }
`;

const ImageWrap = styled.div`
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  overflow: hidden;
  @media (min-width: 768px) {
    border-radius: 0;
    overflow: visible;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 78px;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 96px;
    height: 100%;
  }
`;

const Title = styled.h6`
  font-size: 12px;
  line-height: 20px;
  font-weight: bold;

  padding: 10px 12px;
  margin: 0;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border: 0.4px solid rgba(72, 72, 72, 0.2);
  border-top: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  @media (min-width: 768px) {
    font-size: 17px;

    flex: 1;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    padding: 26px 24px;
  }
`;

export default props => {
  return (
    <Link href={props.url}>
      <ImageWrap>
        <Image src={props.image} alt={props.title} />
      </ImageWrap>
      <Title>{props.title}</Title>
    </Link>
  );
};
