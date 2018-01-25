import React, { Component } from "react";
import nanoid from "nanoid";
import styled from "styled-components";
import iconChecked from "./check-on.svg";

const Label = styled.label`
  font-family: "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  text-align: left;

  display: flex;
  align-items: flex-start;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  outline: none;
  &:before {
    content: "";

    width: 24px;
    height: 24px;
    background: url(${iconChecked}) no-repeat center center transparent;
    border: 1px solid rgba(72, 72, 72, 0.3);
    border-radius: 4px;
    margin-right: 12px;
    ${props =>
      props.isActive &&
      `
      border-color: #008489;
      background-color: #008489;
    `};
  }
  &:focus {
    &:before {
      box-shadow: 0 0 6px rgba(0, 132, 137, 0.5);
    }
  }
`;

const Input = styled.input`
  display: none;
`;

const Content = styled.div`
  flex: 1;
  padding-top: 2.5px;
  @media (min-with: 768px) {
    padding-top: 1.5px;
  }
  @media (min-with: 1200px) {
    padding-top: 2.5px;
  }
`;

class Checkbox extends Component {
  handleClick = event => {
    const input = event.target;
    this.props.onCheckboxChange(input.value, input.checked);
  };

  render() {
    const code = nanoid(4);
    const { name, value, checked, children } = this.props;

    return (
      <Label htmlFor={code} isActive={checked}>
        <Input
          type="checkbox"
          id={code}
          name={name}
          value={value}
          checked={checked}
          onChange={this.handleClick}
        />
        <Content>{children}</Content>
      </Label>
    );
  }
}

export default Checkbox;
