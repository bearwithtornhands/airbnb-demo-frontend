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
  increment = () => {
    this.props.onCounterChange(this.props.id, this.props.count + 1);
  };

  decrement = () => {
    this.props.onCounterChange(this.props.id, this.props.count - 1);
  };

  render() {
    const { count, min, max } = this.props;
    return (
      <Section>
        <Button type="button" disabled={count === min} onClick={this.decrement}>
          <Image src={minus} alt="Minus" />
        </Button>
        <Count>{`${count}+`}</Count>
        <Button type="button" disabled={count === max} onClick={this.increment}>
          <Image src={plus} alt="Plus" />
        </Button>
      </Section>
    );
  }
}

export default Counter;
