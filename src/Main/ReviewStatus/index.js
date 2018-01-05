import React, { Component } from "react";
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
`;

class ReviewStatus extends Component {
  render() {
    return (
      <List>
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </List>
    );
  }
}

export default ReviewStatus;
