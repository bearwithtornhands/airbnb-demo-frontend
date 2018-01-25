import React, { Component } from "react";
import styled from "styled-components";
import Body from "react-body-classname";
import DateHead from "./DateHead";
import closeIcon from "./close.svg";

const BodySmall = styled(Body)`
  position: ${props => (props.fixed ? "fixed" : "static")};
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  @media (min-width: 768px) {
    position: relative;
  }
`;

const BodyMiddle = styled(Body)`
  position: ${props => (props.fixed ? "fixed" : "static")};
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  @media (min-width: 1200px) {
    position: relative;
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
  color: ${props => (props.isOpen ? "white" : "#383838")};

  display: inline-block;
  vertical-align: top;
  padding: 7px 15px;
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
    min-width: 326px;
    padding: 31px 25px 0 25px;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    border-radius: 4px;
  }
`;

const ContentLarge = Content.extend`
  @media (min-width: 768px) {
    position: fixed;
    top: calc(80px + 56px);
    left: 0;
    right: 0;
    bottom: 0;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    min-width: 0;
  }
  @media (min-width: 1200px) {
    min-width: calc(100vw - 391px);
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
  @media (min-width: 768px) {
    overflow: visible;
    padding: 0;
  }
`;

const ScrollLarge = Scroll.extend`
  @media (min-width: 768px) {
    overflow: auto;
    padding: 40px 8px 64px;
  }
  @media (min-width: 1200px) {
    padding: 47px 0 64px;
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

const ToolsLarge = Tools.extend`
  @media (min-width: 768px) {
    justify-content: center;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0;
    padding: 8px 0;
    background-color: white;
    z-index: 1;
  }
  @media (min-width: 1200px) {
    position: absolute;
    right: 16px;
    left: auto;
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
    padding: 0;
    width: 110px;
  }
`;

const SaveLarge = Save.extend`
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 20px;
    color: white;
    font-weight: bold;

    width: 147px;
    padding: 14px 0;
    background-color: #008489;
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

const CloseLarge = Close.extend`
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 20px;

    width: auto;
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

class DropDown extends Component {
  getDropDownTitle = () => {
    if (this.props.name === "date") return "Dates";

    return this.props.title;
  };

  handleClick = () => {
    this.props.onTogglerClick(this.props.name);
  };

  handleCancel = () => {
    this.props.onCancelClick(this.props.name);
  };

  handleSave = () => {
    this.props.onSaveClick();
  };

  handleReset = () => {
    this.props.onResetClick(this.props.name);
  };

  render() {
    const { name, isOpen, title } = this.props;

    return (
      <Section>
        <Toggler type="button" onClick={this.handleClick} isOpen={isOpen}>
          {title}
        </Toggler>
        {isOpen &&
          (name === "more" ? (
            <BodyMiddle fixed={isOpen}>
              <ContentLarge>
                <Head>
                  <Title>{this.getDropDownTitle()}</Title>
                </Head>
                <ScrollLarge>{this.props.children}</ScrollLarge>
                <ToolsLarge>
                  <Reset type="button" onClick={this.handleReset}>
                    Clear all
                  </Reset>
                  <CloseLarge type="button" onClick={this.handleCancel}>
                    <Icon src={closeIcon} alt="Close" />
                    Cancel
                  </CloseLarge>
                  <SaveLarge type="button" onClick={this.handleSave}>
                    See homes
                  </SaveLarge>
                </ToolsLarge>
              </ContentLarge>
            </BodyMiddle>
          ) : (
            <BodySmall fixed={isOpen}>
              <Content>
                <Head>
                  <Title>{this.getDropDownTitle()}</Title>
                  {name === "date" && <DateHead />}
                </Head>
                <Scroll>{this.props.children}</Scroll>
                <Tools>
                  <Reset type="button" onClick={this.handleReset}>
                    Reset
                  </Reset>
                  <Close type="button" onClick={this.handleCancel}>
                    <Icon src={closeIcon} alt="Close" />
                    Cancel
                  </Close>
                  <Save type="button" onClick={this.handleSave}>
                    Accept
                  </Save>
                </Tools>
              </Content>
            </BodySmall>
          ))}
      </Section>
    );
  }
}

export default DropDown;
