import React from "react";
import styled from "styled-components";
import rightIcon from "./right.svg";

const DateHead = styled.div`
  margin-top: 26px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  margin: 0 0 12px;
`;

const Text = styled.span`
  font-size: 18px;
  line-height: 23px;
  font-weight: 300;
  color: ${props => (props.active ? "#0f7276" : "#636363")};

  padding-bottom: 2px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${props => (props.active ? "#008489" : "transparent")};
`;

const Image = styled.img`
  margin: 0 16px;
`;

const Week = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: -10px;
`;

const Day = styled.span`
  font-size: 12px;
  line-height: 15px;
  color: #636363;
  text-align: center;

  width: 43px;
`;

export default () => {
  return (
    <DateHead>
      <Title>
        <Text active>Check-in</Text>
        <Image src={rightIcon} alt="Next action" />
        <Text>Check-out</Text>
      </Title>
      <Week>
        <Day>Su</Day>
        <Day>Mo</Day>
        <Day>Tu</Day>
        <Day>We</Day>
        <Day>Th</Day>
        <Day>Fr</Day>
        <Day>Sa</Day>
      </Week>
    </DateHead>
  );
};
