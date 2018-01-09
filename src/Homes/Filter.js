import React, { Component } from "react";
import styled from "styled-components";
import DropDown from "../UI/DropDown";
import { Wrapper } from "../UI";

const FilterWrap = styled.div`
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
  }
`;

const FilterList = styled.div`
  display: flex;
  align-item: flex-start;
`;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.state = { id: "", isOpen: false };
  }

  handleFilterChange(id, isOpen) {
    this.setState({ id: id, isOpen: !isOpen });
  }

  render() {
    return (
      <FilterWrap>
        <Wrapper>
          <FilterList>
            <DropDown
              id="1"
              type="date"
              title="Dates"
              titleActive="Check in — Check out"
              open={this.state.id === "1" && this.state.isOpen}
              onTogglerClick={this.handleFilterChange}
            />
            <DropDown
              id="2"
              type="text"
              title="More filters"
              open={this.state.id === "2" && this.state.isOpen}
              onTogglerClick={this.handleFilterChange}
            />
          </FilterList>
        </Wrapper>
      </FilterWrap>
    );
  }
}

export default Filter;
