import React, { Component } from "react";
import Body from "react-body-classname";
import styled from "styled-components";
import DropDown from "../UI/DropDown";
import { Wrapper } from "../UI";
import DateSelect from "../UI/DateSelect";

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

const Section = styled.div`
  position: fixed;
  top: 81px;
  left: 0;
  right: 0;
  margin-bottom: 0;
  z-index: 1;
  padding: 12px 0;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  background-color: white;
`;

const List = styled.div`
  display: flex;
  align-items: flex-start;
`;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { id: null, isOpen: false };
  }

  handleFilterChange = (id, isOpen) => {
    this.setState({ id: id, isOpen: !isOpen });
  };

  render() {
    return (
      <StyledBody fixed={this.state.isOpen}>
        <Section>
          <Wrapper>
            <List>
              <DropDown
                id="date"
                titleDefault="Dates"
                titleActive="Check in — Check out"
                isOpen={this.state.id === "date" && this.state.isOpen}
                onTogglerClick={this.handleFilterChange}
              >
                <DateSelect
                  numOfMonthOnMobile={12}
                  numOfMonthOnTablet={1}
                  numOfMonthOnDesktop={2}
                />
              </DropDown>
              <DropDown
                id="more"
                titleDefault="More filters"
                isOpen={this.state.id === "more" && this.state.isOpen}
                onTogglerClick={this.handleFilterChange}
              >
                <p>text</p>
              </DropDown>
            </List>
          </Wrapper>
        </Section>
      </StyledBody>
    );
  }
}

export default Filter;
