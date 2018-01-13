import React, { Component } from "react";
import styled from "styled-components";
import Body from "react-body-classname";
import dateFns from "date-fns";
// import ClickOutside from "react-click-outside";
import DropDown from "../UI/DropDown";
import { Wrapper } from "../UI";
import DateSelect from "../UI/DateSelect";
import InstantBook from "./InstantBook";

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
    this.state = {
      id: null,
      isOpen: false,
      date: { from: null, to: null },
      book: false
    };
  }

  closeDropDown = target => {
    if (target.tagName === "BUTTON") return;

    this.setState({ id: null, isOpen: false });
  };

  handleFilterChange = (id, isOpen) => {
    this.setState({ id: id, isOpen: !isOpen });
  };

  handleDateChange = range => {
    this.setState({ date: { from: range.from, to: range.to } });
  };

  handleBookChange = value => {
    this.setState({ book: !value });
  };

  getDateTitle = () => {
    const state = this.state;

    if (state.isOpen && state.id === "date") {
      return "Check in – Check out";
    } else if (state.date.from && state.date.to) {
      return (
        dateFns.format(state.date.from, "DD.MM.YY") +
        " – " +
        dateFns.format(state.date.to, "DD.MM.YY")
      );
    }

    return "Dates";
  };

  render() {
    return (
      <StyledBody fixed={this.state.isOpen}>
        <Section>
          <Wrapper>
            <List>
              <DropDown
                id="date"
                title={this.getDateTitle()}
                isOpen={this.state.id === "date" && this.state.isOpen}
                onTogglerClick={this.handleFilterChange}
                onClickOutside={this.closeDropDown}
              >
                <DateSelect
                  numOfMonthOnMobile={12}
                  numOfMonthOnTablet={1}
                  numOfMonthOnDesktop={2}
                  onDateClick={this.handleDateChange}
                />
              </DropDown>
              <DropDown
                id="book"
                title="Instant book"
                isOpen={this.state.id === "book" && this.state.isOpen}
                onTogglerClick={this.handleFilterChange}
                onClickOutside={this.closeDropDown}
              >
                <InstantBook
                  onBookChange={this.handleBookChange}
                  checked={this.state.book}
                />
              </DropDown>
              <DropDown
                id="more"
                title="More filters"
                isOpen={this.state.id === "more" && this.state.isOpen}
                onTogglerClick={this.handleFilterChange}
                onClickOutside={this.closeDropDown}
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
