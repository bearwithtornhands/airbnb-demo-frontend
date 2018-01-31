import React from "react";
import styled from "styled-components";
import Star from "./star.svg";

const List = styled.div`
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
  ${props =>
    !props.active &&
    `
    opacity: .3
  `};
`;

export default props => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(<Icon key={i} active={i <= props.rating.toFixed()} />);
  }

  return <List>{stars}</List>;
};
