import React from "react";
import styled from "styled-components";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./style.css";

const Reset = styled.button`
  font: normal normal 14px/18px "Circular", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  color: #0f7276;

  padding: 16px 8px 14px;
  background-color: transparent;
  border: 0;
  position: absolute;
  top: 0;
  right: 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

class DateSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = { from: undefined, to: undefined };
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    this.props.onDateClick(range);
  }

  handleResetClick() {
    this.setState({ from: undefined, to: undefined });
  }

  getNumberOfMonths() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 768 && windowWidth < 1200) {
      return this.props.numOfMonthOnTablet;
    } else if (windowWidth >= 1200) {
      return this.props.numOfMonthOnDesktop;
    }

    return this.props.numOfMonthOnMobile;
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    const numberOfMonths = this.getNumberOfMonths();

    return (
      <div className="DateRange">
        <Reset type="button" onClick={this.handleResetClick}>
          Reset
        </Reset>
        <DayPicker
          className="Selectable"
          numberOfMonths={numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
      </div>
    );
  }
}

export default DateSelect;
