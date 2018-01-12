import React, { Component } from "react";
import styled from "styled-components";
import Booler from "../UI/Booler";

const Section = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 16px;
`;

const Content = styled.div`
  margin-right: 30px;
  @media (min-width: 768px) {
    width: 200px;
  }
`;

const Tools = styled.div`
  margin-left: auto;
`;

const Title = styled.h6`
  font-size: 18px;
  line-height: 23px;
  font-weight: normal;

  margin: 0 0 4px;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 300;

  margin: 0;
`;

class InstantBook extends Component {
  handleBoolerChange = value => {
    this.props.onBookChange(value);
  };

  render() {
    return (
      <Section>
        <Content>
          <Title>Instant book</Title>
          <Text>Listing you can book without waiting form host approval.</Text>
        </Content>
        <Tools>
          <Booler
            onBoolerChange={this.handleBoolerChange}
            checked={this.props.checked}
          />
        </Tools>
      </Section>
    );
  }
}

export default InstantBook;
