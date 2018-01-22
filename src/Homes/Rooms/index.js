import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "../../UI/Checkbox";
import iconHome from "./home.svg";
import iconPrivate from "./private.svg";
import iconShared from "./shared.svg";

const Section = styled.div``;

const Type = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h5`
  font-size: 16px;
  line-height: 19px;
  font-weight: 300;

  margin: 0 0 3px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;

    margin-bottom: 4px;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

const Text = styled.p`
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;

  margin: 0;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 16px;
  }
  @media (min-width: 1200px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

const Icon = styled.img`
  margin-left: 30px;
`;

class Rooms extends Component {
  handleRoomsChange = (name, checked) => {
    this.props.onRoomsChange(name, checked);
  };

  render() {
    return (
      <Section>
        <Type>
          <Checkbox
            name="home"
            checked={this.props.home}
            onCheckboxChange={this.handleRoomsChange}
          >
            <Title>Entire home</Title>
            <Text>Have a place to yourself</Text>
          </Checkbox>
          <Icon src={iconHome} alt="Entire home" />
        </Type>
        <Type>
          <Checkbox
            name="private"
            checked={this.props.private}
            onCheckboxChange={this.handleRoomsChange}
          >
            <Title>Private room</Title>
            <Text>Have your own room and share some common spaces</Text>
          </Checkbox>
          <Icon src={iconPrivate} alt="Private room" />
        </Type>
        <Type>
          <Checkbox
            name="shared"
            checked={this.props.shared}
            onCheckboxChange={this.handleRoomsChange}
          >
            <Title>Shared room</Title>
            <Text>Stay in a shared space, like a common room</Text>
          </Checkbox>
          <Icon src={iconShared} alt="Shared room" />
        </Type>
      </Section>
    );
  }
}

export default Rooms;
