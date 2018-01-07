import React from "react";
import styled from "styled-components";
import Star from "./star.svg";

const ReviewList = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 8px;
`;

const Icon = styled.span`
  width: 12px;
  height: 12px;
  background: url(${Star}) no-repeat center center transparent;
  & + & {
    margin-left: 4px;
  }
`;

export default () => {
  return (
    <ReviewList>
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
    </ReviewList>
  );
};
