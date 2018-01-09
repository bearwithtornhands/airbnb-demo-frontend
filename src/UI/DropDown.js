import React, { Component } from "react";
import styled from "styled-components";

const DropDownWrap = styled.div`
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
  color: ${props => (props.open ? "white" : "#383838")};

  display: inline-block;
  vertical-align: top;
  padding: 6px 15px;
  border: 1px solid
    ${props => (props.open ? "#008489" : "rgba(72, 72, 72, 0.2)")};
  border-radius: 4px;
  background-color: ${props => (props.open ? "#008489" : "white")};
  cursor: pointer;
  outline: none;
  &:focus {
    box-shadow: 0 0 6px rgba(0, 132, 137, 0.5);
  }
`;

const Content = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;

  padding: 25px 31px;
  width: 636px;
  height: 406px;
  background: white;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;

class DropDown extends Component {
  constructor(props) {
    super(props);
    // this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onTogglerClick(this.props.id, this.props.open);
    // this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const id = this.props.id;
    const isOpen = this.props.open;
    const title = isOpen
      ? this.props.titleActive || this.props.title
      : this.props.title;

    return (
      <DropDownWrap>
        <Toggler id={id} type="button" onClick={this.handleClick} open={isOpen}>
          {title}
        </Toggler>
        {isOpen && <Content>dd content</Content>}
      </DropDownWrap>
    );
  }
}

export default DropDown;
