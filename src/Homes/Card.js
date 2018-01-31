import React from "react";
import styled from "styled-components";
import Review from "../UI/Review";

const Card = styled.a`
  font-size: 12px;
  line-height: 15px;
  color: #383838;

  display: block;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;

    margin-bottom: 40px;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 156px;
  object-fit: cover;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    height: 204px;
  }
`;

const Title = styled.h5`
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
    margin-bottom: 2px;
  }
`;

const Text = styled.p`
  font-weight: 300;

  margin: 0 0 6px;
`;

const Info = styled.div`
  font-size: 12px;
  line-height: 15px;
  white-space: nowrap;

  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;

export default props => (
  <Card href={props.url}>
    <Image src={props.image} alt={props.title} />
    <Title>
      ${props.price} {props.title}
    </Title>
    <Text>{props.descr}</Text>
    <Info>
      <Review rating={props.rating} />
      <span>
        {props.reviews} {props.isSuperhost ? " · Superhost" : ""}
      </span>
    </Info>
  </Card>
);
