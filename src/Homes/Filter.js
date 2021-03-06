import React, { Component } from "react";
import styled from "styled-components";
import Media from "react-responsive";
import format from "date-fns/format";
import _ from "lodash/core";
import { Wrapper } from "../UI";
import DropDown from "../UI/DropDown";
import MoreFilters from "./MoreFilters";
import DateSelect from "../UI/DateSelect";
import Booler from "../UI/Booler";
import Guests from "./Guests";
import Price from "./Price";
import RoomTypes from "./RoomTypes";
import RoomsAndBeds from "./RoomsAndBeds";
import Amenities from "./Amenities";
import Facilities from "./Facilities";
import ShowHide from "../UI/ShowHide";

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

const Heading = styled.h4`
  font-size: 18px;
  line-height: 21px;
  font-weight: normal;

  margin: 0 0 20px;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 23px;
  }
`;

const Title = styled.h6`
  font-size: 16px;
  line-height: 19px;
  font-weight: 300;

  margin: 0 0 4px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;

    margin-bottom: 3px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;

    margin-bottom: 4px;
  }
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 300;

  margin: 0 0 4px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;

    margin-bottom: 3px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 16px;

    margin-bottom: 4px;
  }
`;

const Link = styled.a`
  color: #0f7276;
`;

const Separator = styled.hr`
  border: 0;
  height: 1px;
  background-color: rgba(72, 72, 72, 0.1);
  margin: 32px 0;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    margin-bottom: 23px;
  }
`;

const getDateTitle = (active, range) => {
  const from = format(range.from, "DD MMM");
  const to = format(range.to, "DD MMM");

  if (active === "date") {
    return `${range.from ? from : "Check in"} – ${range.to ? to : "Check out"}`;
  } else if (range.from && range.to) {
    return `${from} – ${to}`;
  }

  return "Dates";
};

const getGuestsTitle = guests => {
  const guestCount = Object.values(guests).reduce((prev, next) => prev + next);

  return `Guests ${guestCount ? " · " + guestCount : ""}`;
};

const getTypesTitle = types => {
  const typesCount = Object.values(types).filter(type => type);

  return `Room types ${typesCount.length ? " · " + typesCount.length : ""}`;
};

const getPriceTitle = (active, price, defaultPrice) => {
  if (
    (price.from !== defaultPrice.from || price.to !== defaultPrice.to) &&
    active !== "price"
  ) {
    return `$${price.from} – $${price.to}`;
  }

  return "Price";
};

const differenceOfStates = (state, defaultState) => {
  const { active, date, guests, buffer, types, price, book } = defaultState;
  const merger =
    window.outerWidth >= 1200
      ? { ...state, active, date, guests, buffer, types, price, book }
      : { ...state, active, date, guests, buffer };

  const differentFields = Object.keys(defaultState).filter(
    key => !_.isEqual(defaultState[key], merger[key])
  );

  return differentFields.length;
};

export default class Filter extends Component {
  defaultState = {
    active: null,
    date: { from: null, to: null },
    book: false,
    host: false,
    guests: { adults: 1, childs: 0, infants: 0 },
    types: { home: false, private: false, shared: false },
    price: { from: 10, to: 1000 },
    rooms: { bedrooms: 0, beds: 0, bathrooms: 0 },
    amenities: { heating: false, kitchen: false, tv: false, wifi: false },
    facilities: {
      elebator: false,
      parking: false,
      pool: false,
      wheelchair: false
    },
    buffer: null
  };

  state = this.defaultState;

  handleSave = () => {
    this.setState({ active: null });
  };

  handleCancel = () => {
    this.setState({
      active: null,
      ...this.state.buffer
    });
  };

  handleReset = dropDownName => {
    this.setState({
      [dropDownName]: this.defaultState[dropDownName],
      buffer: null
    });
  };

  handleResetMore = () => {
    const {
      book,
      types,
      price,
      host,
      rooms,
      amenities,
      facilities
    } = this.defaultState;
    if (window.outerWidth >= 1200) {
      this.setState({
        host,
        rooms,
        amenities,
        facilities,
        buffer: null
      });
    } else {
      this.setState({
        book,
        types,
        price,
        host,
        rooms,
        amenities,
        facilities,
        buffer: null
      });
    }
  };

  handleTogglerClick = dropDownName => {
    if (this.state.active) {
      this.setState({ ...this.state.buffer });
    } else {
      const currentState = { ...this.state };
      delete currentState.active;
      delete currentState.buffer;

      this.setState({
        buffer: currentState
      });
    }

    if (this.state.active === dropDownName) {
      this.setState({ active: null, buffer: null });
    } else {
      this.setState({ active: dropDownName });
    }
  };

  handleChange = (name, values) => {
    this.setState({
      [name]: values
    });
  };

  render() {
    const diffCount = differenceOfStates(this.state, this.defaultState);

    return (
      <Section>
        {this.state.active && <Overlay onClick={this.handleCancel} />}
        <Wrapper>
          <List>
            <DropDown
              name="date"
              title={getDateTitle(this.state.active, this.state.date)}
              isOpen={this.state.active === "date"}
              isActive={!_.isEqual(this.state.date, this.defaultState.date)}
              onTogglerClick={this.handleTogglerClick}
              onCancelClick={this.handleCancel}
              onSaveClick={this.handleSave}
              onResetClick={this.handleReset}
            >
              <DateSelect
                numOfMonthOnMobile={12}
                numOfMonthOnTablet={1}
                numOfMonthOnDesktop={2}
                range={this.state.date}
                onChange={this.handleChange}
              />
            </DropDown>
            <DropDown
              name="guests"
              title={getGuestsTitle(this.state.guests)}
              isOpen={this.state.active === "guests"}
              isActive={!_.isEqual(this.state.guests, this.defaultState.guests)}
              onTogglerClick={this.handleTogglerClick}
              onCancelClick={this.handleCancel}
              onSaveClick={this.handleSave}
              onResetClick={this.handleReset}
            >
              <Guests
                name="guests"
                values={this.state.guests}
                onChange={this.handleChange}
              />
            </DropDown>
            <Media query="(min-width: 1200px)">
              <DropDown
                name="types"
                title={getTypesTitle(this.state.types)}
                isOpen={this.state.active === "types"}
                isActive={!_.isEqual(this.state.types, this.defaultState.types)}
                onTogglerClick={this.handleTogglerClick}
                onCancelClick={this.handleCancel}
                onSaveClick={this.handleSave}
                onResetClick={this.handleReset}
              >
                <RoomTypes
                  name="types"
                  values={this.state.types}
                  onChange={this.handleChange}
                />
              </DropDown>
              <DropDown
                name="price"
                title={getPriceTitle(
                  this.state.active,
                  this.state.price,
                  this.defaultState.price
                )}
                isOpen={this.state.active === "price"}
                isActive={!_.isEqual(this.state.price, this.defaultState.price)}
                onTogglerClick={this.handleTogglerClick}
                onCancelClick={this.handleCancel}
                onSaveClick={this.handleSave}
                onResetClick={this.handleReset}
              >
                <Price
                  min={10}
                  max={1000}
                  price={this.state.price}
                  onChange={this.handleChange}
                />
              </DropDown>
              <DropDown
                name="book"
                title="Instant book"
                isOpen={this.state.active === "book"}
                isActive={!_.isEqual(this.state.book, this.defaultState.book)}
                onTogglerClick={this.handleTogglerClick}
                onCancelClick={this.handleCancel}
                onSaveClick={this.handleSave}
                onResetClick={this.handleReset}
              >
                <Booler
                  name="book"
                  checked={this.state.book}
                  onChange={this.handleChange}
                >
                  <Title>
                    <b>Instant book</b>
                  </Title>
                  <Text>
                    Listings you can book without waiting for host approval.
                  </Text>
                </Booler>
              </DropDown>
            </Media>
            <MoreFilters
              name="more"
              title={`More filters ${diffCount ? " · " + diffCount : ""}`}
              isOpen={this.state.active === "more"}
              isActive={diffCount}
              onTogglerClick={this.handleTogglerClick}
              onCancelClick={this.handleCancel}
              onSaveClick={this.handleSave}
              onResetClick={this.handleResetMore}
            >
              <Media query="(max-width: 1200px)">
                <Heading>Room type</Heading>
                <RoomTypes
                  name="types"
                  values={this.state.types}
                  onChange={this.handleChange}
                />

                <Separator />

                <Heading>Price range</Heading>
                <Price
                  min={10}
                  max={1000}
                  price={this.state.price}
                  onChange={this.handleChange}
                />

                <Separator />
              </Media>
              <Heading>Rooms and beds</Heading>
              <RoomsAndBeds
                name="rooms"
                values={this.state.rooms}
                onChange={this.handleChange}
              />
              <Separator />
              <Heading>More options</Heading>
              <Media query="(max-width: 1200px)">
                <Booler
                  name="book"
                  checked={this.state.book}
                  onChange={this.handleChange}
                >
                  <Title>Instant book</Title>
                  <Text>Secure a reservation instantly.</Text>
                  <Text>
                    <Link href="/">Learn more</Link>
                  </Text>
                </Booler>
              </Media>
              <Booler
                name="host"
                checked={this.state.host}
                onChange={this.handleChange}
              >
                <Title>Superhost</Title>
                <Text>Stay with recognized hosts.</Text>
                <Text>
                  <Link href="/">Learn more</Link>
                </Text>
              </Booler>
              <Separator />
              <ShowHide title="Amenities">
                <Amenities
                  name="amenities"
                  values={this.state.amenities}
                  onChange={this.handleChange}
                />
              </ShowHide>
              <Separator />
              <ShowHide title="Facilities">
                <Facilities
                  name="facilities"
                  values={this.state.facilities}
                  onChange={this.handleChange}
                />
              </ShowHide>
              <Separator />
            </MoreFilters>
          </List>
        </Wrapper>
      </Section>
    );
  }
}
