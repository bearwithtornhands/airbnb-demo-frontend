import React, { Component } from "react";
import styled from "styled-components";
import Body from "react-body-classname";
import closeIcon from "./close.svg";

const StyledBody = styled(Body)`
  position: ${props => (props.fixed ? "fixed" : "static")};
  top: 0;
  left: 0;
  right: 0;
  @media (min-width: 1200px) {
    position: static;
  }
`;

const Section = styled.div`
  position: relative;
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }
`;

const Toggler = styled.button`
  font-family: "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: ${props => (props.isActive ? "white" : "#383838")};

  display: inline-block;
  vertical-align: top;
  padding: 7px 15px;
  border: 1px solid
    ${props => (props.isActive ? "#008489" : "rgba(72, 72, 72, 0.2)")};
  border-radius: 4px;
  background-color: ${props => (props.isActive ? "#008489" : "white")};
  cursor: pointer;
  outline: none;
  &:focus {
    box-shadow: 0 0 6px rgba(0, 132, 137, 0.5);
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 1;
  @media (min-width: 768px) {
    top: calc(80px + 56px);
  }
  @media (min-width: 1200px) {
    max-width: calc(100vw - (100vw - 966px)/2 - 320px);
    right: auto;
    padding: 0 16px 0 calc((100vw - 966px)/2);
  }
`;

const Head = styled.div`
  padding: 16px 8px 14px;
  background-color: white;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  @media (min-width: 768px) {
    display: none;
  }
`;

const Title = styled.h5`
  font-size: 14px;
  line-height: 18px;
  font-weight: normal;
  text-align: center;

  margin: 0;
`;

const Scroll = styled.div`
  flex: 1;
  height: 100%;
  overflow: auto;
  padding: 40px 8px;
  @media (min-width: 1200px) {
    padding: 47px 0;
  }
`;

const Tools = styled.div`
  background-color: white;
  box-shadow: 0px -1px 0px #d5d5d5;
  padding: 8px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    box-shadow: none;
    padding: 8px 0;
    margin: 0;
  }
  @media (min-width: 1200px) {
    justify-content: flex-end;
  }
`;

const Save = styled.button`
  font: normal bold 18px/23px "Circular", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  color: white;

  display: block;
  width: 100%;
  border: 0;
  background-color: #ff5a5f;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 20px;
    color: white;
    font-weight: bold;

    background-color: #008489;
    padding: 14px 0;
    width: 147px;
  }
`;

const Close = styled.button`
  font: normal normal 0px/0px "Circular", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  color: #636363;

  padding: 16px 8px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 20px;

    position: static;
    padding: 14px 16px;
  }
`;

const Reset = styled.button`
  font: normal normal 14px/18px "Circular", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  color: #0f7276;

  padding: 16px 8px 14px;
  background-color: transparent;
  border: 0;
  position: absolute;
  top: 0;
  right: 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Icon = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`;

export default class MoreFilters extends Component {
  handleClick = () => {
    this.props.onTogglerClick(this.props.name);
  };

  handleCancel = () => {
    this.props.onCancelClick();
  };

  handleSave = () => {
    this.props.onSaveClick();
  };

  handleReset = () => {
    this.props.onResetClick();
  };

  render() {
    const { title, isOpen, isActive } = this.props;

    return (
      <Section>
        <Toggler
          type="button"
          onClick={this.handleClick}
          isActive={isOpen || isActive}
        >
          {title}
        </Toggler>
        {isOpen && (
          <StyledBody fixed={isOpen}>
            <Content>
              <Head>
                <Title>{`All filters(${this.props.isActive})`}</Title>
              </Head>
              <Scroll>{this.props.children}</Scroll>
              <Tools>
                <Reset type="button" onClick={this.handleReset}>
                  Clean all
                </Reset>
                <Close type="button" onClick={this.handleCancel}>
                  <Icon src={closeIcon} alt="Close" />
                  Cancel
                </Close>
                <Save type="button" onClick={this.handleSave}>
                  See homes
                </Save>
              </Tools>
            </Content>
          </StyledBody>
        )}
      </Section>
    );
  }
}
