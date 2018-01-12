import React, { Component } from "react";
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
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.checked ? "#008489" : "rgba(72, 72, 72, 0.3)"};
  background-color: ${props =>
    props.checked ? "#008489" : "rgba(72, 72, 72, 0.08)"};
  outline: none;
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 6px rgba(0, 132, 137, 0.5);
  }
  &:after {
    content: "";

    position: absolute;
    top: -1px;
    left: ${props => (props.checked ? "auto" : "-1px")};
    right: ${props => (props.checked ? "-1px" : "auto")};
    bottom: -1px;
    display: block;
    width: 40px;
    border-radius: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: ${props =>
      props.checked ? "#008489" : "rgba(72, 72, 72, 0.3)"};
    background-color: white;
    background-image: ${props =>
      props.checked ? "url(" + on + ")" : "url(" + off + ")"};
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

class Booler extends Component {
  handleClick = () => {
    this.props.onBoolerChange(this.props.checked);
  };

  render() {
    return (
      <Button
        type="button"
        onClick={this.handleClick}
        checked={this.props.checked}
      />
    );
  }
}

export default Booler;
