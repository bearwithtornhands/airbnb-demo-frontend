import React, { Component } from "react";
import styled from "styled-components";
import checked from "./check-on.svg";

const Button = styled.button`
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
    background: url(${checked}) no-repeat center center transparent;
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

const Content = styled.div`
  flex: 1;
  padding-top: 2px;
`;

class Checkbox extends Component {
  handleClick = () => {
    this.props.onCheckboxChange(this.props.name, !this.props.checked);
  };

  render() {
    return (
      <Button
        type="button"
        isActive={this.props.checked}
        onClick={this.handleClick}
      >
        <Content>{this.props.children}</Content>
      </Button>
    );
  }
}

export default Checkbox;
