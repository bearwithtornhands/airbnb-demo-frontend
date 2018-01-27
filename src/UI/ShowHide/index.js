import React, { Component } from "react";
import styled from "styled-components";
import arrow from "./arrow-down.svg";

const Section = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 18px;
  line-height: 21px;
  font-weight: normal;

  margin: 0;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 23px;
  }
`;

const Content = styled.div`
  width: 100%;
  margin-top: 24px;
  display: ${props => (props.isOpen ? "block" : "none")};
  @media (min-width: 768px) {
    display: block;
    margin-bottom: 8px;
    max-height: ${props => (props.isOpen ? "none" : "40px")};
    overflow: hidden;
  }
`;

const Toggler = styled.button`
  font-family: "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #0f7276;

  position: relative;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  padding: 0 20px 0 0;
  @media (min-width: 768px) {
    order: 1;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 6px;
  right: 0;
  margin-left: 9px;
  transform: ${props => (props.isOpen ? "rotate(180deg)" : "none")};
`;

export default class ShowHide extends Component {
  state = { isOpen: false };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Section>
        <Title>{this.props.title}</Title>
        <Toggler onClick={this.handleClick}>
          {this.state.isOpen ? "Hide" : "See all"}
          <Img src={arrow} alt="" isOpen={this.state.isOpen} />
        </Toggler>
        <Content isOpen={this.state.isOpen}>{this.props.children}</Content>
      </Section>
    );
  }
}
