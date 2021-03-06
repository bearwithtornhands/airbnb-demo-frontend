import React from "react";
import styled from "styled-components";
import off from "./check-off.svg";
import on from "./check-on.svg";

const Button = styled.button`
  display: block;
  position: relative;
  width: 64px;
  height: 40px;
  padding: 0;
  border-radius: 20px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  background-color: rgba(72, 72, 72, 0.08);
  outline: none;
  cursor: pointer;
  ${props =>
    props.checked &&
    `
      border-color: #008489;
      background-color: #008489;
    `};
  &:focus {
    box-shadow: 0 0 6px rgba(0, 132, 137, 0.5);
  }
  &:after {
    content: "";

    position: absolute;
    top: -1px;
    left: -1px;
    right: auto;
    bottom: -1px;
    display: block;
    width: 40px;
    border-radius: 100%;
    border: 1px solid rgba(72, 72, 72, 0.3);
    background: url(${off}) no-repeat center center white;
    ${props =>
      props.checked &&
      `
        left: auto;
        right: -1px;
        border-color: #008489;
        background-image: url(${on});
    `};
  }
`;

const Booler = styled.div`
  display: flex;
  align-items: center;

  max-width: 384px;
  margin-bottom: 16px;
`;

const Content = styled.div`
  margin-right: 30px;
`;

const Tools = styled.div`
  margin-left: auto;
`;

export default props => (
  <Booler>
    <Content>{props.children}</Content>
    <Tools>
      <Button
        type="button"
        checked={props.checked}
        onClick={() => props.onChange(props.name, !props.checked)}
      />
    </Tools>
  </Booler>
);
