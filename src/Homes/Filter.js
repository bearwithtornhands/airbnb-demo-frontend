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
import Rooms from "./Rooms";

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

const getDateTitle = (isActive, range) => {
  const from = format(range.from, "DD.MM.YY");
  const to = format(range.to, "DD.MM.YY");

  if (isActive === "date") {
    return `${range.from ? from : "Check in"} – ${range.to ? to : "Check out"}`;
  } else if (range.from && range.to) {
    return `${from} – ${to}`;
  } else {
    return "Dates";
  }
};

class Filter extends Component {
  state = {
    isActive: null,
    date: { from: null, to: null },
    book: false,
    guests: { adults: 0, children: 0, infants: 0 },
    types: { home: false, private: false, shared: false },
    price: { from: 10, to: 1000 },
    stateBuffer: null
  };

  handleCancel = () => {
    this.setState({
      [this.state.isActive]: this.state.stateBuffer,
      isActive: null
    });
  };

  handleSave = () => {
    this.setState({ isActive: null });
  };

  handleFilterChange = dropDownName => {
    this.setState({ [this.state.isActive]: this.state.stateBuffer });
    if (this.state.isActive === dropDownName) {
      this.setState({ isActive: null });
    } else {
      this.setState({
        stateBuffer: this.state[dropDownName],
        isActive: dropDownName
      });
    }
  };

  handleDateChange = range => {
    this.setState({ date: { from: range.from, to: range.to } });
  };

  handleBookChange = checked => {
    this.setState({ book: checked });
  };

  handleGuestsChange = (name, count) => {
    this.setState({
      guests: { ...this.state.guests, [name]: count }
    });
  };

  handleRoomsChange = (name, checked) => {
    this.setState({
      types: { ...this.state.guests, [name]: checked }
    });
  };

  handlePriceChange = price => {
    this.setState({ price: price });
  };

  render() {
    return (
      <StyledBody fixed={this.state.isActive}>
        <Section>
          {this.state.isActive && <Overlay onClick={this.handleCancel} />}
          <Wrapper>
            <List>
              <DropDown
                name="date"
                title={getDateTitle(this.state.isActive, this.state.date)}
                isOpen={this.state.isActive === "date"}
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
                name="guests"
                title="Guests"
                isOpen={this.state.isActive === "guests"}
                onTogglerClick={this.handleFilterChange}
                onCancelClick={this.handleCancel}
                onSaveClick={this.handleSave}
              >
                <Guests
                  adults={this.state.guests.adults}
                  children={this.state.guests.children}
                  infants={this.state.guests.infants}
                  onGuestsChange={this.handleGuestsChange}
                />
              </DropDown>
              <DropDown
                name="book"
                title="Instant book"
                isOpen={this.state.isActive === "book"}
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
                name="types"
                title="Room type"
                isOpen={this.state.isActive === "types"}
                onTogglerClick={this.handleFilterChange}
                onCancelClick={this.handleCancel}
                onSaveClick={this.handleSave}
              >
                <Rooms
                  home={this.state.types.home}
                  private={this.state.types.private}
                  shared={this.state.types.shared}
                  onRoomsChange={this.handleRoomsChange}
                />
              </DropDown>
              <DropDown
                name="price"
                title="Price"
                isOpen={this.state.isActive === "price"}
                onTogglerClick={this.handleFilterChange}
                onCancelClick={this.handleCancel}
                onSaveClick={this.handleSave}
              >
                <Price
                  min={10}
                  max={1000}
                  price={this.state.price}
                  onPriceChange={this.handlePriceChange}
                />
              </DropDown>
              <DropDown
                name="more"
                title="More filters"
                isOpen={this.state.isActive === "more"}
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
