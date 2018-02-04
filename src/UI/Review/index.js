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
  const rating = props.rating.toFixed();

  return (
    <List>
      <Icon active={1 <= rating} />
      <Icon active={2 <= rating} />
      <Icon active={3 <= rating} />
      <Icon active={4 <= rating} />
      <Icon active={5 <= rating} />
    </List>
  );
};
