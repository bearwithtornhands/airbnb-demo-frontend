import React from "react";
import styled from "styled-components";
import { Review } from "../UI";
import ReviewStatus from "../UI/ReviewStatus";

const Card = styled.div`
  font-size: 12px;
  line-height: 15px;

  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;

    margin-bottom: 40px;
  }
`;

const ImageLink = styled.a`
  display: block;
  margin-bottom: 8px;
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
  margin-bottom: 4px;
  overflow: hidden;
  @media (min-width: 768px) {
    margin-bottom: 2px;
  }
`;

const Text = styled.p`
  font-weight: 300;

  margin: 0 0 6px;
`;

export default props => {
  return (
    <Card>
      <ImageLink href={props.url}>
        <Image src={props.image} alt={props.title} />
      </ImageLink>
      <Link href={props.url}>
        ${props.price} {props.title}{" "}
      </Link>
      <Text>{props.descr}</Text>
      <Review>
        <ReviewStatus />
        <span>{props.superhost} · Superhost</span>
      </Review>
    </Card>
  );
};
