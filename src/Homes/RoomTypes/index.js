import React from "react";
import styled from "styled-components";
import Checkbox from "../../UI/Checkbox";
import iconHome from "./home.svg";
import iconPrivate from "./private.svg";
import iconShared from "./shared.svg";

const RoomTypes = styled.div``;

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
  &:last-child {
    margin-bottom: 0;
  }
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

export default props => (
  <RoomTypes>
    <Type>
      <Checkbox
        id="home"
        checked={props.values.home}
        onCheckboxChange={(id, checked) =>
          props.onTypesChange(props.name, id, checked)
        }
      >
        <Title>Entire home</Title>
        <Text>Have a place to yourself</Text>
      </Checkbox>
      <Icon src={iconHome} alt="Entire home" />
    </Type>
    <Type>
      <Checkbox
        id="private"
        checked={props.values.private}
        onCheckboxChange={(id, checked) =>
          props.onTypesChange(props.name, id, checked)
        }
      >
        <Title>Private room</Title>
        <Text>Have your own room and share some common spaces</Text>
      </Checkbox>
      <Icon src={iconPrivate} alt="Private room" />
    </Type>
    <Type>
      <Checkbox
        id="shared"
        checked={props.values.shared}
        onCheckboxChange={(id, checked) =>
          props.onTypesChange(props.name, id, checked)
        }
      >
        <Title>Shared room</Title>
        <Text>Stay in a shared space, like a common room</Text>
      </Checkbox>
      <Icon src={iconShared} alt="Shared room" />
    </Type>
  </RoomTypes>
);
