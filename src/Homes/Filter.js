import React, { Component } from "react";
import styled from "styled-components";
import Body from "react-body-classname";
import format from "date-fns/format";
import DropDown from "../UI/DropDown";
import { Wrapper } from "../UI";
import DateSelect from "../UI/DateSelect";
import InstantBook from "./InstantBook";
import Booler from "../UI/Booler";

const StyledBody = styled(Body)`
  position: ${props => (props.fixed ? "fixed" : "static")};
  top: 0;
  left: 0;
  right: 0;
  @media (min-width: 768px) {
    position: relative;
  }
`;

const Smoke = styled.div`
  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: calc(100vh - 136px);
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 1;
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

const getDateTitle = (id, range) => {
  const from = format(range.from, "DD.MM.YY");
  const to = format(range.to, "DD.MM.YY");

  if (id === "date") {
    return (
      (range.from ? from : "Check in") + " – " + (range.to ? to : "Check out")
    );
  } else if (range.from && range.to) {
    return from + " – " + to;
  } else {
    return "Dates";
  }
};

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      date: { from: null, to: null },
      prevDate: { from: null, to: null },
      book: false
    };
  }

  closeDropDown = () => {
    this.setState({ id: null });
  };

  handleCancel = () => {
    if (this.state.id === "date") {
      this.setState({
        date: { from: this.state.prevDate.from, to: this.state.prevDate.to }
      });
    } else if (this.state.id === "book") {
      this.setState({ book: false });
    }

    this.setState({ id: null });
  };

  handleFilterChange = id => {
    if (this.state.id === id) {
      this.setState({ id: null });
    } else {
      this.setState({ id: id });
      if (id === "date") {
        this.setState({
          prevDate: { from: this.state.date.from, to: this.state.date.to }
        });
      }
    }
  };

  handleDateChange = range => {
    this.setState({ date: { from: range.from, to: range.to } });
  };

  handleBookChange = checked => {
    this.setState({ book: !checked });
  };

  render() {
    return (
      <StyledBody fixed={this.state.id}>
        <Section>
          {this.state.id && <Smoke onClick={this.handleCancel} />}
          <Wrapper>
            <List>
              <DropDown
                id="date"
                title={getDateTitle(this.state.id, this.state.date)}
                isOpen={this.state.id === "date"}
                onTogglerClick={this.handleFilterChange}
                onCancelClick={this.handleCancel}
              >
                <DateSelect
                  numOfMonthOnMobile={12}
                  numOfMonthOnTablet={1}
                  numOfMonthOnDesktop={2}
                  range={this.state.date}
                  onDateChange={this.handleDateChange}
                />
              </DropDown>
              <DropDown
                id="book"
                title="Instant book"
                isOpen={this.state.id === "book"}
                onTogglerClick={this.handleFilterChange}
                onCancelClick={this.handleCancel}
              >
                <InstantBook>
                  <Booler
                    onBoolerChange={this.handleBookChange}
                    checked={this.state.book}
                  />
                </InstantBook>
              </DropDown>
              <DropDown
                id="more"
                title="More filters"
                isOpen={this.state.id === "more"}
                onTogglerClick={this.handleFilterChange}
                onCancelClick={this.handleCancel}
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
