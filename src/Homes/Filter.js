import React, { Component } from "react";
import Body from "react-body-classname";
import styled from "styled-components";
import DropDown from "../UI/DropDown";
import { Wrapper } from "../UI";

const StyledBody = styled(Body)`
  position: ${props => (props.fixed ? "fixed" : "static")};
  top: 0;
  left: 0;
  right: 0;
  @media (min-width: 768px) {
    position: relative;
    &:before {
      content: "";

      display: ${props => (props.fixed ? "block" : "none")};
      position: absolute;
      top: 136px;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.8);
      z-index: 1;
    }
  }
`;

const FilterWrap = styled.div`
  position: relative;
  padding: 12px 0;
  margin-bottom: 24px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  @media (min-width: 1200px) {
    background-color: white;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    margin-bottom: 0;
    z-index: 1;
  }
`;

const FilterList = styled.div`
  display: flex;
  align-items: flex-start;
`;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.state = { id: "", isOpen: false };
  }

  handleFilterChange(childID, childIsOpen) {
    this.setState({ id: childID, isOpen: !childIsOpen });
  }

  render() {
    return (
      <StyledBody fixed={this.state.isOpen}>
        <FilterWrap>
          <Wrapper>
            <FilterList>
              <DropDown
                ID="1"
                contentType="date"
                titleDefault="Dates"
                titleActive="Check in — Check out"
                isOpen={this.state.id === "1" && this.state.isOpen}
                onTogglerClick={this.handleFilterChange}
              />
              <DropDown
                ID="2"
                contentType="text"
                titleDefault="More filters"
                isOpen={this.state.id === "2" && this.state.isOpen}
                onTogglerClick={this.handleFilterChange}
              />
            </FilterList>
          </Wrapper>
        </FilterWrap>
      </StyledBody>
    );
  }
}

export default Filter;
