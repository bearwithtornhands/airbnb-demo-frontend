import React, { Component } from "react";
import styled from "styled-components";
import Body from "react-body-classname";
import DateHead from "./DateHead";
import closeIcon from "./close.svg";

const StyledBody = styled(Body)`
  position: ${props => (props.fixed ? "fixed" : "static")};
  top: 0;
  left: 0;
  right: 0;
  @media (min-width: 768px) {
    position: ${props => (props.fixed && props.large ? "fixed" : "static")};
  }
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
    position: ${props => (props.large ? "fixed" : "absolute")};
    top: ${props => (props.large ? "calc(80px + 56px)" : "calc(100% + 8px)")};
    left: 0;
    right: ${props => (props.large ? "0" : "auto")};
    bottom: ${props => (props.large ? "0" : "auto")};

    display: ${props => (props.large ? "flex" : "block")};
    min-width: ${props => (props.large ? "0" : "326px")};
    padding: ${props => (props.large ? "0" : "31px 25px 0 25px")};
    border: ${props => (props.large ? "0" : "1px solid rgba(72, 72, 72, 0.2)")};
    box-shadow: ${props =>
      props.large ? "none" : "0px 2px 4px rgba(72, 72, 72, 0.08)"};
    border-radius: ${props => (props.large ? "0" : "4px")};
  }
  @media (min-width: 1200px) {
    ${props =>
      props.large &&
      `
      min-width: calc(100vw - 391px);
      right: auto;
      padding: 0 16px 0 calc((100vw - 966px)/2);
     `};
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
  @media (min-width: 768px) {
    overflow: ${props => (props.large ? "auto" : "visible")};
    padding: ${props => (props.large ? "40px 8px" : "0")};
  }
  @media (min-width: 1200px) {
    ${props =>
      props.large &&
      `
      padding: 47px 0;
     `};
  }
`;

const Tools = styled.div`
  background-color: white;
  box-shadow: 0px -1px 0px #d5d5d5;
  padding: 8px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: ${props => (props.large ? "center" : "space-between")};
    box-shadow: none;
    padding: ${props => (props.large ? "8px 0" : "0")};
    margin: ${props => (props.large ? "0" : "0 -25px")};
  }
  @media (min-width: 1200px) {
    ${props =>
      props.large &&
      `
      justify-content: flex-end
     `};
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
    font-size: ${props => (props.large ? "18px" : "16px")};
    line-height: ${props => (props.large ? "20px" : "64px")};
    color: ${props => (props.large ? "white" : "#0f7276")};
    font-weight: ${props => (props.large ? "bold" : "normal")};

    background-color: ${props => (props.large ? "#008489" : "transparent")};
    padding: ${props => (props.large ? "14px 0" : "0")};
    width: ${props => (props.large ? "147px" : "110px")};
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
    font-size: ${props => (props.large ? "18px" : "16px")};
    line-height: ${props => (props.large ? "20px" : "64px")};

    position: static;
    padding: ${props => (props.large ? "14px 16px" : "0")};
    width: ${props => (props.large ? "auto" : "110px")};
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

class DropDown extends Component {
  getDropDownTitle = () => {
    if (this.props.name === "date") return "Dates";

    return this.props.title;
  };

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
    this.props.onResetClick(this.props.name);
  };

  render() {
    const { name, title, isOpen, isActive } = this.props;

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
          <StyledBody large={name === "more"} fixed={isOpen}>
            <Content large={name === "more"}>
              <Head>
                <Title>{this.getDropDownTitle()}</Title>
                {name === "date" && <DateHead />}
              </Head>
              <Scroll large={name === "more"}>{this.props.children}</Scroll>
              <Tools large={name === "more"}>
                <Reset type="button" onClick={this.handleReset}>
                  {name === "more" ? "Clean all" : "Reset"}
                </Reset>
                <Close
                  type="button"
                  large={name === "more"}
                  onClick={this.handleCancel}
                >
                  <Icon src={closeIcon} alt="Close" />
                  Cancel
                </Close>
                <Save
                  type="button"
                  large={name === "more"}
                  onClick={this.handleSave}
                >
                  {name === "more" ? "See homes" : "Accept"}
                </Save>
              </Tools>
            </Content>
          </StyledBody>
        )}
      </Section>
    );
  }
}

export default DropDown;
