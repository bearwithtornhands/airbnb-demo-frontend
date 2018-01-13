import React from "react";
import styled from "styled-components";
import right from "./right.svg";

const Pagination = styled.div`
  font-size: 16px;
  line-height: 19px;

  margin: 16px 0 24px;
  @media (min-width: 768px) {
    margin: 8px 0 39px;
  }
`;

const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const Button = styled.button`
  font: normal normal 16px/19px "Circular", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  color: #0f7276;
  text-align: center;

  width: 32px;
  height: 32px;
  padding: 5px 0 6px;
  margin: 0 8px;
  border-radius: 100%;
  border: 1px solid transparent;
  background-color: transparent;
  outline: none;
  &:focus {
    box-shadow: 0 0 6px rgba(0, 132, 137, 0.5);
  }
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  ${props =>
    props.active &&
    `
    color: white;
    background-color: #008489;
  `};
`;

const Dots = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #0f7276;

  margin: 0 8px;
`;

const Info = styled.p`
  text-align: center;
  margin: 0;
`;

const Next = Button.extend`
  border-radius: 100%;
  width: 32px;
  height: 32px;
  border-color: #008489;
  margin-left: 16px;
  background: url(${right}) no-repeat left 13px center transparent;
`;

export default props => {
  return (
    <Pagination>
      <Pages>
        <Button type="button" active>
          1
        </Button>
        <Button type="button">2</Button>
        <Button type="button">3</Button>
        <Dots>...</Dots>
        <Button type="button">17</Button>
        <Next />
      </Pages>
      <Info>1 – 18 of 300+ Rentals</Info>
    </Pagination>
  );
};
