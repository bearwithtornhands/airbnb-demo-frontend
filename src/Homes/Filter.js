import React, { Component } from "react";
import styled from "styled-components";
import Body from "react-body-classname";
import format from "date-fns/format";
import { Wrapper } from "../UI";
import DropDown from "../UI/DropDown";
import DateSelect from "../UI/DateSelect";
import Booler from "../UI/Booler";
import InstantBook from "./InstantBook";
import Guests from "./Guests";
import Price from "./Price";

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
      book: false,
      guest: { adult: 0, children: 0, infant: 0 },
      hist: null
    };
  }

  handleCancel = () => {
    const prevState = {};
    prevState[this.state.id] = this.state.hist;

    this.setState(prevState);
    this.setState({ id: null });
  };

  handleFilterChange = id => {
    const prevState = { hist: null };
    prevState.hist = this.state[id];

    if (this.state.id === id) {
      this.setState({ id: null });
    } else {
      this.setState(prevState);
      this.setState({ id: id });
    }
  };

  handleDateChange = range => {
    this.setState({ date: { from: range.from, to: range.to } });
  };

  handleBookChange = checked => {
    this.setState({ book: !checked });
  };

  handleGuestsChange = (name, count) => {
    const guestState = {
      adult: this.state.guest.adult,
      children: this.state.guest.children,
      infant: this.state.guest.infant
    };

    guestState[name] = count;

    this.setState({ guest: guestState });
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
                id="guest"
                title="Guests"
                isOpen={this.state.id === "guest"}
                onTogglerClick={this.handleFilterChange}
                onCancelClick={this.handleCancel}
              >
                <Guests
                  adult={this.state.guest.adult}
                  children={this.state.guest.children}
                  infant={this.state.guest.infant}
                  onGuestsChange={this.handleGuestsChange}
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
                id="price"
                title="Price"
                isOpen={this.state.id === "price"}
                onTogglerClick={this.handleFilterChange}
                onCancelClick={this.handleCancel}
              >
                <Price />
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
