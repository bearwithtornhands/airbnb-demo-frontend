import React from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./style.css";

class DateSelect extends React.Component {
  getNumberOfMonths() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 768 && windowWidth < 1200) {
      return this.props.numOfMonthOnTablet;
    } else if (windowWidth >= 1200) {
      return this.props.numOfMonthOnDesktop;
    }

    return this.props.numOfMonthOnMobile;
  }

  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.props.range);
    this.props.onDateChange(range);
  };

  render() {
    const { from, to } = this.props.range;
    const modifiers = { start: from, end: to };
    const numberOfMonths = this.getNumberOfMonths();

    return (
      <DayPicker
        className="Selectable"
        numberOfMonths={numberOfMonths}
        selectedDays={[from, { from, to }]}
        modifiers={modifiers}
        onDayClick={this.handleDayClick}
      />
    );
  }
}

export default DateSelect;
