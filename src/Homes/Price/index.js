import React, { Component } from "react";
import styled from "styled-components";
import Rheostat from "rheostat";
import "./style.css";

const Section = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

const Title = styled.h4`
  font-size: 16px;
  line-height: 19px;
  font-weight: 300;

  margin: 0 0 7px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;

    margin-bottom: 8px;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 19px;

    margin-bottom: 7px;
  }
`;

const Text = styled.p`
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;

  margin: 0 0 32px;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 16px;

    margin-bottom: 24px;
  }
  @media (min-width: 1200px) {
    font-size: 12px;
    line-height: 14px;

    margin-bottom: 32px;
  }
`;

class Price extends Component {
  handleChange = params => {
    this.props.onChange("price", {
      from: params.values[0],
      to: params.values[1]
    });
  };

  render() {
    const { min, max, price } = this.props;
    return (
      <Section>
        <Title>{`$${price.from} – $${price.to}`}</Title>
        <Text>The average nightly price is $75</Text>
        <Rheostat
          min={min}
          max={max}
          values={[price.from, price.to]}
          onValuesUpdated={this.handleChange}
        />
      </Section>
    );
  }
}

export default Price;
