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

const Overlay = styled.div`
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
    return `${range.from ? from : "Check in"} – ${range.to ? to : "Check out"}`;
  } else if (range.from && range.to) {
    return `${from} – ${to}`;
  } else {
    return "Dates";
  }
};

class Filter extends Component {
  state = {
    name: null,
    date: { from: null, to: null },
    book: false,
    guest: { adults: 0, children: 0, infants: 0 },
    stateBuffer: null
  };

  handleCancel = () => {
    this.setState({ [this.state.name]: this.state.stateBuffer });
    this.setState({ name: null });
  };

  handleSave = () => {
    this.setState({ name: null });
  };

  handleFilterChange = dropDownName => {
    if (this.state.name === dropDownName) {
      this.setState({ [this.state.name]: this.state.stateBuffer });
      this.setState({ name: null });
    } else {
      this.setState({
        stateBuffer: this.state[dropDownName]
      });
      this.setState({ name: dropDownName });
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
      adults: this.state.guest.adults,
      children: this.state.guest.children,
      infants: this.state.guest.infants
    };

    guestState[name] = count;

    this.setState({ guest: guestState });
  };

  render() {
    return (
      <StyledBody fixed={this.state.name}>
        <Section>
          {this.state.name && <Overlay onClick={this.handleCancel} />}
          <Wrapper>
            <List>
              <DropDown
                name="date"
                title={getDateTitle(this.state.name, this.state.date)}
                isOpen={this.state.name === "date"}
                onTogglerClick={this.handleFilterChange}
                onCancelClick={this.handleCancel}
                onSaveClick={this.handleSave}
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
                name="guest"
                title="Guests"
                isOpen={this.state.name === "guest"}
                onTogglerClick={this.handleFilterChange}
                onCancelClick={this.handleCancel}
                onSaveClick={this.handleSave}
              >
                <Guests
                  adults={this.state.guest.adults}
                  children={this.state.guest.children}
                  infants={this.state.guest.infants}
                  onGuestsChange={this.handleGuestsChange}
                />
              </DropDown>
              <DropDown
                name="book"
                title="Instant book"
                isOpen={this.state.name === "book"}
                onTogglerClick={this.handleFilterChange}
                onCancelClick={this.handleCancel}
                onSaveClick={this.handleSave}
              >
                <InstantBook>
                  <Booler
                    onBoolerChange={this.handleBookChange}
                    checked={this.state.book}
                  />
                </InstantBook>
              </DropDown>
              <DropDown
                name="price"
                title="Price"
                isOpen={this.state.name === "price"}
                onTogglerClick={this.handleFilterChange}
                onCancelClick={this.handleCancel}
                onSaveClick={this.handleSave}
              >
                <Price />
              </DropDown>
              <DropDown
                name="more"
                title="More filters"
                isOpen={this.state.name === "more"}
                onTogglerClick={this.handleFilterChange}
                onCancelClick={this.handleCancel}
                onSaveClick={this.handleSave}
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
