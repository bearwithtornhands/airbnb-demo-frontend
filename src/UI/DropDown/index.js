import React, { Component } from "react";
import styled from "styled-components";
import DateHead from "./DateHead";
import closeIcon from "./close.svg";

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
  line-height: 18px;
  color: ${props => (props.isOpen ? "white" : "#383838")};

  display: inline-block;
  vertical-align: top;
  padding: 6px 15px;
  border: 1px solid
    ${props => (props.isOpen ? "#008489" : "rgba(72, 72, 72, 0.2)")};
  border-radius: 4px;
  background-color: ${props => (props.isOpen ? "#008489" : "white")};
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
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: auto;
    bottom: auto;

    display: block;
    padding: 31px 25px 0 25px;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    border-radius: 4px;
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
  overflow: auto;
  padding: 40px 8px;
  @media (min-width: 768px) {
    overflow: visible;
    padding: 0;
  }
`;

const Tools = styled.div`
  background-color: white;
  box-shadow: 0px -1px 0px #d5d5d5;
  padding: 8px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    margin: 0 -25px;
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
    font-size: 16px;
    line-height: 64px;
    color: #0f7276;
    font-weight: normal;

    background-color: transparent;
    border-radius: 0;
    padding: 0;
    width: 110px;
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
    font-size: 16px;
    line-height: 64px;

    position: static;
    padding: 0;
    width: 110px;
  }
`;

const Icon = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`;

class DropDown extends Component {
  handleClick = () => {
    this.props.onTogglerClick(this.props.id, this.props.isOpen);
  };

  render() {
    const isOpen = this.props.isOpen;
    const title = this.props.title;

    return (
      <Section>
        <Toggler type="button" onClick={this.handleClick} isOpen={isOpen}>
          {title}
        </Toggler>
        {isOpen && (
          <Content>
            <Head>
              <Title>{this.props.titleDefault}</Title>
              {this.props.id === "date" && <DateHead />}
            </Head>
            <Scroll>{this.props.children}</Scroll>
            <Tools>
              <Close
                type="button"
                id={null}
                isOpen={false}
                onClick={this.handleClick}
              >
                <Icon src={closeIcon} alt="Close" />
                Cancel
              </Close>
              <Save
                type="button"
                id={null}
                isOpen={false}
                onClick={this.handleClick}
              >
                Save
              </Save>
            </Tools>
          </Content>
        )}
      </Section>
    );
  }
}

export default DropDown;
