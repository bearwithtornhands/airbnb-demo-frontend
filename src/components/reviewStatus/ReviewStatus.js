import React, { Component } from "react";
import styled from "styled-components";
import img from "./star.svg";

const List = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 8px;
`;

const Star = styled.span`
  width: 12px;
  height: 12px;
  background: url(${img}) no-repeat center center transparent;
  & + & {
    margin-left: 4px;
  }
`;

class ReviewStatus extends Component {
  render() {
    return (
      <List>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </List>
    );
  }
}

export default ReviewStatus;
