import React, { Component } from "react";
import styled from "styled-components";
import plus from "./plus.svg";
import minus from "./minus.svg";

const Section = styled.div`
  font-size: 18px;
  line-height: 21px;
  font-weight: 300;

  display: inline-flex;
  width: 114px;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  font-size: 0;
  line-height: 0;

  display: block;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid #008489;
  border-radius: 100%;
  outline: none;
  background-color: white;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
  &:focus {
    box-shadow: 0 0 6px rgba(0, 132, 137, 0.5);
  }
`;

const Image = styled.img``;

const Count = styled.div``;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count
    };
  }

  increment = () => {
    const nextCount = this.state.count + 1;

    this.setState({ count: nextCount });
    this.props.onCounterChange(this.props.id, nextCount);
  };

  decrement = () => {
    const nextCount = this.state.count - 1;

    this.setState({ count: nextCount });
    this.props.onCounterChange(this.props.id, nextCount);
  };

  render() {
    return (
      <Section>
        <Button
          type="button"
          disabled={this.state.count === 0}
          onClick={this.decrement}
        >
          <Image src={minus} alt="Minus" />
        </Button>
        <Count>{this.state.count}</Count>
        <Button
          type="button"
          disabled={this.state.count === 99}
          onClick={this.increment}
        >
          <Image src={plus} alt="Plus" />
        </Button>
      </Section>
    );
  }
}

export default Counter;
